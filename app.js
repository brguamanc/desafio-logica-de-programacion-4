// Crear una lista vacía llamada "listaGenerica"
let listaGenerica = [];

// Crear una lista de lenguajes de programación
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin'];

// Agregar elementos a la lista "lenguajesDeProgramacion"
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Función para mostrar todos los elementos de la lista
function mostrarElementos(lista) {
    console.log(lista.join(', '));
}

// Función para mostrar todos los elementos en orden inverso
function mostrarEnOrdenInverso(lista) {
    console.log(lista.reverse().join(', '));
}

// Función para calcular el promedio de una lista de números
function calcularPromedio(lista) {
    const suma = lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
    return suma / lista.length;
}

// Función para mostrar el número más grande y el más pequeño en una lista
function mostrarMinMax(lista) {
    const maximo = Math.max(...lista);
    const minimo = Math.min(...lista);
    console.log("Número más grande:", maximo);
    console.log("Número más pequeño:", minimo);
}

// Función para devolver la suma de todos los elementos en una lista
function sumaElementos(lista) {
    return lista.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

// Función para devolver la posición de un elemento en la lista
// Devuelve -1 si el elemento no existe en la lista
function encontrarPosicion(lista, elemento) {
    const posicion = lista.indexOf(elemento);
    return posicion;
}

// Función para sumar elementos uno a uno de dos listas del mismo tamaño
function sumarListas(lista1, lista2) {
    return lista1.map((elemento, index) => elemento + lista2[index]);
}

// Función para obtener una nueva lista con el cuadrado de cada número
function cuadradoDeCadaNumero(lista) {
    return lista.map(elemento => elemento ** 2);
}

// Ejemplos de uso
console.log("Lista de lenguajes de programación:");
mostrarElementos(lenguajesDeProgramacion);

console.log("\nLista de lenguajes de programación en orden inverso:");
mostrarEnOrdenInverso(lenguajesDeProgramacion);

const numeros = [4, 7, 1, 9, 2, 5];
console.log("\nPromedio de la lista de números:", calcularPromedio(numeros));

console.log("\nNúmero más grande y más pequeño en la lista de números:");
mostrarMinMax(numeros);

console.log("\nSuma de la lista de números:", sumaElementos(numeros));

const elementoBuscar = 'Ruby';
const posicion = encontrarPosicion(lenguajesDeProgramacion, elementoBuscar);
console.log(`\nLa posición de "${elementoBuscar}" en la lista es: ${posicion}`);

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const sumaListas = sumarListas(lista1, lista2);
console.log("\nLista resultante de sumar elementos uno a uno de dos listas:");
mostrarElementos(sumaListas);

const listaCuadrados = cuadradoDeCadaNumero(numeros);
console.log("\nLista con el cuadrado de cada número:");
mostrarElementos(listaCuadrados);
