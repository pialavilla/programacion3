//ejercicio2 
//Declaración de variables
var a = 5;
var b = 10;

// Suma de a y b
var c = a + b;

// Imprimir el resultado en la consola
console.log("El valor de a es: " + a);
console.log("El valor de b es: " + b);
console.log("El valor de c (a + b) es: " + c);

//ejercicio3

var nombre = prompt("Por favor, ingresa tu nombre:");

console.log("hola "+ nombre + " bienvenido/a!.");

//ejercicio 2(1)

let a = 5; 
let b = 10; 

// Determinar cuál es el mayor
let mayor;

if (a > b) {
    mayor = a;
} else if (b > a) {
    mayor = b;
} else {
    mayor = 'Ambos valores son iguales';
}

// Imprimir el resultado en la consola
console.log('El mayor valor entre a y b es:', mayor);

//ejercicio 2(2)
let numeroIngresado = prompt("Por favor, ingresa un número:");

// Convertir el valor ingresado a un número
numeroIngresado = Number(numeroIngresado);

// Determinar si el número es par o impar
if (numeroIngresado % 2 === 0) {
    console.log(`El número ${numeroIngresado} es par.`);
} else {
    console.log(`El número ${numeroIngresado} es impar.`);
}

//ejercicio 3(1)

let num = 10;

// Usar un bucle while para restar 1 en cada iteración
while (num > 0) {
    console.log(num); // Imprimir el valor actual de la variable
    num--; // Restar 1 a la variable
}

// Imprimir el último valor, que será 0
console.log(num);

//ejercicio 3(2)

let numero;

do {
    numero = prompt("Por favor, ingresa un número mayor a 100:");
    numero = Number(numero); // Convertir el valor ingresado a un número
} while (numero <= 100);

// Mostrar el número ingresado en la consola
console.log(`El número ingresado es: ${numero}`);

//ejercicio 4(1)

function esPar(numero) {
    return numero % 2 === 0;
}

// Probar la función con diferentes números
console.log(esPar(4));   // Debería imprimir: true
console.log(esPar(7));   // Debería imprimir: false
console.log(esPar(0));   // Debería imprimir: true
console.log(esPar(-2));  // Debería imprimir: true
console.log(esPar(23));  // Debería imprimir: false

//ejercicio 4(2)

function convertirCelsiusAFahrenheit(celsius) {
    // Convertir de Celsius a Fahrenheit
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

// Ejemplo de uso
let temperaturaCelsius = 25; 
let temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
console.log(`La temperatura en Fahrenheit es: ${temperaturaFahrenheit}`);

//ejercicio 5(1)

// Definir el objeto persona
let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    
    // Método para cambiar la ciudad
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

// Mostrar las propiedades iniciales
console.log('Propiedades iniciales:');
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);

// Cambiar la ciudad
persona.cambiarCiudad('Barcelona');

// Mostrar las propiedades actualizadas
console.log('\nPropiedades actualizadas:');
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);


//ejercicio 5(2)

// Definir el objeto libro
let libro = {
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    año: 1967,

    // Método para determinar si el libro tiene más de 10 años
    esAntiguo: function() {
        const añoActual = new Date().getFullYear(); // Obtener el año actual
        const edadLibro = añoActual - this.año; // Calcular la edad del libro
        if (edadLibro > 10) {
            console.log(`El libro "${this.titulo}" es antiguo.`);
        } else {
            console.log(`El libro "${this.titulo}" es reciente.`);
        }
    }
};

// Llamar al método para determinar si el libro es antiguo o reciente
libro.esAntiguo();

//ejercicio 6(1)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Crear un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle para multiplicar cada número por 2 y almacenar en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2;
    numerosMultiplicados.push(resultado);
}

// Mostrar el array original y el nuevo array en la consola
console.log('Array original:', numeros);
console.log('Array con los números multiplicados por 2:', numerosMultiplicados);

//ejercicio 6(2)

// Crear un array vacío para almacenar los números pares
let pares = [];

// Usar un bucle for para encontrar los primeros 10 números pares
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}
// Imprimir el array pares en la consola
console.log('Primeros 10 números pares:', pares);

//ejercicio 7(1) (2)
//(html)


