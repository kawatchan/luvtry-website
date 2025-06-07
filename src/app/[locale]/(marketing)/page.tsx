export default function Home() {
  return (
    <div style={{
      background: '#fff',
      minHeight: '100vh',
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: '#111',
    }}>
      {/* 顶部栏 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 60px 20px 60px',
      }}>
        {/* 左上角LOGO文字 */}
        <div style={{ fontWeight: 'bold', fontSize: 32, letterSpacing: 1.5 }}>
          LUVCREATE
        </div>
        {/* 右上角导航栏 */}
        <nav style={{ display: 'flex', gap: 40, fontSize: 18 }}>
          <a href="/work" style={{ color: '#111', textDecoration: 'none' }}>work</a>
          <a href="/about" style={{ color: '#888', textDecoration: 'none' }}>about</a>
          <a href="/sketches" style={{ color: '#888', textDecoration: 'none' }}>sketches</a>
          <a href="/instagram" style={{ color: '#888', textDecoration: 'none' }}>instagram</a>
          <a href="/store" style={{ color: '#888', textDecoration: 'none' }}>store</a>
          <a href="/cart" style={{ color: '#888', textDecoration: 'none' }}>cart</a>
        </nav>
      </div>
      {/* 中部大字提示 */}
      <div style={{
        marginTop: 80,
        textAlign: 'center',
        fontSize: 28,
        color: '#888',
      }}>
        这里是 LUVCREATE 极简个人网站首页
      </div>
    </div>
  );
}
