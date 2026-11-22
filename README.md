# Tienda Virtual – Gestión de Datos con MongoDB

**Universidad Nacional Abierta y a Distancia (UNAD)**  
**Curso:** Big Data  
**Actividad:** Tarea 4  
**Estudiante:** María Alejandra Cárdenas Anaya

## 1. Descripción del proyecto

Este proyecto presenta la implementación de una base de datos NoSQL utilizando MongoDB para gestionar y analizar la información de una tienda virtual.

La solución permite almacenar información de clientes, productos y ventas, realizar operaciones CRUD y utilizar consultas de agregación para obtener indicadores relacionados con el comportamiento comercial.

El desarrollo corresponde a un ejercicio académico con datos de prueba.

## 2. Objetivos

**Objetivo general**

Implementar una base de datos NoSQL en MongoDB que permita gestionar y analizar información comercial de una tienda virtual.

**Objetivos específicos**

- Organizar la información mediante colecciones de documentos.
- Implementar operaciones de creación, consulta, actualización y eliminación de registros.
- Aplicar consultas de agregación para analizar las ventas y los productos comercializados.
- Interpretar los resultados obtenidos mediante indicadores comerciales.

## 3. Tecnologías utilizadas

- **MongoDB:** sistema de gestión de bases de datos NoSQL.
- **MongoDB Compass:** herramienta gráfica para administrar y consultar documentos.
- **MongoDB Shell (mongosh):** ejecución de comandos y consultas.
- **JavaScript:** lenguaje utilizado para los scripts.
- **GitHub:** publicación y documentación del proyecto.

## 4. Estructura de la base de datos

**Nombre:** `tienda_bigdata`

| Colección | Documentos | Información |
|---|---:|---|
| `clientes` | 30 | Información de los clientes |
| `productos` | 40 | Catálogo de productos, categorías, precios y existencias |
| `ventas` | 80 | Ventas, clientes, productos, fechas, valores y estados |
| **Total** | **150** | |

La colección `ventas` relaciona los clientes y productos mediante identificadores de tipo `ObjectId`.

## 5. Categorías de productos

| Categoría | Cantidad |
|---|---:|
| Tecnología | 11 |
| Ropa | 11 |
| Hogar | 9 |
| Deportes | 9 |
| **Total** | **40** |

## 6. Operaciones implementadas

Se desarrollaron operaciones CRUD:

- **Create:** inserción de documentos.
- **Read:** consulta y filtrado de información.
- **Update:** actualización de campos.
- **Delete:** eliminación de documentos de prueba.

También se utilizaron operadores y etapas de agregación como `$match`, `$group`, `$unwind`, `$lookup`, `$project` y `$sort`.

## 7. Resultados del análisis

A partir de las consultas realizadas sobre las ventas se obtuvieron los siguientes indicadores:

| Indicador | Resultado |
|---|---:|
| Total de ventas | 80 |
| Ventas completadas | 64 |
| Ventas pendientes | 16 |
| Valor de ventas completadas | $27.360.000 COP |
| Valor de ventas pendientes | $7.130.000 COP |
| Promedio de venta completada | $427.500 COP |

El 80 % de las ventas se encuentra en estado completada y el 20 % permanece pendiente.

Los resultados permiten identificar el comportamiento general de las ventas y analizar los productos con mayor participación comercial.

## 8. Archivos del proyecto

El repositorio está organizado en dos carpetas principales:

**Carpeta `scripts/`:**
- `01_crear_base_datos.js`: creación de las colecciones.
- `02_operaciones_crud.js`: operaciones de inserción, consulta, actualización y eliminación.
- `03_consultas_agregacion.js`: análisis de ventas e ingresos mediante agregaciones.

**Carpeta `datos/`:**
- `tienda_bigdata.clientes.json`: 30 documentos de clientes.
- `tienda_bigdata.productos.json`: 40 documentos de productos.
- `tienda_bigdata.ventas.json`: 80 documentos de ventas.

## 9. Cómo utilizar el proyecto

1. Instalar MongoDB y abrir MongoDB Compass.
2. Conectarse a una instancia local de MongoDB.
3. Crear o seleccionar la base de datos `tienda_bigdata`.
4. Importar los archivos JSON en las colecciones correspondientes: primero clientes, luego productos y finalmente ventas.
5. Ejecutar las consultas de lectura y agregación desde MongoDB Shell.

**Nota:** Los archivos JSON son exportaciones de MongoDB en formato Extended JSON. Se recomienda importarlos mediante MongoDB Compass para conservar los tipos de datos, como `ObjectId` y fechas.

El script CRUD incluye operaciones de escritura con un producto temporal. Debe utilizarse únicamente en un entorno de pruebas.

## 10. Conclusiones

El desarrollo de este proyecto permitió aplicar los conceptos de bases de datos NoSQL en un caso práctico de tienda virtual.

MongoDB facilitó la organización de la información mediante colecciones y documentos, mientras que las consultas de agregación permitieron obtener resultados útiles para analizar las ventas y los productos comercializados.

La actividad también permitió fortalecer el manejo de MongoDB Compass, la ejecución de consultas y la interpretación de información en un entorno de Big Data.

---

**Proyecto académico desarrollado para la UNAD – Tarea 4 de Big Data, 2026.**
