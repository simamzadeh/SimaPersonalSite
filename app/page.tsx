// /app/page.tsx
'use client';

import React from 'react';

export default function HomePage() {
  const [foldAngle, setFoldAngle] = React.useState(180);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxFold = 180;
      const foldRatio = Math.min(scrollY / 500, 1); // Adjust 500 to control how much scroll folds it
      setFoldAngle(180 - (foldRatio * maxFold));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const letterHeight = 700; // Fixed height for folding effect
  const halfHeight = letterHeight / 2;

  return (
    <main className="relative min-h-screen flex flex-col items-center pb-32 px-8" style={{ paddingTop: '600px' }}>

      {/* 📝 Paper letter in the center */}
      <div
        className="
        relative z-10
        max-w-3xl
        text-gray-800
      "
        style={{
          fontFamily: 'Caveat',
          perspective: '1200px',
          height: letterHeight,
          borderRadius: '12px',
        }}
      >
        {/* Top half */}
        <div
          style={{
            height: halfHeight,
            overflow: 'hidden',
            background: 'white',
            backgroundImage: "url('/images/crumpled_paper.avif')",
            backgroundSize: 'cover',
            backgroundPosition: '0px 0px',
            padding: '80px 80px 0 80px',
            border: '1px solid #e5e7eb',
            borderBottom: 'none',
            borderRadius: '12px 12px 0 0',
          }}
        >
          <h1 className="text-6xl mb-6">hello there, 🌿</h1>
          <h2 className="text-xl leading-relaxed mb-12">
            you've entered a corner of the internet dedicated to sima's thoughts and creations. sima is a primarily a frontend engineer who dabbles in web design. she likes taking photos, writing down her thoughts and spending time creating various tangible things... 
          </h2>
        </div>

        {/* Bottom half */}
        <div
          style={{
            height: halfHeight,
            background: 'white',
            backgroundImage: "url('/images/crumpled_paper.avif')",
            backgroundSize: 'cover',
            backgroundPosition: '0px -100%',
            padding: '0 80px 80px 80px',
            border: '1px solid #e5e7eb',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            transform: `rotateX(${foldAngle}deg)`,
            transformOrigin: 'center top',
            transformStyle: 'preserve-3d',
            willChange: 'transform',
            position: 'relative',
          }}
        >
          {/* White backface */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'hsla(0, 100%, 100%, 0.9)',
              backfaceVisibility: 'hidden',
              transform: 'rotateX(180deg) translateZ(0.5px)',
            }}
          />
        </div>
      </div>

      <div className="mt-32 h-96"></div> {/* Spacer for more scroll */}

      {/* 🖼️ Floating scrapbook image */}
      <img
        src="/images/fujifilm.png"
        alt=""
        className="
          absolute 
          top-16 
          right-[-60px] 
          w-64 
          rotate-[6deg]
        "
      />
    </main>
  );
}
