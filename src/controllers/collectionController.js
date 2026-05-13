import Collection from '../models/Collection.js';

// @desc    Get all collections
// @route   GET /api/collections
// @access  Public
export const getCollections = async (req, res) => {
  try {
    const collections = await Collection.find({}).populate('products');
    res.json(collections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a collection
// @route   POST /api/collections
// @access  Private/Admin
export const createCollection = async (req, res) => {
  try {
    const { name, products, season } = req.body;
    const collection = new Collection({
      name,
      products,
      season,
    });

    const createdCollection = await collection.save();
    res.status(201).json(createdCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
