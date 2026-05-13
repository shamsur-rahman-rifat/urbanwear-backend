import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    season: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Collection = mongoose.model('Collection', collectionSchema);
export default Collection;
