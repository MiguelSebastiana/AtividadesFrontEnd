/* Metodo indexof */

/* Esse colega pega o index ou seja a posição do cartere que voce determinar. Nós queremos
    dizer para o indexof que nos gostariamos que ele busque o caractere "$" dentro de uma const
    chamada moneyValue. Reparem que como nos estamos especificando que queremos buscar uma string, temos
    que passar essa $ entre aspas (pode ser simples ou duplas).
*/

// const moneyValue = "R$ 150";

// //position nao é uma key word, portanto pode ser usada como nome de variavel

// const position = moneyValue.indexOf(1);

// console.log(position);

/* String - Contenação de Strings com número */

/*
Podemos concatenar String com o operador "+".
*/

const amountBricks = 28;

const houseWall = "A casa possui: " + amountBricks + " tijolos na parede"

console.log(houseWall);