// Ejercicio de lógica 1: comparación de números

const num1 = Number(prompt("Dame un numero"));
const num2 = Number(prompt("Dame un segundo numero"));
const num3 = Number(prompt("Dame un tercer numero"));

console.log(num1, num2, num3);


if (isNaN(num1)||isNaN(num2)||isNaN(num3)){
    console.log("Solo se permiten numeros!!!")
}
else{
    if (num1===num2&&num2===num3){
        console.log("Los numeros son iguales")
    }
    else{
        let mayor = num1
        if (num2 > mayor){
            mayor=num2
        }
        if (num3 > mayor){
            mayor=num3
        }
        console.log("Mayor:",mayor);

        let menor = num1
        if (num2 < menor){
            menor=num2
        }
        if (num3 < menor){
            menor=num3
        }
        console.log("Menor:",menor);

        const centro = num1+num2+num3-mayor-menor
        console.log("Centro:", centro);

        console.log(`De mayor a menor: ${mayor}, ${centro}, ${menor}`);
        console.log(`De menor a mayor: ${menor}, ${centro}, ${mayor}`);
    }
}