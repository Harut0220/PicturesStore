import CartModel from "../Model/CartModel.js";
import ProductModel from "../Model/ProductModel.js";

const cartService = {
  getAll: async () => {
    try {
      const CartProducts = await CartModel.find().populate("productId")
      // console.log("cartall",CartProducts);
      return CartProducts
    } catch (error) {
      console.error("errr");
    }

  },
  addToCart: async (id) => {
    try {
      console.log(("paramic vekalec", id));
      // const ProductModelbyid=await ProductModel.findById(id)

      const cartExist = await CartModel.findOne({ productId: id }).populate("productId")
      console.log(cartExist);
      // console.log(ProductModelbyid);

      if (cartExist) {
        cartExist.count = cartExist.count + 1

        await cartExist.save()
        return cartExist
      } else {

        const newCart = new CartModel({
          productId: id,
        });
        await newCart.save()
        return newCart;
      }
    } catch (error) {
      console.log("err");
    }
  },
  subToCart: async (id) => {
    try {
      // console.log(("paramic vekalec",id));
      const ProductModelbyid = await ProductModel.findOne({ _id: id })

      const cartExist = await CartModel.findOne({ productId: id })
      // console.log(cartExist);

      if (cartExist) {
        cartExist.count = cartExist.count - 1

        await cartExist.save()
        return cartExist
      } else {

        const newCart = new CartModel({
          productId: id,
          price: ProductModelbyid.price,
          title: ProductModelbyid.title,
          show: ProductModelbyid.show,
          image: ProductModelbyid.image
        });
        await newCart.save()
        return newCart;
      }
    } catch (error) {
      console.log("error123");
    }
  },
  addToCartPage: async (id) => {
    // console.log(id);
    const CartProduct = await CartModel.findOne({ productId: id }).populate("productId")
    // console.log(CartProduct);
    return CartProduct
  }
};

export default cartService;
