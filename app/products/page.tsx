import MeowArticle from "@/componets/MeowArticle";
import { getProducts } from "@/service/products";
import clothesImage from "../../public/images/clothes.jpg";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 3;

export default async function ProductsPage() {
  console.log("프류덕트 페이지 시작");
  // const produtsItem = ["shirts", "pants", "skirt", "shoes"];
  const produtsItem = await getProducts();
  return (
    <div>
      <h1>프로턱츠 페이지</h1>
      {/* 스크린사이즈에 대해 최적화해줌 */}
      <Image src={clothesImage} alt="Clothes" />
      <ul>
        {produtsItem.map((item, index) => (
          <li key={index}>
            <Link href={`/products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
