let num1 = 1;
let num2 = 5;
let texto = 'Vasco Da Gama';
let numeros = [1,2,3,4,5,6,7,8,9];
let numeros2 = [1,2,2,2,3,3,8,8,8];

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
        if(numeros[i] > num1){
            numerosMaiores.push(numeros[i]);
        }else{
            
        }
    }

    return console.log(numerosMaiores);
}

filtrarNums(numeros, num1);


//-------- Exercicio 8 --------
function quantVezesArray(numeros2, num1){



    for(let i = 0; i < numeros2.length; i++){
        
    }

}

//-------- Exercicio 9 --------

function quantLetras(texto){

}


//-------- Exercicio 10 --------



//-------- Exercicio 11 --------

function random

let decimal = Mat
