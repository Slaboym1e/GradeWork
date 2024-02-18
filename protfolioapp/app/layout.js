import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./ui/header/header";

const roboto = Roboto({ subsets: ["latin", "cyrillic"], weight: ["400"] });

export const metadata = {
  title: "Домашняя страница",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
