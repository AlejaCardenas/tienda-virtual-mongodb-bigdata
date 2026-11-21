/*
 * UNAD - Big Data - Tarea 4
 * Proyecto: Tienda Virtual
 * Consultas de agregacion en MongoDB
 *
 * Estas consultas son de solo lectura.
 */

use("tienda_bigdata");

// 1. Cantidad de ventas e ingresos por estado
db.ventas.aggregate([
  {
    $group: {
      _id: "$estado",
      cantidadVentas: { $sum: 1 },
      totalIngresos: { $sum: "$total" }
    }
  },
  { $sort: { _id: 1 } }
]);

// 2. Indicadores de ventas completadas
db.ventas.aggregate([
  { $match: { estado: "Completada" } },
  {
    $group: {
      _id: null,
      cantidadVentas: { $sum: 1 },
      ingresosTotales: { $sum: "$total" },
      promedioVenta: { $avg: "$total" },
      ventaMayor: { $max: "$total" },
      ventaMenor: { $min: "$total" }
    }
  },
  { $project: { _id: 0 } }
]);

// 3. Productos mas vendidos en ventas completadas
db.ventas.aggregate([
  { $match: { estado: "Completada" } },
  { $unwind: "$productos" },
  {
    $group: {
      _id: "$productos.productoId",
      unidadesVendidas: {
        $sum: "$productos.cantidad"
      },
      ingresosGenerados: {
        $sum: {
          $multiply: [
            "$productos.cantidad",
            "$productos.precioUnitario"
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "productos",
      localField: "_id",
      foreignField: "_id",
      as: "detalleProducto"
    }
  },
  { $unwind: "$detalleProducto" },
  {
    $project: {
      _id: 0,
      codigo: "$detalleProducto.codigo",
      producto: "$detalleProducto.nombre",
      categoria: "$detalleProducto.categoria",
      unidadesVendidas: 1,
      ingresosGenerados: 1
    }
  },
  {
    $sort: {
      unidadesVendidas: -1,
      ingresosGenerados: -1
    }
  },
  { $limit: 10 }
]);

// 4. Ventas por categoria de producto
db.ventas.aggregate([
  { $match: { estado: "Completada" } },
  { $unwind: "$productos" },
  {
    $lookup: {
      from: "productos",
      localField: "productos.productoId",
      foreignField: "_id",
      as: "detalleProducto"
    }
  },
  { $unwind: "$detalleProducto" },
  {
    $group: {
      _id: "$detalleProducto.categoria",
      unidadesVendidas: {
        $sum: "$productos.cantidad"
      },
      ingresosGenerados: {
        $sum: {
          $multiply: [
            "$productos.cantidad",
            "$productos.precioUnitario"
          ]
        }
      }
    }
  },
  { $sort: { ingresosGenerados: -1 } }
]);
