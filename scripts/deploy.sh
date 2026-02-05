#!/bin/bash

# 에러 발생 시 중단
set -e

# 스크립트 위치 기준으로 프로젝트 루트로 이동
cd "$(dirname "$0")/.."

echo "🚀 Starting deployment for zellypaw.com..."

# 1. 이미지 최적화 실행
echo "🖼️  Optimizing images..."
node scripts/optimize-images.mjs

# 2. Next.js 정적 빌드
echo "🏗️  Building Next.js app..."
npm run build

# 3. S3 동기화 (1단계: 모든 파일 업로드, 삭제 안함)
echo "📦 Uploading all assets to S3..."
aws s3 sync ./out s3://zellypaw.com \
    --cache-control "max-age=31536000, public"

# 4. S3 동기화 (2단계: HTML 파일만 캐시 설정 덮어쓰기)
echo "📄 Setting cache-control for HTML files..."
aws s3 sync ./out s3://zellypaw.com \
    --exclude "*" \
    --include "*.html" \
    --cache-control "no-cache, no-store, must-revalidate"

# 5. S3 동기화 (3단계: 필요 없는 옛날 파일들만 삭제)
# --exclude "*.html"을 붙여서 HTML 파일이 삭제 대상이 되지 않도록 보호합니다.
echo "🧹 Cleaning up old assets..."
aws s3 sync ./out s3://zellypaw.com \
    --delete \
    --exclude "*.html"

# 5. CloudFront 캐시 무효화 (Invalidation)
echo "🧹 Invalidating CloudFront cache..."
# 배포 ID: EE7THT3OJQ93N
aws cloudfront create-invalidation \
    --distribution-id EE7THT3OJQ93N \
    --paths "/*"

echo "✨ Deployment successfully finished!"
