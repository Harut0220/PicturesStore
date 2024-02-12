import products from "../Data/Data.js";
import productService from "../Service/ProductService.js";

const productController = {
    getAll: async (req, res) => {
        try {
            const products = await productService.getAll()

            res.status(200).send(products)
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal Server Error" })
        }
    },
    getProductById: async(req, res) => {
        try {
            const { id } = req.params;
            // console.log("params",id);
            const product =await productService.getById(id)
            // console.log(product);
            res.send(product);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal Server Error" })
        }

    },
    pageOne:async (req,res)=>{
        try {
            // const {sort, type} = req.query
      
            const page = req.query.page
            const size = req.query.size 
            // console.log(page,sort,size,type);
            const products = await productService.pageOne(page, size);
      
            res.status(200).send(products);
          } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal Server Error" });
          }


    },

    createProduct: async(req, res) => {
        try {
            const { price,image, title, show } = req.body
            const newProduct = await productService.createProduct(price, image,title, show)
            // console.log("bbb");
            res.status(201).send(newProduct)
        } catch (error) {

        }
    },
    updateProduct: (req, res) => {
        try {
            const {price, image, show, title} = req.body
            const { id } = req.params
            const newProduct = productService.updateProduct(id, price, image, show, title)
            res.send(newProduct)
        } catch (error) {

        }

    },
    deleteProduct:(req ,res)=>{
        try {
             const {id}=req.params
             const delproduct=productService.deleteproduct(id)
             res.send()
        } catch (error) {
            
        }
    },
};

export default productController;
