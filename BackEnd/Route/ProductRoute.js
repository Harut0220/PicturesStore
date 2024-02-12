import express, { Router } from "express";
import productController from "../Controller/ProductController.js";
import ProductModel from "../Model/ProductModel.js";
import products from "../Data/Data.js";

const productRouter = Router();

productRouter.get("/", productController.getAll);
productRouter.get("/pageone",productController.pageOne)

productRouter.get("/seed", async (req, res) => {
    try {
      
        await ProductModel.deleteMany({})

    
        const seededProduct = await ProductModel.insertMany(products)

        res.status(200).send(seededProduct)
    } catch (error) {
        console.error(error);
    }
})

productRouter.get("/:id", productController.getProductById);


productRouter.post("/create",productController.createProduct)


export default productRouter;
