alert("Planta: Automotiva - Setor: Estamparia - Linha: MI80.");

const tipoMaquina = "Injetora";
const modeloAntigo = "Quarenta";
const modeloNovo = "Quarenta e um";
const maquinaAtiva = (tipoMaquina + " " + modeloNovo);

console.log(maquinaAtiva);

const componenteIndustrial = "SensorIndutivo";
const siglaComponente = (componenteIndustrial[0] + "" + componenteIndustrial[6]);

console.log(siglaComponente);

const eixo = "Eixo De Transmissão";
const asset = (eixo[0] + "" + eixo[5] + "" + eixo[8]);

console.log(asset.toLowerCase());

console.log(componenteIndustrial.length())