import Image from "next/image";
import Navbar from '../components/navbar/page';


export default function Home() {

  const products = [
  { id: 1, image: "https://hasonss.com/blogs/wp-content/uploads/2023/10/types-of-technology-2.webp" },
  { id: 2, image: "https://cdn.prod.website-files.com/5f2b1efb0f881760ffdc5c96/65293ad388e7f519253c23b6_cuu_mexygabriel_design_banner-scaled.jpg" },
  { id: 3, image: "https://ccitraining.edu/wp-content/uploads/2023/12/Information-Technology.jpg" },
  { id: 4, image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_the_Importance_of_Technology.jpg" },
  ];



  return (

    <>
      
        
      
    
      <div>
        {/* Hero Section */}
        <section className=" bg-blue-900 text-white py-16 px-6 text-center">
          <h1 className="text-6xl font-bold">Bienvenido a Jhonky</h1>
          <p className="mt-2 text-lg">Tu tienda online de confianza</p>
        </section>

        <Navbar/>
          
         

        {/* Sección de Productos Destacados */}
        <section className="py-12  bg-white p-4 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-7">
              {products.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-3xl shadow-lg">
                  <img
                    src={product.image}
                    alt="Producto"
                    className="w-full h-40 object-cover rounded"
                  />

                      
                </div>
              ))}
          </div>
        </section>

        
    



      </div>

    </>
    



  
  );
}
