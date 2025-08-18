//여기는 순수 로직만 담고 있다
import { promises as fs } from "fs";
import path from "path";

export type Produts = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export async function getProducts(): Promise<Produts[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  //   const produtsItem = ["shirts", "pants", "skirt", "shoes", "dress"];
  return JSON.parse(data);
}
//있다면 프로미스를 반환하고 없다면 언디파인을 반환함
export async function getProdut(id: string): Promise<Produts | undefined> {
  const produts = await getProducts();
  return produts.find((item) => item.id == id);
}
