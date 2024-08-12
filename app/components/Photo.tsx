import Link from "next/link";
import Image from "next/image";
import directus from "@/lib/directus";

export default function Photo({
  item,
}: {
  item: { image: string; id: string; title: string };
}) {
  return (
    <>
      <Link className="link" href={`/photo/${item.image}`} scroll={false}>
        <Image
          priority
          className="img"
          src={`${directus.url}assets/${item.image}`}
          alt={item.title}
          width={300}
          height={200}
        />
      </Link>
    </>
  );
}
