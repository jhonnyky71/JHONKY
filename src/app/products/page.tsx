
'use client'; // Si usas App Router

import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { ShoppingCart, X } from "lucide-react"; // Iconos
import { TiDelete } from "react-icons/ti";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para abrir/cerrar el carrito

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // 🛒 Agregar producto al carrito
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  // ❌ Eliminar producto del carrito
  const removeFromCart = (productId: number) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  // 🔢 Calcular total de productos y total a pagar
  const totalProductos = cart.length;
  const totalPagar = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="flex">
      {/* 🔘 Botón flotante para abrir/cerrar el carrito */}
      <button
        className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setIsCartOpen(!isCartOpen)}
      > 
        {isCartOpen ? <X size={24} /> :  <ShoppingCart size={24} />}
      </button>

      {/* 🛒 Sidebar del Carrito */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 shadow-lg`}
      >

        {/* ❌ Botón para cerrar el carrito */}
        <button
          className="absolute top-2 right-2 p-2 bg-red-500 rounded-full hover:bg-red-600 transition"
          onClick={() => setIsCartOpen(false)}
        >
          <X size={24} />
        </button>

      
        <h2 className="text-xl font-bold mb-4">🛒 Carrito</h2>

      
        {cart.length === 0 ? (
          <p className="text-gray-400">Carrito vacío</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b py-2">
                  <span>{item.title}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="  rounded"
                  >
                    <MdDeleteForever/>
                  </button>
                </li>
              ))}
            </ul>

            {/* 🔢 Mostrar Total de Productos y Total a Pagar */}
            <div className="mt-4 border-t pt-4">
              <p>Total de productos: <span className="font-bold">{totalProductos}</span></p>
              <p>Total a pagar: <span className="font-bold">${totalPagar.toFixed(2)}</span></p>

              {/* 🏁 Botón Finalizar Compra */}
              <button
                className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
                onClick={() => alert("Compra finalizada")}
              >
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </aside>

      {/* 🛍 Lista de Productos */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">🛍 Tienda</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img src={product.image} alt={product.title} className="h-40 mx-auto" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
