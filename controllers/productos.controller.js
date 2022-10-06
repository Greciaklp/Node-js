import Producto from '../models/Producto.js';

export async function agregarProducto(req, res) {
 try {
   const producto = new Producto(req.body);
   await producto.save();
   res.status(201).json({ message: "Producto creado" });
 } catch (error) {
   console.log(error.message);
   res.status(500).json({ mesaage: error.message });
 }
};

export async function buscarProductos(req, res) {
try {
  const productos = await Producto.find();
  res.status(200).json(productos);
} catch (error) {
  console.log(error.message);
  res.status(500).json({ mesaage: error.message });
}
};

export async function encontrarProducto(req, res) {
try {
  console.log(req.params.id);
  const producto = await Producto.findById(req.params.id);
  res.status(200).json(producto);
} catch (error) {
  console.log(error.message);
  res.status(500).json({ mesaage: "Producto no encontrado" });
}
};

export async function borrarProducto(req, res) {
try {
  console.log(req.params.id);
  const producto = await Producto.findByIdAndDelete(req.params.id);
  res.status(200).json({ mesaage: "producto eliminado" });
} catch (error) {
  console.log(error.message);
  res.status(500).json({ mesaage: "Producto no encontrado" });
}
};

export async function modificarProducto(req, res) {
try {
  console.log(req.params.id);
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ mesaage: "producto actualizado", producto });
} catch (error) {
  console.log(error.message);
  res.status(500).json({ mesaage: "Producto no encontrado" });
}
};