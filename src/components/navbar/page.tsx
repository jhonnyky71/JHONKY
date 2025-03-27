
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-full  bg-gray-800 text-white flex justify-around">
      <Link  href="/">🏠 Inicio</Link>
      <Link href="/products" className="hover:bg-gray-800 p-2 rounder ">🛍 Tienda</Link>
      <Link href="/contact">📞 Contacto</Link>
    </nav>
  );
}
