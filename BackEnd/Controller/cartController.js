import { cartProduct } from "../Data/cart.js";
import CartModel from "../Model/CartModel.js";
import ProductModel from "../Model/ProductModel.js";
import cartService from "../Service/cartService.js";

const cartController = {
  getAll:async(req,res)=>{
    try {
      const Cart= await cartService.getAll()
      
    res.status(200).send(Cart)
    } catch (error) {
      console.error("hfhkhg");
    }
    
  },
  // cart: async(req, res) => {
  //   try {
  //      const cart_products= await cartService.getAll()
  //     //  console.log("cartic ekox",cart_products);
  //     res.send(cartProduct)
  //   } catch {

  //   }
  // },

  addToCart: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await cartService.addToCart(id);
      res.send(product);
    } catch (error) { }
  },
  subToCart:async(req,res)=>{
    try {
      const { id } = req.params;
      const product = await cartService.subToCart(id);
  // console.log("exav");
      res.send(product);
    } catch (error) { 
      console.error("err")
    }
  },
  addToCartPage:async(req,res)=>{
    const { id } = req.params
    const product=await cartService.addToCartPage(id)
    res.send(product)
  }
};

export default cartController;
