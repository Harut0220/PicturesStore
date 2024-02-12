import express from "express";
import cors from "cors";
import path from "path";
import productRouter from "./Route/ProductRoute.js";
import { fileURLToPath } from "url";
import cartRouter from "./Route/cartRouter.js";
import { config } from "dotenv";
import connection from "./Utils/Connection.js";


const app = express();
const dotenv = config()
const conn=connection()
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("views", path.join(__dirname, "Views"));
app.use(express.static(path.join(__dirname, "Public")));

app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);


console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`server run in ${process.env.PORT} port`);
});
