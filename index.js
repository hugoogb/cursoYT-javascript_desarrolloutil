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

const sumar = (a, b) => a + b;

const multiplicarPorDos = (numero) => numero * 2;

const suma = sumar(2, 3);
const multiplicado = multiplicarPorDos(suma);

console.log(multiplicado);
