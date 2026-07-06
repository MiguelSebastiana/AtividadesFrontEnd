alert("Planta: Automotiva - Setor: Estamparia - Linha: MI80.");

const tipoMaquina = "Injetora";
const modeloAntigo = "Quarenta";
const modeloNovo = "Quarenta e um";
const maquinaAtiva = (tipoMaquina + " " + modeloNovo);
console.log(maquinaAtiva);


const componenteIndustrial = "Sensor Indutivo";
const siglaComponente = (componenteIndustrial[0] + "" + componenteIndustrial[7]);
console.log(siglaComponente);


const eixo = "Eixo De Transmissão";
const asset = (eixo[0] + "" + eixo[5] + "" + eixo[8]);
console.log(asset.toLowerCase());


const quantidadeCaracteres = componenteIndustrial.length;
console.log(quantidadeCaracteres);

const codigoLote = "Codigo Lote";
console.log(codigoLote.length - 1);


const alertaCritico = "Falha critica!";
console.log(alertaCritico.toLowerCase());


const comandoCLP = "ligaMotor";
console.log(comandoCLP.toUpperCase());


const primeiroO = comandoCLP.indexOf("o");
console.log(comandoCLP.indexOf("o", primeiroO + 1));


console.log(comandoCLP.lastIndexOf("n"));


const fabricanteRobo = "Fabrica de Robos";


const statusAtualOS = "Status " + "Manutenção";
const novoStatusOS = statusAtualOS


const sobraPecas = 10 % 3;
console.log(sobraPecas);

let totalPecas = 6;
totalPecas++;
console.log(totalPecas);

totalPecas--;
console.log(totalPecas);


totalPecas += 4;
console.log(totalPecas);

const relatorioProducao = `O total de peças processados é: ${totalPecas}`;
console.log(relatorioProducao);

const nomeTecnico = 'Valvula de \'Segurança\'';
console.log(nomeTecnico);

const operadorNome = "joao silva";
let novoNomeOperador = operadorNome.charAt(0).toUpperCase() + operadorNome.slice(1, 5) + 
operadorNome.charAt(5).toUpperCase(5).toUpperCase() + operadorNome.slice(6);

novoNomeOperador = `%{operadorNome.charAt(0).toUpperCase()}$`


