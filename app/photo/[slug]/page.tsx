"use client";
import directus from "@/lib/directus";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PhotoPage({ params }: { params: { slug: string } }) {
  const router = useRouter();

  return (
    <div className="photo_container">
      <Image
        priority
        className="img"
        src={`${directus.url}assets/${params.slug}`}
        alt="logo"
        width={300}
        height={200}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
        sizes="60vw"
      />
      <button className="btn" onClick={() => router.back()}>
        +
      </button>
    </div>
  );
}
