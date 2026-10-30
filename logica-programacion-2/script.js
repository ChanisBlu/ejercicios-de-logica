// Ejercicio de lógica 2: conversión de temperaturas
let celsius = Number (prompt("Dame la temperatura en celcius: "));

while (isNaN(celsius)){

    console.log("Error: Pon un numero!!!!");
    celsius = Number (prompt("Dame la temperatura en celcius: "));
}

    const fahrenheit = celsius * 9/5 + 32;
    const kelvin = celsius + 273.15;

console.log(`Grados Fahrenheit: ${fahrenheit}`);
console.log(`Grados Kelvin: ${kelvin}`);
