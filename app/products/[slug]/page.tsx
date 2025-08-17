import { notFound } from "next/navigation";

import { Metadata } from "next";
import { title } from "process";
import { getProducts, getProdut } from "@/service/products";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

export default async function ProductsPage({ params: { slug } }: Props) {
  const product = await getProdut(slug);
  if (!product) {
    notFound();
  }
  return (
    <div>
      <h1>{product.name} 페이지 </h1>
    </div>
  );
}

//미리 만들고 싶은 경로
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((item) => ({
    slug: item.id,
  }));
}
