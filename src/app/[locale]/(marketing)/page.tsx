// 这是你的首页极简风格代码，只需粘贴到 /pages/index.tsx
import Image from 'next/image';

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
      {/* 横排大图片 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 32,
        marginTop: 32
      }}>
        {/* 图片1 */}
        <div style={{width: 320, height: 320, background: '#eee', borderRadius: 12, overflow: 'hidden'}}>
          {/* 这里可以换成你的作品图片 */}
          <Image src="/sample1.jpg" alt="作品1" width={320} height={320} />
        </div>
        {/* 图片2 */}
        <div style={{width: 320, height: 320, background: '#eee', borderRadius: 12, overflow: 'hidden'}}>
          <Image src="/sample2.jpg" alt="作品2" width={320} height={320} />
        </div>
        {/* 图片3 */}
        <div style={{width: 320, height: 320, background: '#eee', borderRadius: 12, overflow: 'hidden'}}>
          <Image src="/sample3.jpg" alt="作品3" width={320} height={320} />
        </div>
      </div>
    </div>
  );
}
