/*
 * UNAD - Big Data - Tarea 4
 * Proyecto: Tienda Virtual
 * Operaciones CRUD en MongoDB
 *
 * Ejecutar las operaciones de escritura
 * individualmente en una base de pruebas.
 */

use("tienda_bigdata");

// CREATE - Insertar producto de prueba
db.productos.insertOne({
  codigo: "TEMP001",
  nombre: "Producto de prueba",
  categoria: "Tecnologia",
  precio: 50000,
  stock: 10,
  disponible: true
});

// READ - Consultar todos los productos
db.productos.find({});

// READ - Consultar productos por categoria
db.productos.find({
  categoria: "Tecnologia"
});

// READ - Buscar producto por codigo
db.productos.findOne({
  codigo: "P009"
});

// UPDATE - Modificar el precio del producto temporal
db.productos.updateOne(
  { codigo: "TEMP001" },
  { $set: { precio: 55000 } }
);

// DELETE - Eliminar el producto temporal
db.productos.deleteOne({
  codigo: "TEMP001"
});

// VALIDACION - Comprobar cantidad de productos
db.productos.countDocuments({});
