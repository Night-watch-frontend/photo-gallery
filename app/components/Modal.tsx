"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <div>
      <Link href="/" className="modal" scroll={false} />
      {children}
    </div>
  );
}
