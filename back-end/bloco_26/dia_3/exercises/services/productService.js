const ProductModel = require("../models/productModel");

const getAll = async () => {
  const products = await ProductModel.getAll();

  if (!products)
    return {
      error: {
        code: "404",
        message: "Sem produtos",
      },
    };

  return products;
};

const getById = async (id) => {
  const product = await ProductModel.getById(id);

  if (!product)
  return {
    error: {
      code: "404",
      message: "Produto não encontrado",
    },
  };

  return product;
}

const addUser = async (name, brand) => {
  if (!name || name.length < 3)
  return {
    error: {
      code: "402",
      message: "Sem name",
    },
  };

  if (!brand || brand.length < 3)
  return {
    error: {
      code: "402",
      message: "Sem brand",
    },
  };

  const newProduct = await ProductModel.add(name, brand);

  return newProduct;
}

const exclude = async (id) => {
  const product = await ProductModel.exclude(id);

  if (!product || product === {})
  return {
    error: {
      code: "404",
      message: "Produto não encontrado",
    },
  };

  return product;
}

const update = async(id, name, brand) => {
  if (!id)
  return {
    error: {
      code: "402",
      message: "Sem id",
    },
  };

  if (!name || name.length < 3)
  return {
    error: {
      code: "402",
      message: "Sem name",
    },
  };

  if (!brand || brand.length < 3)
  return {
    error: {
      code: "402",
      message: "Sem brand",
    },
  };

  const product = await ProductModel.update(id, name, brand);

  return product;
}

module.exports = {
  getAll,
  getById,
  addUser,
  exclude,
  update,
}
