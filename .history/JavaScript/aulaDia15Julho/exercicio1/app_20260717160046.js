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
