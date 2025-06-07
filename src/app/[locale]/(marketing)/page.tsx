// src/app/[locale]/(marketing)/page.tsx
import Image from 'next/image';

const IMAGES = [
  '/assets/images/1.png',
  '/assets/images/2.png',
  '/assets/images/3.png',
  '/assets/images/4.png',
  '/assets/images/5.png',
  '/assets/images/6.png',
  '/assets/images/7.png',
  '/assets/images/8.png',
  '/assets/images/9.png',
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      }}
    >
      {/* 顶栏 */}
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 0 40px 0',
        }}
      >
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={160}
          height={40}
          style={{ objectFit: 'contain' }}
        />
        {/* 可放菜单按钮 */}
        <div style={{ width: 32, height: 32, marginRight: 32 }}>
          {/* 菜单icon可用SVG */}
          <svg width="32" height="32" fill="none">
            <rect y="7" width="32" height="3" fill="#111" />
            <rect y="15" width="32" height="3" fill="#111" />
            <rect y="23" width="32" height="3" fill="#111" />
          </svg>
        </div>
      </div>
      {/* 九宫格图片区域 */}
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}
      >
        {IMAGES.map((src, i) => (
          <div
            key={src}
            style={{
              background: '#f7f7f7',
              aspectRatio: '1 / 1',
              borderRadius: 16,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              src={src}
              alt={`Work ${i + 1}`}
              width={350}
              height={350}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
