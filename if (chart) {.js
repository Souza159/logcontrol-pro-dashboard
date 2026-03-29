 if (chart) {
    chart.destroy();
  }
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
