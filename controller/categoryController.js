const Category = require('../model/Category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: 'succsess',
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});

    res.send(categories);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
