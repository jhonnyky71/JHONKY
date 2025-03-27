

import Sidebar from "@/components/sidebar/page";
import "./globals.css"; // Si usas Tailwind o estilos globales

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex ">
        <Sidebar />
        <main className="flex-1 p-2 m-1.5">{children}</main>
      </body>
    </html>
  );
}

