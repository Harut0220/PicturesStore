import { Schema, model } from "mongoose";

const productSchema = new Schema({
    title: { type: String },
    image: { type: String },
    show: { type: String },
    price: { type: Number, required: true, default: 0 }
},
    {
        timestamps: true,
    })

 const ProductModel = model("ProductModel", productSchema)

export default ProductModel