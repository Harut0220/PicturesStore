import products from "../Data/Data.js";
import ProductModel from "../Model/ProductModel.js";

const productService = {
  getAll: async () => {
    const products=await ProductModel.find()
    
    if (!products) {
      return { message: "Products not found" };
    }
    // console.log(products);
    return products;
  },

  getById:async (id) => {
    const product = await ProductModel.findById({_id:id});
// console.log("new",id);
    if (!product) {
      return { message: "Product not found" };
    }
    return product;
  },
  createProduct: async(price, image,title, show) => {
    // console.log("ggg");
    const newProduct = new ProductModel({
      price,
      image,
      title,
      show,
    });
      await newProduct.save()
      return newProduct;
    

    console.log("ppp");

    return newProduct;
  },
  pageOne:async ( page, size)=>{
    const skip = (page - 1) * size
    // console.log(sort, type, page, size);
    const users = await ProductModel.find()
    
    // if (sort) {
    //   if (sort === "asc") {
    //     users.sort((a, b) => a.size - b.size)
    //   } else {
    //     users.sort((a, b) => b.size - a.size)
    //   }
    // }

    // if (type) {
    //   paginatedUsers.filter((user) => user.type === type)
    // }

    const paginatedUsers = users.slice(skip, skip + size)
    // console.log(paginatedUsers);
    return paginatedUsers;
  },
  updateProduct: (newid, price, image, show, title) => {
    const newProduct = products.find(
      (product) => product.id === parseInt(newid)
    );

    const updateData = {
      price,
      image,
      show,
      title,
    };
    // console.log("UPD", updateData);

    newProduct.price = price;
    newProduct.image = image;
    newProduct.show = show;
    newProduct.title = title;

    // console.log("new", newProduct);
    if (!newProduct) {
      // console.log("fff");
      return { message: "Not found" };
    }

    return newProduct;
  },
  deleteproduct: (id) => {
    const newObjProducts = products.splice(parseInt(id - 1), 1);
    // console.log(products);
    return newObjProducts;
  },
  addToCart: (id) => {
    const product = products.find((product) => product.id === parseInt(id));
    if (!product) {
      return { message: "Product not found" };
    }
    return product;
  },
};

export default productService;
