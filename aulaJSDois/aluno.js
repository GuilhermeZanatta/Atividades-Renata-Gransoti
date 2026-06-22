let nome;
let idade;
let notas = [];

function cadastrarAluno() {
        nome = prompt("Digite o nome do aluno:");
        idade = parseInt(prompt("Digite a idade do aluno:"));
    
    for (let i = 0; i < 3; i++) {
        let nota = parseFloat(prompt(`Digite a nota ${i + 1} do aluno:`));
        notas.push(nota);
    }
    
}