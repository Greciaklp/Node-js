import express from 'express';
const router = express.Router();
import Producto from '../models/Producto.js';
import {
  agregarProducto,
  buscarProductos,
  encontrarProducto,
  borrarProducto,
  modificarProducto,
} from "../controllers/productos.controller.js";

router.post("/", agregarProducto);
router.get("/", buscarProductos);
router.get("/:id", encontrarProducto);
router.delete("/:id", borrarProducto);
router.put("/:id", modificarProducto);


export default router
