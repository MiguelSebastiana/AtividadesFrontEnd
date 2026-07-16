// Parametros, Argumentos e Default Parametes

/* 
   O suco parece de limao que tem gosto de groselha e é de tamarindo. No JS acontece a mesma coisa...
   nos confundimos e achamso que parametro é argumento, que argumento é default parameters... e zaz!!! 
   Mas cada um desses coleguinhas tem sua caixinha bem definida
*/

/* Parametro Vs Argumento

    Parametro é a forma o molde. Ou seja: É a variavel declarada na criação da função (no parenteses
    de cima). Ela funciona como uma gaveta vazia esperando algo.

    Argumento é o conteudo real. Ou seja: É o valor real que enviamos dentro dessa gaveta vazia, quando
    de fato chamamos(executamos) a função.

*/

// Exemplo: dataType001 que será o parametro ou seja (a gaveta vazia)
// let typeDataLearned = function(dataType001, dataType002) {
//     console.log(`Nós aprendemos até aqui: ${dataType001} e ${dataType002}`);
// }

// //numbers é o argumento (o valor real que entra na gaveta vazia)
// typeDataLearned("numbers", "string");


// Default Parameters

/* 
   O problema: O que acontece se chamarmos typeDataLearned() sem passar nenhum argumento?
   O js vai definir as variaveis como undefined, o que pode quebrar o layout ou a logica.

   A solução para isso: É definirmos valores padrões diretamente no molde (parametros) para
   caso o usuario esqueça ou decida nao enviar nenhum argumento
*/

// Exemplo: Definindo default parameters ("Eita", "acho que", "moio")

/*
    let mostrarMensagem = function (param1 = "Eita", param2 = "acho que", param3 = "moio") {
        console.log(`Mensagem: ${param1} ${param2} ${param3}`);
    }

    mostrarMensagem();

    mostrarMensagem("Não", "moio", "nada.... Funcionou!!!");
*/

// O return 

/*
    Por que precisamos do return? O escopo local
    Quando criamos uma variavel dentro de uma função, ela é considerada local. Ela nasce e morre 
    dentro daquele bloco de {}. Se tentarmos usa-la fora, o console.log vai falar: 
    "ReferenceError" alguma coisa is not defined.

    Como o return resolve isso?
    O return funciona como a "porta de saida" da função. Ele para a execução do bloco e joga o valor
    gerado lá fora. Dessa forma, quem chamou a função pode "agarrar" esse valor e salva-lo em uma
    variavel externa.
*/

//Exemplo: Pintanto uma parede

// Retorna diretamente a string processada para o lado de fora
 let paintKitchenWall = function (paintColor, paintOptions){
    return `A parede terá a cor de tinta ${paintColor} e será do tipo ${paintOptions}`;
}

// Se chamarmos apenas desse jeito, o valor retornado vai se perder.
paintKitchenWall("Azul", "Acrilica");

// O jeito certo "agarrar" o retorno: é salvando em uma variavel!!!

let paintResult = paintKitchenWall("Azul", "Acrilica");
console.log(paintResult);

// Função de CallBack

/*
   Bora imaginar que nos somos um mestre de obras de uma construção. A equipe principal tem uma tarefa pesada
   e que sera demorada: Erguer uma parede de tijolos.

   No entanto, uma parede de tijolos brutos, não é o fim. Depois que ela estiver pronta outra etapa precisa acontecer.
   Mas qual? Depende do comodo!!!

   - Se for a sala, precisamos chamar o pintor para pintar;
   - Se fora cozinha, precisamos chamar o eletrecista para passar os fios e colocar as tomadas.

   O mestre de obras, não faz tudo sozinho. Voce coordena... Voce inica a contrução da parede e diz: "Quando a parede estiver
   totalmente de pé, eu chamo o especialista para a proxima etapa"

   Essa "Proxima etapa" que chamamos no final é a função CALLBACK
*/

// Exemplo - Vamos definir os nossos especialistas (as funções de callback)

const acaoPintar = () => {
    console.log("Pintor - A parede foi pintada com a cor combinada!!!");
}

const acaoInstalarTomadas = () => {
    console.log("Eletrecista - Tomadas instaladas OK!!!")
}

// O parametro "proximaEtapa" é o espaço reservado para receber a função que faremos

const construirParede = (proximaEtapa) => {
    console.log("Pedreiro: Misturando massa...");
    console.log("Pedreiro: Assentando tijolo por tijolo...");
    console.log("Pedreiro: Rebocando a parede... pronto...");

    // A parede esta pronta, agora vamos executar o callback que nos foi enviado
    console.log("Mestre de obras: Parede pronta. Chamando o proximo profissional");
    proximaEtapa();
};

// Colocar novamente a obra para rodar

// Cenario A: Queremos que a parede da sala seja pintada
// construirParede(acaoPintar);

// Cenario B: Queremos uma parede com tomadas na cozinha
construirParade(acaoInstalarTomadas);

// Fluxo de execução:

/*
    1 - Definção: O JS le as funções acaoPintar, acaoInstalarTomadas e construirParede, Guardando na memoria sem 
    executar nada ainda...
    2 - Inicio da chamada: Quando nos executamos construirParede(acaoPintar), nós enviamos o bloco de codigo de pintor
    para dentro do parametro: proximaEtapa.
    3 - Trabalho Principal: O codigo vai executar os consoles.log dos pedreiros (erguendo a parede).
    4 - Callback: Ao chegar na linha proximaEtapa(), o JS volta la na funçãp que enviamos de presente (acaoPintar) e
    finalmente a executa.
*/


