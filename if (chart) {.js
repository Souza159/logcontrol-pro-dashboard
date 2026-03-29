 if (chart) {
    chart.destroy();
  }
if (baixo.length > 0) {
  alerta.innerText = `⚠️ ${baixo.length} produto(s) com estoque baixo`;
} else {
  alerta.innerText = "✅ Estoque saudável";
document.getElementById("movimentacao").innerText =
  `Saída de ${qtd} unidades em ${nome}`;
document.getElementById("movimentacao").innerText =
  `Entrada de ${qtd} unidades em ${nome}`;
  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: produtos.map(p => p.nome),
      datasets: [{
        label: "Estoque",
        data: produtos.map(p => p.quantidade)
        document.getElementById("totalProdutos").innerText = produtos.length;

let baixo = produtos.filter(p => p.quantidade < 20);
document.getElementById("baixo").innerText = baixo.length;
      }]
    }
  });
}

atualizarTela();
