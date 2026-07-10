let num1 = 1;
let num2 = 5;
let texto = "Vasco Da Gama";
let numeros = [1,2,3,4,5,6,7,8,9];

//-------- Exercicio 1 --------
function adicionar(num1, num2){
    return console.log("O resultado da conta é: " + num1 + num2);
} 

adicionar(num1, num2);

//-------- Exercicio 2 --------
function subtrair(num1, num2){
    return console.log(num2 - num1);
}

subtrair(num1, num2);

//-------- Exercicio 4 --------
function ehPar(numero){
    if(numero % 2 === 0){
        return console.log("É true");
    }else{
        return console.log("É false");
    } 
}

ehPar(num1);

//-------- Exercicio 5 --------
function calcularMedia(numeros){
    if(numeros.length === 0){
        return 0;
    } 

    let soma = 0;

    for(let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    
    return console.log("A média é: " + soma / numeros.length);
}

calcularMedia(numeros);

//-------- Exercicio 6 --------
function letrasMaiusculas(texto){
    
}

letrasMaiusculas(texto);

//-------- Exercicio 7 --------
function filtrarNums(numeros, num1){

    let numerosMaiores = [];

    for(let i = 0; i < numeros.length; i++){
        if()
    }
}

filtrarNums(numeros, num1);
