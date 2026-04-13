// ==================================================
// TRABALHO MONGODB CONSULTAS AVANÇADAS
// TEMA: Cinema
// GRUPO: [Arthur Rocha Silva - Davi dos Santos - João Henrique Reis - Pedro Henrique Gomes - Yahn de Freitas]
// ==================================================

use('cinema'); 

// EXCLUSÃO DE COLEÇÕES 
db.filmes.drop(); 
db.sessoes.drop(); 

print("==============================");
print("BANCO DE DADOS: Cinema");
print("COLEÇÕES: filmes, sessoes");
print("==============================");

// Filmes
db.filmes.insertMany([
  { _id: 1, titulo: "Vingadores: Ultimato", ano: 2019, genero: "Ação", duracao: 181, nacional: false, classificacao: 12 },
  { _id: 2, titulo: "O Auto da Compadecida", ano: 2000, genero: "Comédia", duracao: 104, nacional: true, classificacao: 12 },
  { _id: 3, titulo: "Duna: Parte 2", ano: 2024, genero: "Ficção Científica", duracao: 166, nacional: false, classificacao: 14 },
  { _id: 4, titulo: "Cidade de Deus", ano: 2002, genero: "Drama", duracao: 130, nacional: true, classificacao: 18 },
  { _id: 5, titulo: "Interestelar", ano: 2014, genero: "Ficção Científica", duracao: 169, nacional: false, classificacao: 10 },
  { _id: 6, titulo: "Bacurau", ano: 2019, genero: "Suspense", duracao: 131, nacional: true, classificacao: 16 },
  { _id: 7, titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime", duracao: 175, nacional: false, classificacao: 14 },
  { _id: 8, titulo: "Minha Mãe é uma Peça", ano: 2013, genero: "Comédia", duracao: 84, nacional: true, classificacao: 12 },
  { _id: 9, titulo: "Coringa", ano: 2019, genero: "Drama", duracao: 122, nacional: false, classificacao: 16 },
  { _id: 10, titulo: "Tropa de Elite", ano: 2007, genero: "Ação", duracao: 115, nacional: true, classificacao: 16 },
  { _id: 11, titulo: "Parasita", ano: 2019, genero: "Suspense", duracao: 132, nacional: false, classificacao: 16 },
  { _id: 12, titulo: "Central do Brasil", ano: 1998, genero: "Drama", duracao: 113, nacional: true, classificacao: 12 },
  { _id: 13, titulo: "Matrix", ano: 1999, genero: "Ficção Científica", duracao: 136, nacional: false, classificacao: 14 },
  { _id: 14, titulo: "O Menino e o Mundo", ano: 2013, genero: "Animação", duracao: 80, nacional: true, classificacao: 0 },
  { _id: 15, titulo: "Batman", ano: 2022, genero: "Ação", duracao: 176, nacional: false, classificacao: 14 }
]);

// Sessões
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

print("--- PARTE 1: OPERADORES DE COMPARAÇÃO ---");

// $gt: Filmes com duração maior que 150 minutos
print("1. Filmes > 150min:");
db.filmes.find({ duracao: { $gt: 150 } }).pretty();

// $lt: Filmes lançados antes de 2000
print("2. Filmes antes de 2000:");
db.filmes.find({ ano: { $lt: 2000 } }).pretty();

// $gte: Filmes com classificação 16 anos ou mais
print("3. Classificação >= 16:");
db.filmes.find({ classificacao: { $gte: 16 } }).pretty();

// $lte: Filmes com até 100 minutos de duração
print("4. Filmes <= 100min:");
db.filmes.find({ duracao: { $lte: 100 } }).pretty();

// $in: Filmes dos gêneros 'Drama' ou 'Suspense'
print("5. Gêneros Drama ou Suspense:");
db.filmes.find({ genero: { $in: ["Drama", "Suspense"] } }).pretty();

// $ne: Filmes que não são nacionais
print("6. Filmes não nacionais:");
db.filmes.find({ nacional: { $ne: true } }).pretty();

print("--- PARTE 2: OPERADORES LÓGICOS ---");

// $and (implícito): Filmes de Ação com classificação 14
print("7. Ação e Classificação 14:");
db.filmes.find({ genero: "Ação", classificacao: 14 }).pretty();

// $and (explícito): Filmes nacionais E lançados após 2010
print("8. Nacional e Ano > 2010:");
db.filmes.find({ $and: [ { nacional: true }, { ano: { $gt: 2010 } } ] }).pretty();

// $or: Filmes de Comédia OU Animação
print("9. Comédia ou Animação:");
db.filmes.find({ $or: [ { genero: "Comédia" }, { genero: "Animação" } ] }).pretty();

// $nor: Filmes que não são de Ação nem de Drama
print("10. Nem Ação, nem Drama:");
db.filmes.find({ $nor: [ { genero: "Ação" }, { genero: "Drama" } ] }).pretty();

// $not: Filmes que NÃO possuem classificação menor que 10
print("11. Classificação não menor que 10:");
db.filmes.find({ classificacao: { $not: { $lt: 10 } } }).pretty();

// Combinação ($and + $or): Filmes nacionais E (Comédia OU Drama)
print("12. Nacional E (Comédia ou Drama):");
db.filmes.find({ 
    $and: [ 
        { nacional: true }, 
        { $or: [ { genero: "Comédia" }, { genero: "Drama" } ] } 
    ] 
}).pretty();

print("==============================");
print("FIM DO TRABALHO");
print("==============================");