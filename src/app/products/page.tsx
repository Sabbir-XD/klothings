import products from "@/data/products.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <p>${p.price}</p>
          <Link href={`/products/${p.id}`}>Details</Link>
        </div>
      ))}
    </div>
  );
}
