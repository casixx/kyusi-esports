// app/components/Navbar.tsx
'use client'; // Required kung maglalagay ka ng logic/state

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Pang-check ng active page
if (pathname.startsWith("/auth")) {
    return null;
  }
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white border-b-4 border-primary">
      {/* Logo */}
      <h1 className="text-xl font-press-start text-primary">
        KYUSI<span className="text-white">ESPORTS</span>
      </h1>

      {/* Menu Links */}
      <div className="flex gap-6 font-bold font-sans">
        <Link 
          href="/" 
          className={pathname === "/" ? "text-primary" : "hover:text-brand-pink"}
        >
          HOME
        </Link>
        
        <Link 
          href="/about" 
          className={pathname === "/about" ? "text-primary " : "hover:text-brand-pink"}
        >
          ABOUT
        </Link>
        
        <Link 
          href="/team" 
          className={pathname === "/team" ? "text-primary" : "hover:text-brand-pink"}
        >
          TEAM
        </Link>

      <Link
        href="/merch"
        className={pathname === "/merch" ? "text-primary" : "hover:text-brand-pink"}
      >
        MERCH
      </Link>


      </div>

      {/* Login Button */}
      <Link href="/auth/login">
        <button className="px-4 py-2 bg-primary text-white font-press-start text-xs rounded hover:bg-red-700 transition">
          LOGIN
        </button>
      </Link>


    </nav>
  );
}