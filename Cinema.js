// ==================================================
// TRABALHO MONGODB CONSULTAS AVANCADAS
// TEMA: Cinema
// GRUPO: [Arthur Rocha Silva - Davi dos Santos - Joao Henrique Reis - Pedro Henrique Gomes - Yahn de Freitas]
// ==================================================

/* EXECUCAO:
   1. REQUISITOS: Ter o MongoDB Server e o Mongosh instalados.
   2. LIGAR O BANCO: mongod --dbpath="CAMINHO_DA_PASTA\data"
   3. RODAR O SCRIPT: mongosh --quiet Cinema.js
*/

use('cinema'); 

db.filmes.drop(); 
db.sessoes.drop(); 

print("==============================");
print("BANCO DE DADOS: Cinema");
print("COLECOES: filmes, sessoes");
print("==============================");

// Filmes
db.filmes.insertMany([
  { _id: 1, titulo: "Vingadores: Ultimato", ano: 2019, genero: "Acao", duracao: 181, nacional: false, classificacao: 12 },
  { _id: 2, titulo: "O Auto da Compadecida", ano: 2000, genero: "Comedia", duracao: 104, nacional: true, classificacao: 12 },
  { _id: 3, titulo: "Duna: Parte 2", ano: 2024, genero: "Ficcao Cientifica", duracao: 166, nacional: false, classificacao: 14 },
  { _id: 4, titulo: "Cidade de Deus", ano: 2002, genero: "Drama", duracao: 130, nacional: true, classificacao: 18 },
  { _id: 5, titulo: "Interestelar", ano: 2014, genero: "Ficcao Cientifica", duracao: 169, nacional: false, classificacao: 10 },
  { _id: 6, titulo: "Bacurau", ano: 2019, genero: "Suspense", duracao: 131, nacional: true, classificacao: 16 },
  { _id: 7, titulo: "O Poderoso Chefao", ano: 1972, genero: "Crime", duracao: 175, nacional: false, classificacao: 14 },
  { _id: 8, titulo: "Minha Mae e uma Peca", ano: 2013, genero: "Comedia", duracao: 84, nacional: true, classificacao: 12 },
  { _id: 9, titulo: "Coringa", ano: 2019, genero: "Drama", duracao: 122, nacional: false, classificacao: 16 },
  { _id: 10, titulo: "Tropa de Elite", ano: 2007, genero: "Acao", duracao: 115, nacional: true, classificacao: 16 },
  { _id: 11, titulo: "Parasita", ano: 2019, genero: "Suspense", duracao: 132, nacional: false, classificacao: 16 },
  { _id: 12, titulo: "Central do Brasil", ano: 1998, genero: "Drama", duracao: 113, nacional: true, classificacao: 12 },
  { _id: 13, titulo: "Matrix", ano: 1999, genero: "Ficcao Cientifica", duracao: 136, nacional: false, classificacao: 14 },
  { _id: 14, titulo: "O Menino e o Mundo", ano: 2013, genero: "Animacao", duracao: 80, nacional: true, classificacao: 0 },
  { _id: 15, titulo: "Batman", ano: 2022, genero: "Acao", duracao: 176, nacional: false, classificacao: 14 }
]);

// Sessoes
db.sessoes.insertMany([
  { filme_id: 1, sala: "IMAX 01", horario: "14:00", tipo: "3D", vago: true },
  { filme_id: 2, sala: "Sala 03", horario: "16:30", tipo: "2D", vago: true },
  { filme_id: 3, sala: "IMAX 01", horario: "20:00", tipo: "3D", vago: false },
  { filme_id: 10, sala: "Sala 02", horario: "22:00", tipo: "2D", vago: true },
  { filme_id: 15, sala: "Sala 01", horario: "21:00", tipo: "2D", vago: true },
  { filme_id: 4, sala: "Sala 05", horario: "19:00", tipo: "2D", vago: false },
  { filme_id: 9, sala: "Sala 03", horario: "20:30", tipo: "2D", vago: true },
  { filme_id: 13, sala: "Sala 04", horario: "18:00", tipo: "3D", vago: true }
]);

print("--- PARTE 1: OPERADORES DE COMPARACAO ---");

// $gt
print("1. Filmes > 150min:");
printjson(db.filmes.find({ duracao: { $gt: 150 } }).toArray());

// $lt
print("2. Filmes antes de 2000:");
printjson(db.filmes.find({ ano: { $lt: 2000 } }).toArray());

// $gte
print("3. Classificacao >= 16:");
printjson(db.filmes.find({ classificacao: { $gte: 16 } }).toArray());

// $lte
print("4. Filmes <= 100min:");
printjson(db.filmes.find({ duracao: { $lte: 100 } }).toArray());

// $in
print("5. Generos Drama ou Suspense:");
printjson(db.filmes.find({ genero: { $in: ["Drama", "Suspense"] } }).toArray());

// $ne
print("6. Filmes nao nacionais:");
printjson(db.filmes.find({ nacional: { $ne: true } }).toArray());

print("--- PARTE 2: OPERADORES LOGICOS ---");

// $and (implicito)
print("7. Acao e Classificacao 14:");
printjson(db.filmes.find({ genero: "Acao", classificacao: 14 }).toArray());

// $and (explicito)
print("8. Nacional e Ano > 2010:");
printjson(db.filmes.find({ $and: [ { nacional: true }, { ano: { $gt: 2010 } } ] }).toArray());

// $or
print("9. Comedia ou Animacao:");
printjson(db.filmes.find({ $or: [ { genero: "Comedia" }, { genero: "Animacao" } ] }).toArray());

// $nor
print("10. Nem Acao, nem Drama:");
printjson(db.filmes.find({ $nor: [ { genero: "Acao" }, { genero: "Drama" } ] }).toArray());

// $not
print("11. Classificacao nao menor que 10:");
printjson(db.filmes.find({ classificacao: { $not: { $lt: 10 } } }).toArray());

// Combinação ($and + $or)
print("12. Nacional E (Comedia ou Drama):");
printjson(db.filmes.find({ 
    $and: [ 
        { nacional: true }, 
        { $or: [ { genero: "Comedia" }, { genero: "Drama" } ] } 
    ] 
}).toArray());

print("==============================");
print("FIM DO TRABALHO");
print("==============================");