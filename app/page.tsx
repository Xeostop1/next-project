import AcmeLogo from "@/app/ui/acme-logo";
import Counter from "@/componets/Counter";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* NotFoundPage(); */}
      <h1>hello</h1>
      {/* 원격에서는 컨피그 해줘야 해함 */}
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="cat"
        width={400}
        height={400}
      />
      <Counter />
    </div>
  );
}
