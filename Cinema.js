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
  { filme_id: 10, sala: "Sala 02", horario: "22:00", tipo: "2D", vago: true }
]);

// CONSULTAS COM OPERADORES DE COMPARAÇÃO 

// $gt: Filmes com duração maior que 150 minutos
db.filmes.find({ duracao: { $gt: 150 } }).pretty();

// $lt: Filmes lançados antes de 2000
db.filmes.find({ ano: { $lt: 2000 } }).pretty();

// $gte: Filmes com classificação 16 anos ou mais
db.filmes.find({ classificacao: { $gte: 16 } }).pretty();


