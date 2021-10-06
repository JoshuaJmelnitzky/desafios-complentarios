/*Este archivo contiene las variables generales para el desarrollo de tienda de hardware "HardBuy"*/

console.dir(document);

/*  Tipos de productos*/
let productTypes = [
    {id: 1, name: "Microprocesadores"},
    {id: 2, name: "Memoria RAM"},
    {id: 3, name: "Motherboards"},
    {id: 4, name: "Placa de video"},
]


/* Listado de productos */
let products = [
    /* Microprocesadores */
    {id: 1, itemCategory: 1, item: 1, name: "Ryzen 5600X", price: 39000, stock: 5},
    {id: 2, itemCategory: 1, item: 1, name: "Ryzen 5800X", price: 53000, stock: 2},
    {id: 3, itemCategory: 1, item: 1, name: "Intel i9-9900K", price: 60000, stock: 2},
    /* Memorias RAM */
    {id: 4, itemCategory: 2, item: 1, name: "HyperX 3200mhz 16gb", price: 11500, stock: 6},
    {id: 5, itemCategory: 2, item: 1, name: "Patriot Viper 3200mhz 16gb", price: 10000, stock: 5},
    {id: 6, itemCategory: 2, item: 1, name: "Adata 3600mhz 8gb", price: 7500, stock: 3},
    /* Motherboards */
    {id: 7, itemCategory: 3, item: 1, name: "Gigabyte B450 aorus elite", price: 14000, stock: 4},
    {id: 8, itemCategory: 3, item: 1, name: "Asus TUF B560b-plus", price: 15500, stock: 5},
    {id: 9, itemCategory: 3, item: 1, name: "MSI Z490", price: 17500, stock: 3},
    /* Placas de video */
    {id: 10, itemCategory: 4, item: 1, name: "Palit GTX 1660", price: 120000, stock: 20},
    {id: 11, itemCategory: 4, item: 1, name: "MSI RTX 3060 ti ventus", price: 200000, stock: 16},
    {id: 12, itemCategory: 4, item: 1, name: "MSI Radeon RX 6700", price: 180000, stock: 12},
];


/* Formas de pago  */
let paymentMethods = [
    {id: 1, methodName: "Efectivo"},
    {id: 2, methodName: "Transferencia bancaria"},
    {id: 3, methodName: "Tarjeta de débito"},
    {id: 4, methodName: "Tarjeta de crédito"},
]


let cart = 0;  //Declaración de variable para sumar los precios de los productos al carrito de compras

let resp = 'SI'; //Declaración de variable para controlar el ciclo de cuantos productos quiere añadir el cliente al carrito

const SelectedQty = 'Ingrese la cantidad a adquirir: '; // Texto para indicar al cliente que debe ingresar la cantidad que desea comprar de un producto determinado