// Objeto Literal - A gaveta de etiquetas

/* 
    No array: os dados ficam organizados por indices (0, 1, 2....).
    No objeto literal: nos organizamos pro chave e valor (ou seja: etiquetas
    com nome).
*/

// Exemplo: Criando o objeto: "team";

let team = {
    nome: "Programação FrontEnd",
    studentsCount: 22,

// Um objeto pode ter funções dentro dele (As quais chamamos de: Métodos)

apresentar: function() {
    console.log("Salve, somos a turma 80")
    }
}

// Como acessamos as informações??? Usando o nosos brother: ponto (.)

console.log(team.name); // Programação FrontEnd no console do navegador
team.apresentar(); // Executa o método do objeto

// THIS

/* o this no JS é uma palavra-chave que aponta o contexto atual onde o código
   esta sendo executado. Quando usado de um método de objeto, o this aponta
   para o propio objeto que o contem
*/

// Exemplo:

let user = {
    userName: "Astolpho",
    saudar: function() {
        //Erro: Se nós passarmos um console.log (`Olá, eu sou o ${user.name}`);
        // O JS vai dizer "tá doidão - que username"

        // Correto: "this" diz "deste objeto aqui eu peguei o username"
        console.log(`Olá, eu sou o ${this.userName}`);
    }
};

user.saudar(); //Saida: Olá, eu sou o astolpho


// Break e Continue

/*
    Break: Quando o JS encontra a palavra break, ele para o loop imediatamente (como se
    um botão de emergencia) e vai executar o codigo que estiver logo apos o bloco do loop...
    Tipo "Vida que segue....".
*/

// Exemplo: Nosso array de dados estudados

let typeDataLearned = ["numbers", "strings", "null", "if"];

for(let i = 0; i < typeDataLearned.length; i++){

    if(typeDataLearned[i] === "numbers"){
        continue;
    }

    console.log(`Nós estudamos até aqui: ${typeDataLearned[i]}`)
    // console.log(`Estudamos até aqui: ${typeDataLearned}`);

    // //Se o item atual for strings, atingimos a meta. Paramos tudo.
    // if(typeDataLearned[i] === "string"){
    //     console.log("Deu bom... Meta de estudos alcançada com sucesso!");
    //     break; // O loop sera interrompido aqui
    // }
    
}

// Resumo:
// break: para o loop na hora e sai dele de vez
// continue: pula apenas a rodada atual e vai direto para a proxima repetição

// APIs, Requests, EndPoints e JSON

/*
    Até aqui nós vimos como criar dados de forma manual dentro do propio codigo, como (arrays
    e objeto literal). Só que no dia das empresas, as informações como (produtos de uma loja,
    postagens de uma rede social ou previsão do tempo) vem de forma, de servidores espalhados
    por ai. E é aqui que entram os 4 conceitos (APIs, Requests, EndPoints e JSON)
*/

/* 
    Metafora: O dono da obra, o Engenheiro e o Deposito

    - Nós (Desenvolvedores/Nossa aplicação): É o dono da obra que precisa de materiais para construir
    o site.
    - A API (Engenheiro): É o responsavel por intermediar, organizar e garantir que o pedido saia
    do papel com segurança e eficiencia.
    - O EndPoint (O endereço do deposito): É a localização exata de onde o material está armazenado.
    - A Request/Requisição(O pedido): É o caminhão que vai até o deposito buscar os tijolos que voce 
    solicitou.
    - O JSON (A nota de carregamento): É o papel que descreve exatamente o que esta vindo no caminhao
    (Ex: 500 tijolos, 2 sacos de cimento), formatado de um jeito que todo mundo possa entender.
    */

    // O que é API e EndPoint:

    /* API: É uma ponte ou interface que permite que duas aplicações diferentes conversem entre
    si. Se o seu site precisa exibir um mapa, ele não reconstroi do zero; ele vai usar a API do
    Google Maps.

    EndPoint: Para conversar com uma API, Ela nos dá "portas de entrada" ou endereços. Esses endereços
    são URLs normais da WEB, mas feitas para que o código consiga ler. 
*/

/*
    Exemplo: Imagine que temos uma API de uma grande construtora. Ela nos dá as seguintes URLs (endpoints)
    para buscarmos dados:

    Retorna dados sobre os tijolos disponiveis: https://api.construtora.com/tijolos;
    Retorna dados sobre as tintas: https://api.construtora.com/tintas
*/

/* O que sao requests e o JSON */

/* 
    Request: É o ato de bater na porta do EndPoint e pedir a informação. O seu navegador envia uma mensagem
    para o servidor dizendo. "Ei, me forneça a lista de tintas por favor???"

    Aqui o servidor pode aceitar e te devolver o que voce pediu(seucsso) ou pode te dar um aviso se algo der errado 
    (Ex: Se o deposito tiver fechado ou o produto nao existir).

    JSON (JavaScript Object Notation): É o formato padrão que quase todas as APIs usam para enviar as respostas.
    Ele é puramente texto.
*/

// Exemplo pratico de um JSON enviado pela api de tintas

{
    "tipoMaterial" = "TintaAcrilica",
    "cor" = "Azul",
    "quantidadeLatas" = 5,
    "disponivel" = true
}

/* 
    No exemplo acima o JS consegue ler esse texto instantaneamente e transforma-lo em um objeto JS comum, facilitando
    a exibição na tela para o usuario.
*/

// Diferença entre Objeto JavaScript e JSON

/* 
    Como escrevemos no JavaScript (Objeto literal) 

    No arquivo JS, Nós criamos objetos de forma livre. As chaves (propiedades)
*/

