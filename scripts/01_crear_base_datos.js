/*
 * Proyecto: Tienda Virtual - MongoDB
 * UNAD - Big Data - Tarea 4
 * Base de datos: tienda_bigdata
 */

// Seleccionar la base de datos
use("tienda_bigdata");

// Crear las colecciones si no existen
["clientes", "productos", "ventas"].forEach(nombre => {
  if (!db.getCollectionNames().includes(nombre)) {
    db.createCollection(nombre);
  }
});

// Verificar las colecciones
show collections;
