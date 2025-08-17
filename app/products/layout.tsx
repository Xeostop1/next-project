import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진제품 사이트 | 전체 제품확인 ",
  description: "멋진 제품을 확인해 보세요",
};
export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <Link href="/produsts/women">여성복</Link>
        <br />
        <Link href="/produsts/men">남성복</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
