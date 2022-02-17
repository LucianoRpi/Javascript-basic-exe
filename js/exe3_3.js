function calcularDeposito(){
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);

// se não preencheu ou Not-a-Number(NaN)
    if (valor == 0 || isNaN(valor)) {
        alert("Por favor, informe um valor de depósito válido de moedas.")
        inValor.focus();
        return;
    }
    if (valor < 1) {
        alert("Valor Insuficiente (no mínimo, R$ 1.00)");
        inValor.focus();
        return;
    }
    
    if(valor >= 1 && valor < 1.75) {
        outTempo.textContent = "Tempo: 30 min";
        var troco = valor - 1;
        outTroco.textContent = "Troco R$: " + troco.toFixed(2);
    }else if (valor >= 1.75 && valor < 3) {
        outTempo.textContent = "Tempo: 60 min";
        var troco = valor - 1.75;
        outTroco.textContent = "troco R$: " + troco.toFixed(2);
    } else if (valor >= 3) {
        outTempo.textContent = "Tempo: 120 min";
        var troco = valor - 3;
        outTroco.textContent = "troco R$: " + troco.toFixed(2);
    }
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click",calcularDeposito);