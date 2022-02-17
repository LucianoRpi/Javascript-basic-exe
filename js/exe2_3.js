function verificaVelocidade() {
    var inVelPermitida = document.getElementById("inVelPermitida");
    var inVelCondutor = document.getElementById("inVelCondutor");
    var outSituacao = document.getElementById("outSituacao");

    var velPermitida = Number(inVelPermitida.value);
    var velCondutor = Number(inVelCondutor.value);

    // se não preencheu ou Not-a-Number (NaN)
    if (inVelPermitida.value == "" || isNaN(velPermitida) ||
        inVelCondutor.value == "" || isNaN(velCondutor)) {
        // exibe mensagem de advertência
        alert("Informe as velocidades corretamente...");
        // posiciona no campo de edição inVelPermitida
        inVelPermitida.focus();
        return;
    }

    if (velCondutor <= velPermitida) {
        outSituacao.textContent = "Situação: Sem Multa";
    } else {
        var maisVinte = velPermitida * 1.20;
        if (velCondutor <= maisVinte) {
            outSituacao.textContent = "Situação: Multa Leve";
        } else {
            outSituacao.textContent = "Situação: Multa Grave";
        }
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaVelocidade);


