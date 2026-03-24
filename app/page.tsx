export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto space-y-6 px-6 py-10">
      <h1 className="text-4xl font-semibold">hi, i’m sima 🌿</h1>
      <p className="text-neutral-600">
        this is a corner of the internet where i write letters, share photos, and document things i create.
      </p>

      <div className="pt-6 space-y-2">
        <a href="/blog" className="block underline">
          → read my blog
        </a>
        <a href="/photography" className="block underline">
          → photography
        </a>
        <a href="/projects" className="block underline">
          → projects
        </a>
      </div>
    </main>
  );
}
