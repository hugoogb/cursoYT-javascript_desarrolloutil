// const TASA_IVA = 1.21;

// let precioProducto1 = 25;
// precioProducto1 = precioProducto1 * TASA_IVA;
// let precio2 = 15;
// precio2 = precio2 * TASA_IVA;

// const cantidad1 = 2;
// const cantidad2 = 3;

// const total = precioProducto1 * cantidad1 + precio2 * cantidad2;

// console.log(total);

// const edad = 19;

// if (true) {
// 	console.log("True: Mi nombre es 'Hugo' y tengo " + edad + " años");
// } else {
// 	console.log(`False: Mi nombre es "Hugo" y tengo ${edad} años`);
// }

// const nulo = null;
// const indefinido = undefined;

// console.log(typeof []);

// let resultado = "2" + 2;

// console.log(resultado);

// resultado *= 2;

// console.log(resultado);

// const cadena = "5.5";
// const numero = 5.25;
// const condicion = true;
// const condicion = false;
// const nulo = null;
// let indefinido;

// console.log(numero + condicion);
// console.log(numero + nulo);
// console.log(numero + indefinido);

// String();
// Number();
// Boolean();

// console.log(Boolean(""));

// parseInt();
// parseFloat();

// console.log(parseInt(cadena));

// const obtenerSaludo = function (nombre) {
// 	return `Hola Mundo de parte de ${nombre}`;
// };

// const imprimirSaludo = function (mensaje) {
// 	console.log(mensaje);
// };

// const alertSaludo = function (mensaje) {
// 	alert(mensaje);
// };

// const saludar = function (obtener, imprimir) {
// 	const saludo = obtener("Hugo");
// 	imprimir(saludo);
// };

// saludar(obtenerSaludo, imprimirSaludo);
// saludar(obtenerSaludo, alertSaludo);

// const sumar = (a, b) => a + b;

// const multiplicarPorDos = (numero) => numero * 2;

// const suma = sumar(2, 3);
// const multiplicado = multiplicarPorDos(suma);

// console.log(multiplicado);

// const persona = {
// 	nombre: "Hugo",
// 	apellido: "García",
// 	telefono: "123456789",
// 	edad: 19,
// };

// console.log(persona.nombre);

// persona.nombre = "hugogaben";

// console.log(persona.nombre);

// const IVA_GENERAL = 1.21;
// const IVA_REDUCIDO = 1.1;

// const item1 = {
// 	precio: 15,
// 	cantidad: 2,
// 	impuestos: IVA_GENERAL,
// 	calcularTotal: function () {
// 		return this.precio * this.cantidad * this.impuestos;
// 	},
// };

// const item2 = {
// 	precio: 25,
// 	cantidad: 3,
// 	impuestos: IVA_REDUCIDO,
// 	calcularTotal: function () {
// 		return this.precio * this.cantidad * this.impuestos;
// 	},
// };

// const item3 = item2;
// item3.precio = 23;

// console.log(item2);
// console.log(item3);

// const factura = {
// 	item1,
// 	item2,
// 	calcularTotal: function (descuento) {
// 		return (
// 			(this.item1.calcularTotal() + this.item2.calcularTotal()) *
// 			descuento
// 		);
// 	},
// };

// console.log(factura);

// console.log(factura.calcularTotal(0.8));

// const miArray = [
// 	"Hola",
// 	5,
// 	true,
// 	null,
// 	undefined,
// 	{ a: 2, b: 3 },
// 	() => "Hola Mundo",
// 	[1, 2, 3],
// ];

// console.log(miArray);
// console.log(miArray.length);
// console.log(typeof miArray);

// const numbers = ["1", "2", "3", "4"];

// const lastElement = numbers.pop();

// console.log(numbers);
// console.log(lastElement);

// const firstElement = numbers.shift();

// console.log(numbers);
// console.log(firstElement);

// numbers.unshift(0);

// console.log(numbers);

// numbers.splice(3, 0, "Hola", "Mundo");

// console.log(numbers);

// numbers.forEach((elem, index) => {
// 	console.log(elem * index);
// });

// let numbers = ["1", "2", "3", "4"];

// numbers = numbers.map((i) => Number(i) + 3);

// console.log(numbers);

// const facturas = [
// 	{
// 		precio: 23,
// 		cantidad: 1,
// 	},
// 	{
// 		precio: 19,
// 		cantidad: 2,
// 	},
// 	{
// 		precio: 14,
// 		cantidad: 4,
// 	},
// 	{
// 		precio: 22,
// 		cantidad: 1,
// 	},
// ];

// const IVA = 1.21;

// const totalFactura = facturas.map((i) => i.precio * i.cantidad * IVA);

// totalFactura.forEach((e, index) => console.log("Factura " + index + ": " + e));

// const total = facturas
// 	.map((i) => i.precio * i.cantidad * IVA)
// 	.filter((i) => i > 22);
//  .reduce((a, b) => a + b);

// console.log("Total:", total);

// const a = 1;
// const b = 2;
// const c = 3;

// Loose == !=
// Strict === !==
// console.log(a === b);

// console.log(!(a < b) || b < c);
