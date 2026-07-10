// // BOOLEANS

// // TRUE E FALSE - DUAS FORMAS DO BOOLEAN

// // TRUE E FALSE - "TRUE" E "FALSE" = STRINGS

// // CUIDADO QUE ISSO PODE CONFUNDIR

// // console.log(false, true, "false", "true", true, false, "true", "false");

// // // METODOS INCLUDES ()

// // let machineValue = "R$ 3000 - A vista";

// // let hasDollarSign = machineValue.includes("%");

// // console.log(hasDollarSign);

// // let typeDataLearned = ["numbers", "string", "null", "undefined"];

// // let hasArrayInside = typeDataLearned.includes("if");

// // console.log(hasArrayInside);

// // Booleans e o método includes()

// // OPERADORES DE COMPARAÇÃO

// // PRIMEIRO OPERADOR DE COMPARAÇÃO: =

// // let firstCourseName = 'front';

// // console.log(firstCourseName > 'end');

// /* Por que true apareceu no exemplo acima: No exemplo ele esta dizendo que "front" é maior do que "end", no nosso alfabeto que tem 26 letrinhas
//    (a primeira letra da palavra front é o "f", a letra f. Ela vem depois da letra "e" de "end", então no nosso exemplo acima, "front" é maior que "end".)

//    Resumindo: Podemos entender que as ultimas letras do alfabeto sao sempre maiores que as primeiras letras do alfabeto) */

// // let firstCourseName = "front";

// // console.log(firstCourseName = "End");

// // /* No exemplo acima qualquer letra que comece com um caractere minusculo sempre prevalecera em relação a um caractere maiusculo */

// // let classRomm = 212;

// // console.log(classRomm != 207);

// // O jeito correto para efetuarmos a leitura da expressão acima é: classRoom não é igual a 207.
// /* Depois que fizemos essa leitura, é perguntado: Se isso é verdade (true);
// E a resposta recebica é de que simmm, isso é verdade(true).
// É feita outra pergunta:
// E por que isso é true?
// Porque 212 não é igual a 207 ou seja: 212 != 207. */

// //Operadores de comparação escrita (Strict comparison)

// // let classRoom = 214;

// // console.log(classRoom == 214);

// /*
//     Por que true apareceu no exemplo acima??????

//     Porque ele fez a comparação estrita tanto do valor quanto do tipo (o valor é 214 e o tipo é um number)
//     - o numero 214 que esta armazenado na let classRoom é igual (tem o mesmo valor) o que o 214 que esta dentro
//     do console.log?
//     Sim, é igual (tem o mesmo valor);
//     - Os 2 sao do tipo number?
//     Sim, os 2 são do tipo number;

//     Resumindo: Estamos informando que por causa desse sinal (===), que a classRoom tem o mesmo valor e tambem o mesmo tipo que 214. 
//     Por isso true apareceu no console
// */

// // IF - Controle de Fluxo


// /* O controle de fluxo faz referncia ao meio como o codigo sera executado (ou seja: atendendo condições e/ou eventos especificos.)

// Estrutura de bloco de um if:

// if (uma condição é verdadeira) {
//     execute algo
// }

// */

// // const classRoom = 212;

// // if (classRoom > 212){
// //     console.log("Estamos na sala 212")
// // }

// /* No console do navegador, nenhuma mensagem foi exibida, porque a condição classRoom > 212 é false. ou seja: classRoom nao é maior que
//    212 classRoom é igual a 212. */

// // const classRomm = 213;

// // if(classRomm > 212){
// //     console.log("Estamos na sala 212");
// // }

// // const dataTypes = ["Numbers", "String", "Null", "Undefined", "Boolean"];

// // if(dataTypes.length >= 4){
// //     console.log("5 tipos de dados aprendidos até aqui")
// // }

// /* Por que a mensagem foi exibida? Porque a condição (dataTypes.length >= 4) é verdadeira. 
//    Ou seja: dataTypes vale 5 que é maior que 4. */

// // const registrarNumber = "abc";

// // if (registrarNumber.length >= 10) {
// //     console.log("O seu código de matricula possui 10 ou mais caracteres.");
// // } else {
// //     console.log("O seu código precisa conter 10 ou mais caracteres");
// // }

// //Boaaaa Webber

