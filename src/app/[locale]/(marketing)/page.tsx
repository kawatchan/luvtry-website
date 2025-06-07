'use client';

import Image from 'next/image';

// 假设你有8张图片: public/images/1.png ... public/images/8.png
const images = [
  '/images/1.png',
  '/images/2.png',
  '/images/3.png',
  '/images/4.png',
  '/images/5.png',
  '/images/6.png',
  '/images/7.png',
  '/images/8.png',
];

export default function Home() {
  return (
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#111',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '40px 0 40px 0',
      }}
    >
      {/* 顶部LOGO与菜单 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 32px 40px 32px',
        }}
      >
        {/* LOGO（SVG） */}
        <Image src="/logo.svg" alt="logo" width={170} height={40} priority />

        {/* 简单菜单，SVG三道杠 */}
        <svg width="32" height="32" viewBox="0 0 32 32">
          <rect x="4" y="9" width="24" height="2" fill="#111" />
          <rect x="4" y="15" width="24" height="2" fill="#111" />
          <rect x="4" y="21" width="24" height="2" fill="#111" />
        </svg>
      </div>

      {/* 响应式图片网格 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          padding: '0 32px',
        }}
      >
        {images.map((src, i) => (
          <div key={i} style={{ width: '100%', aspectRatio: '1/1', position: 'relative', background: '#f8f8f8' }}>
            <Image
              src={src}
              alt={`work-${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 600px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
