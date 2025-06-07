import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        background: '#fff',
        minHeight: '100vh',
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#111',
      }}
    >
      {/* 顶部栏 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 60px 20px 60px',
        }}
      >
        {/* 左上角LOGO文字 */}
        <div style={{ fontWeight: 'bold', fontSize: 32, letterSpacing: 1.5 }}>
          LUVTRY STUDIO
        </div>
        {/* 右上角导航栏 */}
        <nav style={{ display: 'flex', gap: 40, fontSize: 18 }}>
          <Link href="/work" style={{ color: '#111', textDecoration: 'none' }}>
            cOJOh
          </Link>
          <Link href="/about" style={{ color: '#888', textDecoration: 'none' }}>
            studio
          </Link>
          <Link href="/sketches" style={{ color: '#888', textDecoration: 'none' }}>
            product
          </Link>
          <Link href="/instagram" style={{ color: '#888', textDecoration: 'none' }}>
            instagram
          </Link>
          <Link href="/store" style={{ color: '#888', textDecoration: 'none' }}>
            store
          </Link>
          <Link href="/cart" style={{ color: '#888', textDecoration: 'none' }}>
            cart
          </Link>
        </nav>
      </div>
      {/* 中部大字提示 */}
      <div
        style={{
          marginTop: 80,
          textAlign: 'center',
          fontSize: 28,
          color: '#888',
        }}
      >
        这里是 LUVCREATE 极简个人网站首页 xuhui晚上好
      </div>
    </div>
  );
}
