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

// const amountBricks = 28;

// const houseWall = "A casa possui: " + amountBricks + " tijolos na parede"

// console.log(houseWall);

//Criaremos uma String que contem 3 consts.

// const streetName = "Rua Venancio da Silva Porto"
// const amountAnimals = 2;
// const animalsNames = "Rex e Astolpho";

// // criar uma const para armazenar as 3 consts acima

// const companyInfo = 'A empresa localizada na ' + streetName + ', tem ' + amountAnimals + 'animais' + animalsNames + ' que são muito brincalhões';

// console.log(companyInfo);

/* Ele possibilita inserirmos as noass variaveis dentro da String sem ter que fechar a string, declarar um +, abrir outr String, declarar outro +, fechar 
string... e etc. */

// const streetName = "Rua Venancio da Silva Porto"
// const amountAnimals = 2;
// const animalsNames = "Rex e Astolpho";

// const factoryInfo = `A empresa localizada na ${streetName}, tem: ${amountAnimals} animais ${animalsNames} que são muito brincalhões`;

// console.log(factoryInfo);

// $( aqui vai o nome da variavel ) isso aqui é chamado de: Interpolação
// Esse é o tipo que voces vao utilizar no dia a dia no mercado de trabalho.


// Um outro jeito de utilizarmos Template Strings

/* Template HTML */

const streetName = "Rua Venancio da Silva Porto"
const amountAnimals = 2;
const animalsNames = "Rex e Astolpho";
const favoriteToy = "é a bolinha";

const factoryInfoTemplate = `
    <h3>${streetName}</h3>
    <p>${amountAnimals}</p>
    <p>${animalsNames}</p>
    <span>e o nosso brinquedo favoritos${favoriteToy}</span>
    `

    console.log(factoryInfoTemplate);

    /* Quando nos usamos template Strings e quando usamos as Strings normais, igual o exemplo da Concatenaçã ??? */

    /* Normalmente quando não precisamos inserir variaveis na String ou fazemos uma quebra de linha que não tem muito sentido usar Template String. E 
    se durante a criação da String percebermos que ela necessita ter VARIAVEIS ou necessita ter aspas ou é um Template HTML ou é um template Strings.
    Ou seja: A templateStrings vai facilitar e muitoooooo, tanto a manutenção do codigo que voce estara escrevendo. (Manuteção e Padronização)*/

    /* NULL */

    /* O que é NULL: é um valor nulo... que não tem nenhum valor em uma variavel. 
        Null é colocado de forma intencional e o UNDEFINED é colocado automaticamente pelo JS    
    */

    let nothingHere = null;

    console.log(nothingHere + 21);

    /* Valor nulo não aparece por ele ser nulo é a mesma coisa que nada. Quando alguma operação matematica que envolve
       NULL é executada ele de forma automatica é interpretado como 0 */

    // console.log(0+21);

    /* UNDEFINED */

    /* O UNDEFINED é colocado automaticamente pelo JS */

    let nothingHere;

    console
