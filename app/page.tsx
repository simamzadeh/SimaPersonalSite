// /app/page.tsx
export default function HomePage() {
  return (
    <main className="relative min-h-screen flex justify-center items-start py-32 px-8">

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
          hover:rotate-0 
          transition-transform duration-300
          pointer-events-auto
          z-20
        "
      />

      {/* 📝 Paper letter in the center */}
      <div className="
        relative z-10
        bg-white
        bg-[url('/images/crumpled_paper.avif')] 
        bg-cover
        p-20
        max-w-3xl
        shadow-[0_16px_40px_rgba(0,0,0,0.25)]
        border border-gray-200
        rounded-[12px]
        rotate-[-1deg]
        text-gray-800
        font-serif
      ">
        <h1 className="text-6xl mb-6">hi, i’m sima 🌿</h1>
        <p className="text-xl leading-relaxed mb-12">
          this is a corner of the internet where i write letters, share photos, and document things i create.
        </p>

        <div className="space-y-4 text-lg">
          <a href="/blog" className="block underline">→ read my blog</a>
          <a href="/photography" className="block underline">→ photography</a>
          <a href="/projects" className="block underline">→ projects</a>
        </div>
      </div>
    </main>
  );
}