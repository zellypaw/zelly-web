#!/bin/bash

# 에러 발생 시 중단
set -e

# 스크립트 위치 기준으로 프로젝트 루트로 이동
cd "$(dirname "$0")/.."

echo "🚀 Starting deployment for zelly.co..."

# 1. 이미지 최적화 실행
echo "🖼️  Optimizing images..."
node scripts/optimize-images.mjs

# 2. Next.js 정적 빌드
echo "🏗️  Building Next.js app..."
npm run build

# 3. S3 동기화 (1단계: 모든 파일 업로드, 삭제 안함)
echo "📦 Uploading all assets to S3..."
aws s3 sync ./out s3://zelly.co \
    --cache-control "max-age=31536000, public"

# 4. S3 동기화 (2단계: HTML 파일만 캐시 설정 덮어쓰기)
echo "📄 Setting cache-control for HTML files..."
aws s3 sync ./out s3://zelly.co \
    --exclude "*" \
    --include "*.html" \
    --cache-control "no-cache, no-store, must-revalidate"

# 5. S3 동기화 (3단계: S3에서 이전 에셋 삭제하되 HTML 파일은 유지)
# 기존에 no-cache 헤더와 함께 동기화된 HTML 파일이 삭제되지 않도록 보호합니다.
echo "🧹 Cleaning up old assets..."
aws s3 sync ./out s3://zelly.co \
    --delete \
    --exclude "*.html"

# 5. CloudFront 캐시 무효화 (Invalidation)
echo "🧹 Invalidating CloudFront cache..."
# CloudFront 배포 ID는 환경변수 CLOUDFRONT_DISTRIBUTION_ID를 사용합니다.
if [ -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "⚠️  CLOUDFRONT_DISTRIBUTION_ID is not set, skipping invalidation."
else
    aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" \
        --paths "/*"
fi

echo "✨ Deployment successfully finished!"
