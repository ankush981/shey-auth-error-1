"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isPublicPage = pathname === "/login" || pathname === "/register";

  return (
    <div>
      {!isPublicPage && (
        <div className="flex justify-between items-center gap-5">
          <h1>Next Auth</h1>
          <div className="flex gap-3 items-center">
            <Link href="/">Home</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/profile">Profile</Link>
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
