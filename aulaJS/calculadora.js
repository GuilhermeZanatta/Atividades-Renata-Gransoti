const readline = require("readline-sync");

function soma(n1, n2) {
    return Number(n1) + Number(n2);
}

function sub(n1, n2) {
    return Number(n1) - Number(n2);
}

function mux(n1, n2) {
    return Number(n1) * Number(n2);
}

function div(n1, n2) {
    if (Number(n2) === 0) {
        return "Erro: divisão por zero";
    }
    return Number(n1) / Number(n2);
}

let opcao = 0;

while (opcao !== 5) {
    console.log("\n=== CALCULADORA ===");
    console.log("1 - Soma");
    console.log("2 - Subtração");
    console.log("3 - Multiplicação");
    console.log("4 - Divisão");
    console.log("5 - Sair");

    opcao = Number(readline.question("Escolha uma opcao: "));

    if (opcao >= 1 && opcao <= 4) {
        let n1 = readline.question("Digite o primeiro numero: ");
        let n2 = readline.question("Digite o segundo numero: ");

        switch (opcao) {
            case 1:
                console.log("Resultado:", soma(n1, n2));
                break;

            case 2:
                console.log("Resultado:", sub(n1, n2));
                break;

            case 3:
                console.log("Resultado:", mux(n1, n2));
                break;

            case 4:
                console.log("Resultado:", div(n1, n2));
                break;
        }
    } else if (opcao !== 5) {
        console.log("Opção inválida!");
    }
}

console.log("Programa encerrado.");