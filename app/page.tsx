'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#f7f1e8]">

      {/* =========================
          TOP UI - Navbar + Logo
      ========================= */}
      <header className="absolute top-0 left-0 z-50 w-full px-8 pt-8 flex items-start justify-between">
        <div>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-16 w-auto select-none pointer-events-none mt-[-2px]"
          />
        </div>

        <nav className="flex gap-8 text-sm tracking-wide">
          <a href="/blog">blog</a>
          <a href="/photos">photos</a>
          <a href="/music">art</a>
          <a href="/about">about</a>
        </nav>
      </header>

      {/* =========================
          COLLAGE WRAPPER
      ========================= */}
      <div className="absolute inset-0 pt-24 flex items-center justify-center overflow-hidden">

        <div
          className="relative"
          style={{
            width: '1440px',
            height: '1024px',
            transform: 'scale(min(calc(100vw / 1440), calc(100vh / 1024)))',
            transformOrigin: 'center center',
          }}
        >

          {/* =========================
              BACKGROUND / STRUCTURE
          ========================= */}

          {/* ENVELOPE (center anchor) */}
          <section className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[640px] rotate-[-2deg]">
              <img
                src="/images/envelope.png"
                alt=""
                className="w-full drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </section>

          {/* CAMERA */}
          <img
            src="/images/camera.png"
            alt=""
            className="absolute -left-[120px] top-[140px] z-20 w-[380px] rotate-[6deg] select-none pointer-events-none"
          />

          {/* =========================
              LEFT PHOTO CLUSTER
          ========================= */}

          <img
            src="/images/photo1.jpg"
            alt=""
            className="absolute left-[-40px] bottom-[110px] z-10 w-[260px] rotate-[-8deg] rounded-sm border-[12px] border-white shadow-xl select-none pointer-events-none"
          />

          <img
            src="/images/photo2.jpg"
            alt=""
            className="absolute left-[160px] bottom-[120px] z-10 w-[250px] rotate-[6deg] border-[10px] border-white shadow-lg select-none pointer-events-none"
          />

          <img
            src="/images/sparkle1-doodle.png"
            alt=""
            className="absolute left-[230px] top-[200px] z-20 w-[80px] rotate-[-8deg] select-none pointer-events-none"
          />

          {/* =========================
              RIGHT / TOP ELEMENTS
          ========================= */}

          <img
            src="/images/butterfly1-doodle.png"
            alt=""
            className="absolute left-[730px] top-[100px] z-20 w-[100px] rotate-[-15deg] select-none pointer-events-none"
          />

          {/* BLUE GRID NOTE */}
          <div className="absolute right-[250px] top-[-1px] z-10">
            <img
              src="/images/blue-grid-note.png"
              alt=""
              className="w-[420px] rotate-[1deg] select-none pointer-events-none"
            />
          </div>

          {/* =========================
              GIRL + PEACH CARD
          ========================= */}
          <div className="absolute left-[370px] top-[40px] z-20">

            {/* peach paper */}
            <div className="absolute -left-2 -top-2 w-[260px] h-[260px] bg-[#e7b59a] rotate-[-2deg] shadow-lg" />

            <img
              src="/images/tape-pink.png"
              alt=""
              className="absolute left-1/2 -top-2 -translate-x-1/2 w-[120px] rotate-[12deg] select-none pointer-events-none z-30"
            />

            <img
              src="/images/girl-illustration.jpg"
              alt=""
              className="relative w-[240px] top-6 rotate-[1deg] select-none pointer-events-none"
            />
          </div>

          {/* craft drawing */}
          <img
            src="/images/craft-drawing.png"
            alt=""
            className="absolute left-[290px] top-[310px] z-20 w-[200px] rotate-[-10deg] select-none pointer-events-none"
          />

          {/* =========================
              PHOTO 3 BLOCK
          ========================= */}
          <div className="absolute right-[-100px] top-[260px] z-20">

            <img
              src="/images/photo3.jpg"
              alt=""
              className="w-[380px] rotate-[3deg] border-[14px] border-white shadow-xl select-none pointer-events-none"
            />

            <img
              src="/images/sticker-peach.png"
              alt=""
              className="absolute -left-8 -bottom-8 w-[90px] rotate-[-8deg] select-none pointer-events-none"
            />
          </div>

          {/* =========================
              PINK GRID NOTE
          ========================= */}
          <div className="absolute -right-[30px] -bottom-[1px] z-10">

            <div className="relative">

              <img
                src="/images/pink-grid-note.png"
                alt=""
                className="w-[500px] rotate-[280deg] select-none pointer-events-none"
              />

              {/* bear sticker */}
              <img
                src="/images/sticker-bear.png"
                alt=""
                className="absolute -top-0 w-[120px] rotate-[-8deg] select-none pointer-events-none"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}