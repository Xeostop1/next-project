import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진제품 사이트",
  description: "멋진 제품을 판매하는 곳입니다 ",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Note </h1>
          <nav>
            <Link href="/contact">Contact</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/products">Products</Link>
            <br />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
