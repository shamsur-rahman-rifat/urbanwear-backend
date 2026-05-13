import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  size: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    variants: [variantSchema],
    images: [{ type: String }],
    description: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model('Product', productSchema);
export default Product;