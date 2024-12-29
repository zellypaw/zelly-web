"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LandingPage() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // 브라우저에서만 실행
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setScreenWidth(width);
    }
  }, []);

  // screenWidth가 0일 때는 아직 클라이언트에서 계산되지 않았다는 의미
  if (screenWidth === 0) return null;

  return (
    <div style={{ width: "100vw" }}>
      <Image
        src="/images/landing.png"
        alt="img"
        priority
        // layout="responsive" // 반응형 이미지
        width={5750} // 원본 너비
        height={32768} // 원본 높이
        sizes="97vw" // 화면 크기별 최적화
        objectFit="cover" // 비율 유지하며 화면 꽉 채우기
        quality={90}
      />
    </div>
  );
}
