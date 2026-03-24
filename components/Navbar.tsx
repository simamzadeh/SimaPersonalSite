import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-10 text-sm font-sans">
  <Link href="/" className="font-bold text-xl">
    sima
  </Link>
  <div className="flex gap-6 text-neutral-500">
    <Link href="/blog" className="hover:text-neutral-700 transition">blog</Link>
    <Link href="/photography" className="hover:text-neutral-700 transition">photography</Link>
    <Link href="/projects" className="hover:text-neutral-700 transition">projects</Link>
  </div>
</nav>
  );
}