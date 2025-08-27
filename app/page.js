import Navbar from "@/components/Navbar";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-5xl font-bold text-orange-400 mb-6">
          Welcome to MyShop
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          The best place to find your favorite products.
        </p>
        <a 
          href="/products" 
          className="px-6 py-3 bg-black text-white rounded-lg shadow hover:text-orange-400 transition"
        >
          Explore Products
        </a>
      </section>
      <ProductsPage></ProductsPage>
    </div>
  );
}

