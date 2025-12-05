// Criando o dicionário de alunos
const alunos = {};

// Adicionando alunos (matrícula → nome)
alunos[101] = "Maria Silva";
alunos[102] = "João Pereira";
alunos[103] = "Carla Mendes";

// Exibindo apenas os nomes, iterando pelas chaves
console.log("Lista de alunos:");

for (let matricula in alunos) {
    console.log(`Matrícula ${matricula}: ${alunos[matricula]}`);
}