import Link from "next/link";

export const metadata = {
  title: "Панель управления",
  description: "На этой странице, бла бла бла",
};

export default function ControlLayout({ children }) {
  return (
    <section>
      <Link href="/">Домой</Link>
      <br />
      <Link href="/control/users">Пользователи</Link>
      <br />
      <Link href="/control/groups">Группы</Link>
      <br />
      <Link href="/control/classes">Классы</Link>
      <br />
      <Link href="/control/events">Мероприятия</Link>
      {children}
    </section>
  );
}
