import Navbar from "@/components/Navbar";
import ProductsPage from "./products/page";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
      <ProductsPage></ProductsPage>
      <Footer></Footer>
      
    </div>
  );
}

