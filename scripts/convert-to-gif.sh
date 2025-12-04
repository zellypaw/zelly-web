#!/bin/bash

# GIF 변환 스크립트
# 사용법: ./convert-to-gif.sh input.mov output.gif [width]

if [ "$#" -lt 2 ]; then
    echo "사용법: $0 <입력파일> <출력파일> [너비(기본:400)]"
    echo "예시: $0 recording.mov feature1.gif 400"
    exit 1
fi

INPUT="$1"
OUTPUT="$2"
WIDTH="${3:-400}"  # 기본값 400px

if [ ! -f "$INPUT" ]; then
    echo "오류: 입력 파일 '$INPUT'을 찾을 수 없습니다."
    exit 1
fi

echo "🎬 비디오를 GIF로 변환 중..."
echo "입력: $INPUT"
echo "출력: $OUTPUT"
echo "너비: ${WIDTH}px"

# FFmpeg가 설치되어 있는지 확인
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg가 설치되어 있지 않습니다."
    echo "📦 설치: brew install ffmpeg"
    exit 1
fi

# 고품질 GIF 생성 (palette 사용)
ffmpeg -i "$INPUT" \
    -vf "fps=12,scale=${WIDTH}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=128[p];[s1][p]paletteuse=dither=bayer" \
    -loop 0 \
    "$OUTPUT"

if [ $? -eq 0 ]; then
    FILE_SIZE=$(du -h "$OUTPUT" | cut -f1)
    echo "✅ 변환 완료!"
    echo "📁 파일 크기: $FILE_SIZE"
    echo "📍 저장 위치: $OUTPUT"
    
    # 1MB 이상이면 경고
    FILE_SIZE_BYTES=$(stat -f%z "$OUTPUT")
    if [ $FILE_SIZE_BYTES -gt 1048576 ]; then
        echo "⚠️  파일 크기가 1MB를 초과합니다. 웹 사용 시 최적화를 권장합니다."
        echo "💡 ezgif.com/optimize 에서 추가 최적화하세요."
    fi
else
    echo "❌ 변환 실패"
    exit 1
fi
