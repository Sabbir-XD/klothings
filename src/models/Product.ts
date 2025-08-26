import mongoose, { Schema, Model, Document } from "mongoose";

// Define TypeScript interface for Product
export interface IProduct extends Document {
  name: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Create Schema
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

// Reuse existing model if already compiled (for Next.js hot reload)
const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
