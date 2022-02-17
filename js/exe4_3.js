function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResultado = document.getElementById("outResultado");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);

    if (ladoA == 0 || isNaN(ladoA) ||
        ladoB == 0 || isNaN(ladoB) ||
        ladoC == 0 || isNaN(ladoC)) {
        alert("Por favor, informe os lados válidos para o triângulo.");
        inLadoA.focus()
        return;
    }


    if (ladoA > ladoB + ladoC ||
        ladoB > ladoA + ladoC ||
        ladoC > ladoA + ladoB) {
        outResultado.textContent = "Lados não podem formar um triângulo";
    } else {
        outResultado.textContent = "Lados podem formar um triângulo";
        if (ladoA == ladoB && ladoB == ladoC) {
            outTipo.textContent = "Tipo: Equilátero";
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outTipo.textContent = "Tipo: Isósceles";
        } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
            outTipo.textContent = "Tipo: Escaleno";
        }
    }

}
var btVerificar = document.getElementById("btVerificar");
    btVerificar.addEventListener("click", verificarTriangulo);