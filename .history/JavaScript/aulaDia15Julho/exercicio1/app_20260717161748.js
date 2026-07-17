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

let ordemCrescente = function (numeros){
    return [...numeros].sort((a) => a - b);
}
console.log(ordemCrescente(numeros));

// ----------------- 3 -----------------

function juntarArrays (numeros, numeros2){
    return numeros.concat(numeros2);
}

let arrayJuntas = juntarArrays(numeros, numeros2);
console.log(`Arrays foram juntadas ${arrayJuntas}`);

// // ----------------- 4 -----------------

let contarCaractere = function (texto, caractere){

    let contador = 0;
    for(let i = 0; i < texto.length; i++){
        if(texto[i] === caractere){
            contador++;
        }
    }

    return contador;
}

console.log(`Quantidade de letras 'a': ${contarCaractere("javascript", "a")}`);

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
console.log(`Array normal: ${nomes}`);

nomes.push("Adriel");
console.log(`Array com push: ${nomes}`);

nomes.pop();
console.log(`Array com pop: ${nomes}`);

nomes.unshift("Ana");
console.log(`Array com unshift: ${nomes}`);

nomes.shift();
console.log(`Array com shift: ${nomes}`);

// ------------------- 8 ------------------

let numeros3 = [1, 2, 3, 4, 5];

let transformNumeroParaString = function (numeros3){

    return numeros3.join(', ');

}

let numerosReverse = function (numeros3) {
    
    return [...numeros3].reverse();
    
}

let pegarDoisPrimeiros = function (numeros3) {

    return numeros3.slice(0, 2);

}

let ordernarNomesAlfabeticamente = function (nomes) {

    return [...nomes].sort();

}

let filtrarPares = function(numeros3) {

    return numeros3.filter(num => num % 2 === 0);

}

let calcularQuadrados = function(numeros3){

    return numeros3.map(num => num * num);

}

let calcularSomaTotal = function(numeros3){

    return numeros3.reduce((acumulador, atual) => acumulador + atual, 0);

}

let imprimirElementos = function(nomes){

    return nomes.forEach(nome => console.log(`Nome pelo forEach: ${nome}`));

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


// ------------------- 13 ------------------
function gerarSenha(tamanho){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    let senha = ""
    for(let i = 0; i < tamanho; i++){
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    return senha;
}

// ------------------- 14 ------------------

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Numero aleatorio entre 10 e 50: ", gerarNumeroAleatorio(10, 100));

// ------------------- 15 ------------------

function calculadora(expressao){
    
}

// ------------------- 16 ------------------
