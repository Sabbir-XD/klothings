import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb"; // make sure you used `export async function connectDB() {}`
import Product from "@/models/Product";

// 📌 GET all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({});
    console.log({ products });
    return NextResponse.json({ success: true, products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// 📌 POST new product
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    // validation (optional)
    if (!body.name || !body.price) {
      return NextResponse.json(
        { success: false, error: "Name and price are required" },
        { status: 400 }
      );
    }

    const newProduct = await Product.create(body);

    return NextResponse.json(
      { success: true, product: newProduct },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to add product" },
      { status: 500 }
    );
  }
}
