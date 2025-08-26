"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]); // array default

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      console.log("API response:", data); // debug
      if (data.success) {
        setProducts(data.products); // শুধু products array set করতে হবে
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="card bg-base-100 shadow-md border p-4"
          >
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.description}</p>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>

            <Link
              href={`/products/${product._id}`}
              className="btn btn-sm btn-primary mt-3"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