// /* Revisão: se o resultado da condição regristrationNumber.length >= 10 for true,
//    so o bloco de codigo do if sera executado e o bloco do else sera ignorado.
   
//  - Se o resultado da condição registrarNumber.length >= 10 for false, o bloco de codigo 
//    do else sera executado e o bloco do if sera ignorado 
// */

// const registrationNumber = "abcdefg123";

// if(registrationNumber.length >= 20){
//     console.log("Esse codigo de matricula esta de acordo com o nosso sistema")
// }else if(registrationNumber.length >= 10){
//     console.log("O seu codigo de matricula possui 10 ou mais caracteres")
// }else{
//     console.log("O seu codigo de matricula precisa de 10 ou mais caracteres")
// }

// // For LOOP - CONTROLE DE FLUXO

// // BLOCO DE FOR LOOP

// for(let i = 0; i < 20; i++){
//     //bloco de codigo
// }

// for(let i = 0; i < 20; i++){
// console.log(`o numero de vezes que esse loop foi executado: ${i}`)
// }

// /* Criamos esse for loop utilizando a palavra for, e na sequencia entre os () foram declaradas 3
// expressoes distintas, onde cada uma foi separada pelo seu ponto e virgula.

// Vamos desmembrar cada 1 delas :

// 1 - É a inicializacao da variavel, podemos interpretar essa variavel como um contador e esse 
// contador, contara quantas vezes esse loop foi executado.

// 2 - É uma condição, e essa condição resultara em falso ou verdadeiro.

// 3 - É a i++, isso representa um incremento, ou seja essa expressao sera rodada ao fim de cada
// execução do codigo. */

// // WHILE LOOP

// //Dentro do for loop: 1 - inicialização; 2 - condição e 3 - incremento;

// // Ja estrutura do WHILE LOOP dentro dos parenteses tera apenas uma expressao que sera:

// while (i < 19) {

// }


// /* Se nós deixarmos assim do que jeito esta, teremos um problema. Nós não fazemos ideia do que seja essa i,
//    porque ate agora nos nos declaramos a "i" em nenhum lugar. Ao contrario do seu primo FOR, não declaramos a i 
//    dentro dos parenteses, a i do nosso brother WHILE precisa conter em algum lugar. É qual seria esse??? */

// let i = 0;

// while (i < 19) {
//     console.log(`O numero de vezes que esse loop foi executado ${i}`);
//     i++;
// }


//FUNÇÕES

/* UMA FUNÇÃO É UM PROCEDIMENTO DO JS OU SEJA: UM LINDO CONJUNTO DE INSTRUÇÕES QUE EXECUTA UMA TAREFA OU CALCULA UM VALOR.
   PARA USARMOS UMA FUNÇÃO, DEVEMOS DEFINI-LA EM ALGUM LUGAR NO ESCOPO (ESCOPO PODE SER: LOCAL OU GLOBAL) DO QUAL QUISERMOS
   CHAMA-LA.
*/

// VAMOS CRIAR UMA FUNÇÃO QUE LIGA O INTERRUPTOR DE UMA LAMPADA PARA SABERMOS A LAMPADA NAO SERA ACESSA.

// turnOnLightSwitch ()

// Primeiro tipo de função: Function declaration

// function turnOnGateSwitch () {
//     // bloco de codigo da função
//     console.log("O portão foi acionado com sucesso.");    
// }

// turnOnGateSwitch();

// // segundo tipo de função: function expression

// let turnOnGateSwitch = function () {

//     //bloco de codigo da function expression

// }

// O nome da função no exemplo acima nao foi inserido dentro dos parenteses, pois o nome dessa função
// é o nome da let (poderia ser const). Esse jeito de criarmos uma função a qual atribuimos a ela uma variavel
// (let pode ser const) é conhecida como FUNCTION EXPRESSION

// let turnOffGateSwitch = function () {
//     console.log("O portao esta desligado");
// }

// turnOffGateSwitch();


/*
    So que alem dessa declaraçãp let, tem outra grande diferença por tras disso
    Resposta: HOISTING (IÇAMENTO) 
*/

/*
    Quado criarmos uma function declaration a essa função aparecer para voces em algum lugar que 
    nao seja no topo do arquivo o qual voces estao codando. Vai acontecer meio que uma magica
    por debaixo dos panos.... E que magica é essa professorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr? O parenue
    
*/