import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/products.json");

export async function GET() {
  const products = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  const products = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  products.push({ id: Date.now().toString(), ...newProduct });
  fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
  return NextResponse.json({ success: true });
}
