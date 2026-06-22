const cargos = [
    "Desenvolvedor Full Stack",
    "Estudante de Eng de Software",
    "Desenvolvedor Web"
];

let indice = 0;

setInterval(() => {
    indice++;

    if (indice >= cargos.length) {
        indice = 0;
    }

    document.getElementById("cargo").textContent = cargos[indice];
}, 2000);