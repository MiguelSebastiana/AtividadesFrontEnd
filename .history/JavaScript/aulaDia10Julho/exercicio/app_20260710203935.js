let num1 = 1;
let num2 = 5;
let texto = "Vasco Da Gama";
let numeros = [1,2,3,4,5,6,7,8,9];
let numeros2 = [1,2,2,2,3,3,8,8,8];
let data1 = '2026-07-10';
let data2 = '2026-10-20';

//-------- Exercicio 1 --------

function adicionar(num1, num2){
    return num1 + num2;
} 

console.log("O resultado da conta é: " + adicionar(num1, num2));

//-------- Exercicio 2 --------
function subtrair(num1, num2){
    return num2 - num1;
}

console.log("O resultado da conta é: " + subtrair(num1, num2));

//-------- Exercicio 3 --------
const produto = (num1, num2) => num1 * num2;

console.log("Produto: " + produto(num1, num2));


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
        }
    }

    return(numerosMaiores);
}

console.log("Numeros maiores que: " + num1 + " são " + filtrarNums(numeros, num1));


//-------- Exercicio 8 --------
function quantVezesArray(numeros2, num1){

    let contador = 0;

    for(let i = 0; i < numeros2.length; i++){
        if(numeros2[i] === num1){
            contador ++
        }
    }
    return contador;
}   

console.log("Contar ocorrencias: " + quantVezesArray(numeros2, num1));

//-------- Exercicio 9 --------

function quantLetras(texto){
    let contador = 0;
    let textoMaiusculo = texto.toUpperCase();

    for(let i = 0; i < textoMaiusculo.length; i++){
        let letra = textoMaiusculo[i]
        if(letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === "U"){
            contador++;
        }
    }
    return resultado;
}

console.log("Quantidade vogais: " + quantVezesArray(texto));


//-------- Exercicio 10 --------

function criarArray(num2){
    let resultado = [];
    for(let i = 1; i <= num2; i++){
        resultado.push(i);
    }
    return resultado;
}

console.log("Criar array até: " + num2 + " ", criarArray(num2));

//-------- Exercicio 11 --------

function randomNumbers(){

    let decimal = Math.random() * 100;
    
    return console.log("O numero aleatorio escolhido foi: " + decimal)
}

randomNumbers();


//-------- Exercicio 12 --------

function diferencaEmDias(data1)