import products from "@/public/products.json";

export default function ProductDetails({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1 className="text-center mt-10 text-red-600">Product Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <p className="text-2xl font-semibold mt-6">${product.price}</p>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg hover:text-orange-400">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
