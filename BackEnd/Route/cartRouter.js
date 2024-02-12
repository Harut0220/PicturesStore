import { Router } from "express";
import cartController from "../Controller/cartController.js";

const cartRouter = Router();

// cartRouter.get("/",cartController.cart)
cartRouter.get("/All",cartController.getAll)
cartRouter.get("/:id",cartController.addToCartPage)
cartRouter.post("/sub/:id",cartController.subToCart)
cartRouter.post("/:id", cartController.addToCart);


export default cartRouter;
