function calcularValor() {
    var inUso = document.getElementById("inUso");
    var inTempo = document.getElementById("inTempo");
    var outValor = document.getElementById("outValor");

    var uso = Number(inUso.value);
    var tempo = Number(inTempo.value);

    
    var valor = uso * Math.ceil(tempo / 15);
    
   

    outValor.textContent = "Valor a Pagar R$: " + valor.toFixed(2);
}

var btCalcularValor = document.getElementById("btCalcularValor");
    btCalcularValor.addEventListener("click", calcularValor);