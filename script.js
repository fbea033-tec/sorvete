// Preço fixo do sorvete
const precoSorvete = 5.90;

// Preço de cada adicional
const precoAdicional = 2.00;

// Lista de sabores disponíveis
let sabores = ["Chocolate", "Morango", "Baunilha", "Limão"];

// Lista de adicionais disponíveis
let adicionais = ["Farofa doce", "Paçoca", "Calda de caramelo", "Bolacha de chocolate"];

// Solicita ao cliente o sabor
let saborEscolhido = prompt("Escolha um sabor de sorvete:\n1 - Chocolate\n2 - Morango\n3 - Baunilha\n4 - Limão");
saborEscolhido = sabores[parseInt(saborEscolhido) - 1];

// Solicita se deseja adicionais
let adicionaisEscolhidos = [];
for (let i = 0; i < 2; i++) {
  let resposta = prompt(`Deseja incluir um adicional? (S/N)\nOpções: 1 - Farofa doce, 2 - Paçoca, 3 - Calda de caramelo, 4 - Bolacha de chocolate`);
  if (resposta.toUpperCase() === "S") {
    let opcao = prompt("Digite o número do adicional:");
    adicionaisEscolhidos.push(adicionais[parseInt(opcao) - 1]);
  }
}

// Calcula o valor final
let valorFinal = precoSorvete + (adicionaisEscolhidos.length * precoAdicional);

// Exibe o resumo do pedido
alert(`Resumo do pedido:\nSabor: ${saborEscolhido}\nAdicionais: ${adicionaisEscolhidos.join(", ") || "Nenhum"}\nValor a pagar: R$${valorFinal.toFixed(2)}`);
