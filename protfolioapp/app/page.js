import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/portfolio/2">Портфолио</Link>
      <br />
      <Link href="/control">Панель управления</Link>
      <br />
      <Link href="/login">Login</Link>
    </main>
  );
}
