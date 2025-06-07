export default function Home() {
  return (
    <div style={{
      background: '#fff',
      minHeight: '100vh',
      fontFamily: 'Helvetica, Arial, sans-serif',
      color: '#111'
    }}>
      {/* 顶部栏 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '40px 60px 20px 60px'
      }}>
        {/* 左上角LOGO文字 */}
        <div style={{fontWeight: 'bold', fontSize: 32, letterSpacing: 1.5}}>
          LUVCREATE
        </div>
        {/* 右上角导航栏 */}
        <nav style={{display: 'flex', gap: 40, fontSize: 18}}>
          <a href="#" style={{color: '#111', textDecoration: 'none'}}>work</a>
          <a href="#" style={{color: '#888', textDecoration: 'none'}}>about</a>
          <a href="#" style={{color: '#888', textDecoration: 'none'}}>sketches</a>
          <a href="#" style={{color: '#888', textDecoration: 'none'}}>instagram</a>
          <a href="#" style={{color: '#888', textDecoration: 'none'}}>store</a>
          <a href="#" style={{color: '#888', textDecoration: 'none'}}>cart</a>
        </nav>
      </div>
      {/* 中部大字提示 */}
      <div style={{
        marginTop: 80,
        textAlign: 'center',
        fontSize: 28,
        color: '#888'
      }}>
        这里是 LUVCREATE 极简个人网站首页<br/>
        （你看到这个，说明页面已生效！）
      </div>
    </div>
  );
}
