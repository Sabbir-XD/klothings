import products from "@/data/products.json";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}
