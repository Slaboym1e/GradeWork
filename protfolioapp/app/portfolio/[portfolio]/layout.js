import Link from "next/link";

export const metadata = {
  title: "Портфолио пользователя",
  description: "На этой странице, бла бла бла",
};

export default function PortfolioLayout({ children }) {
  return (
    <div>
      <Link href="/">Домой</Link>
      {children}
    </div>
  );
}
