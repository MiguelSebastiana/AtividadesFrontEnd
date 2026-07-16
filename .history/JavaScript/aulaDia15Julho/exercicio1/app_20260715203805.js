// ----------------- 1 -----------------

let num1 = prompt("Digite um valor: ");
let num2 = prompt("Digite o segundo valor: ");
let num3 = prompt("Digite o ultimo valor: ");
let num4 = prompt("(Para a segunda Array) Digite um valor: ");
let num5 = prompt("(Para a segunda Array) Digite o segundo valor: ");
let num6 = prompt("(Para a segunda Array) Digite o ultimo valor: ");
let numeros = [num1, num2, num3];
let numeros2 = [num4, num5, num6];
console.log(numeros.reverse());

// ----------------- 2 -----------------

// let ordemCrescente = function (numeros){
//     console.log(numeros)
// }

// ----------------- 3 -----------------

function juntarArrays (numeros, numeros2){
    return numeros.concat(numeros2);
}

let arrayJuntas = juntarArrays(numeros, numeros2);
console.log(`Arrays foram juntadas ${arrayJuntas}`);

// console.log(juntarArrays(numeros, numeros2));

// // ----------------- 4 -----------------

// let contarCaractere() = function (){

// }

// ----------------- 5 e 6 ----------------

let criandoPessoa = function (){
    let pessoa = {
        "nome": "cleiton",
        "idade": 18,
        "profissao": "codador",
        "hobbies": ["jogar bola", "tocar violao", "estudar frontEnd"],
    }

    console.log(`Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | Profissao: ${pessoa.profissao}`);


}

criandoPessoa();

// ------------------- 7 ------------------

let nomes = ["Gian", "Miguel", "Matheus", "Gabriel"];

// ------------------- 8 ------------------

let numeros3 = [1, 2, 3, 4, 5];

let transformNumeroParaString = function (numeros3){

    return numeros3.join(', ');

}

console.log(`Transformado para String: ${transformNumeroParaString(numeros3)}`);

let trasParaFrente = function (numeros3){

    return numeros3.reverse();

}

console.log(`Deixando a array de tras para frente: ${trasParaFrente(numeros3)}`);

// ------------------- 9 ------------------

let idades = [3, 25, 15, 34];

function maiorDe18(idades){

    return idades.every(idade => idade >= 18);
     
}   

let maioresDe18 = maiorDe18(idades);
console.log(`Idades maiores de 18: ${maioresDe18}`);

// ------------------- 10 ------------------

function obterPI() {
    const pi = Math.PI;
    console.log("Valor de pi: ", pi);
    return pi;
}

obterPI();

// ------------------- 11 ------------------
function calcularRaizQuadrada(numero){
    const raiz = Math.sqrt(numero);
    console.log(`Raiz quadrada de ${numero} é: `, raiz);
    return raiz;
}

calcularRaizQuadrada(9);

// ------------------- 12 ------------------

