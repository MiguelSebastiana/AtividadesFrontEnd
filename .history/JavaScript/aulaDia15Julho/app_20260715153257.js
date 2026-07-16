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
let typeDataLearned = function(dataType001, dataType002) {
    console.log(`Nós aprendemos até aqui: ${dataType001} e ${dataType002}`);
}

//numbers é o argumento (o valor real que entra na gaveta vazia)
typeDataLearned("numbers", "string");


// Default Parameters

/* O problema 


