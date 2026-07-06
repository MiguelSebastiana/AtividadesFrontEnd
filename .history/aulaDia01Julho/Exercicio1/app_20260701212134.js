//                Alert para teste 
// alert("Sistema de Supervisão Ativo e Conectado!");

const anoInstalacaoMaquina = 2022;
const anoAtual = 2026;

console.log(anoInstalacaoMaquina, anoAtual)

const tempoOperacaoMaquina = anoAtual - anoInstalacaoMaquina;

console.log(tempoOperacaoMaquina);

const periodoCiclo = 20;

const anoPrevisao = anoAtual + tempoOperacaoMaquina;
const anoDeOperacaoContinua = tempoOperacaoMaquina + periodoCiclo;

console.log(1No ano de: ${anoPrevisao}, a prensa hidráulica completará ${anoDeOperacaoContinua} anos de operação contínua. ")