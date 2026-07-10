// BOOLEANS

// TRUE E FALSE - DUAS FORMAS DO BOOLEAN

// TRUE E FALSE - "TRUE" E "FALSE" = STRINGS

// CUIDADO QUE ISSO PODE CONFUNDIR

// console.log(false, true, "false", "true", true, false, "true", "false");

// // METODOS INCLUDES ()

// let machineValue = "R$ 3000 - A vista";

// let hasDollarSign = machineValue.includes("%");

// console.log(hasDollarSign);

// let typeDataLearned = ["numbers", "string", "null", "undefined"];

// let hasArrayInside = typeDataLearned.includes("if");

// console.log(hasArrayInside);

// Booleans e o método includes()

// OPERADORES DE COMPARAÇÃO

// PRIMEIRO OPERADOR DE COMPARAÇÃO: =

// let firstCourseName = 'front';

// console.log(firstCourseName > 'end');

/* Por que true apareceu no exemplo acima: No exemplo ele esta dizendo que "front" é maior do que "end", no nosso alfabeto que tem 26 letrinhas
   (a primeira letra da palavra front é o "f", a letra f. Ela vem depois da letra "e" de "end", então no nosso exemplo acima, "front" é maior que "end".)

   Resumindo: Podemos entender que as ultimas letras do alfabeto sao sempre maiores que as primeiras letras do alfabeto) */

// let firstCourseName = "front";

// console.log(firstCourseName = "End");

// /* No exemplo acima qualquer letra que comece com um caractere minusculo sempre prevalecera em relação a um caractere maiusculo */

// let classRomm = 212;

// console.log(classRomm != 207);

// O jeito correto para efetuarmos a leitura da expressão acima é: classRoom não é igual a 207.
/* Depois que fizemos essa leitura, é perguntado: Se isso é verdade (true);
E a resposta recebica é de que simmm, isso é verdade(true).
É feita outra pergunta:
E por que isso é true?
Porque 212 não é igual a 207 ou seja: 212 != 207. */

//Operadores de comparação escrita (Strict comparison)

// let classRoom = 214;

// console.log(classRoom == 214);

/*
    Por que true apareceu no exemplo acima??????

    Porque ele fez a comparação estrita tanto do valor quanto do tipo (o valor é 214 e o tipo é um number)
    - o numero 214 que esta armazenado na let classRoom é igual (tem o mesmo valor) o que o 214 que esta dentro
    do console.log?
    Sim, é igual (tem o mesmo valor);
    - Os 2 sao do tipo number?
    Sim, os 2 são do tipo number;

    Resumindo: Estamos informando que por causa desse sinal (===), que a classRoom tem o mesmo valor e tambem o mesmo tipo que 214. 
    Por isso true apareceu no console
*/

// IF - Controle de Fluxo


/* O controle de fluxo faz referncia ao meio como o codigo sera executado (ou seja: atendendo condições e/ou eventos especificos.)

Estrutura de bloco de um if:

if (uma condição é verdadeira) {
    execute algo
}

*/

const classRoom = 212;

if (classRoom > 212){
    console.log("Estamos na sala 212")
}