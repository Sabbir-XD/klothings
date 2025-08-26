import Product from "@/models/Product";
import { connectDB } from "@/lib/mongodb";

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const { id } = params; // server component: direct access is fine
  await connectDB();

  const product = await Product.findById(id).lean();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-base-200 rounded-lg shadow-lg md:h-screen">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2"><strong>Description:</strong> {product.description}</p>
      <p className="text-gray-700 mb-2"><strong>Price:</strong> ${product.price}</p>
      <p className="text-gray-500 mb-1"><strong>Created At:</strong> {new Date(product.createdAt).toLocaleString()}</p>
      <p className="text-gray-500"><strong>Updated At:</strong> {new Date(product.updatedAt).toLocaleString()}</p>
    </div>
  );
}
