// src/app/[locale]/(marketing)/page.tsx
export default function Home() {
  // 9宫格图片数据，可以扩展
  const images = [
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

  return (
    <div className="w-screen min-h-screen bg-[#f5f6fa] flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white p-6 md:p-12 rounded-xl shadow-xl">
        {/* 顶部 */}
        <div className="flex justify-between items-center mb-8">
          {/* LOGO */}
          <img src="/assets/images/logo.svg" alt="logo" className="h-10 w-auto" />
          {/* 菜单图标 */}
          <div className="w-8 h-8 flex flex-col justify-center items-center cursor-pointer">
            <span className="block w-6 h-0.5 bg-black my-0.5"></span>
            <span className="block w-6 h-0.5 bg-black my-0.5"></span>
            <span className="block w-6 h-0.5 bg-black my-0.5"></span>
          </div>
        </div>
        {/* 图片宫格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div key={i} className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden rounded-md">
              <img src={src} alt={`img${i+1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
