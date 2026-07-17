// ----------------- 1 -----------------
let meuPerfil = {
    nome: "Miguel",
    Idade: "18",
    cidade: "Guaramirim"
}

console.log(meuPerfil);

// ----------------- 2 -----------------
let produto = {
    nome: "Notebook",
    preco: 3500,
    emEstoque: true
}

console.log(produto);

// ----------------- 3 -----------------
let filme = {
    titulo: "Inception",
    ano: 2010,
    diretor: "Christopher Nolan",
    genero: "Ficção cientifica"
}

console.log(filme.titulo);
console.log(filme.diretor);

// ----------------- 4 -----------------
let pet = {
    nome: "Rex",
    especie: "Cachorro",
    idade:5,
    cor: "Marrom"
}

console.log("Nome do pet: " + pet["nome"]);
console.log("Especie do pet: " + pet["especie"]);

// ----------------- 5 -----------------
let contato = {
    nome: "Maria",
    telefone: "0000-0000"
}

console.telefone = "12345-6789";

console.email = "contato@exemplo.com";

console.log(contato);

// ----------------- 6 -----------------
let lanche = {
    nome: "X-Burguer",
    preco: 15.00,
    ingredientes: ["pão", "hambúrguer", "queijo", "alface"]
}

console.log("O lanche " + lanche.nome + " custa " + lanche.preco);

lanche.preco = 17.50;

lanche.vegano = false;

console.log(lanche);

// ----------------- 7 -----------------
let usuario = {
    nome: "Eric",
    endereco: {
        rua: "Butuca",
        numero: "1020",
        cidade: "Massaranduba"
    }
}

console.log(`O usuario mora em ${usuario.endereco.cidade}, na rua ${usuario.endereco.rua}`);

// ----------------- 8 -----------------
let aluno = {
    nome: "Gabriel",
    matricula: {
        numero: 10,
        curso: "TI"
    }
}


