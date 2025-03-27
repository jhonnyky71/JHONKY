
'use client'

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, ShoppingCart, User } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-center justify-center  relative">
      {/* Botón para abrir/cerrar el sidebar */}
      <button
        className=" text-white bg-gray-800 rounded-md fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 p-4`}
      >
        <h2 className="text-2xl font-bold mb-10 p-10">Mi Tienda</h2>
        
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <Home size={20} /> Inicio
          </Link>
          <Link href="/products" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <ShoppingCart size={20} /> Tienda
          </Link>
          <Link href="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded">
            <User size={20} /> Perfil
          </Link>
        </nav>
      </aside>
    </div>
  );
}
