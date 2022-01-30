function mostrarPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromocao = document.getElementById("outPromocao");
    var outTerceiroItem = document.getElementById("outTerceiroItem");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);
    
    var terceiroitem = preco * 0.50
    var promocao = preco + preco + terceiroitem;

    outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + promocao.toFixed(2);
    outTerceiroItem.textContent = "O 3º produto custa apenas R$: " + terceiroitem.toFixed(2);
}
var btVerPromocao = document.getElementById("btVerPromocao");
    btVerPromocao.addEventListener("click", mostrarPromocao);