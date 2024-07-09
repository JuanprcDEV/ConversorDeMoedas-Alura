//Variáveis de moedas
var cotacaoDoDolar = 4.91;
var cotacaoDoEuro = 5.25;
var cotacaoDoBitcoin = 0.0000056;

//Alert de boas vindas
alert("Bem-vindo ao Conversor de Moedas!");

//Prompt de informação
var nome = prompt("Digite seu nome: ");
var valorParaConverter = prompt("Digite o valor para conversão: ");

//Verificação de número válido
if (isNaN(valorParaConverter)) {
  alert("Valor inválido! Por favor, digite um número.");
} else {
  //Cálculo das variáveis
  var valorEmDolar = valorParaConverter * cotacaoDoDolar;
  valorEmDolar = valorEmDolar.toFixed(2);

  var valorEmEuro = valorParaConverter * cotacaoDoEuro;
  valorEmEuro = valorEmEuro.toFixed(2);

  var valorEmBitcoin = valorParaConverter * cotacaoDoBitcoin;
  valorEmBitcoin = valorEmBitcoin.toFixed(5);
}

//Alert com os resultados
alert(nome + ", o valor convertido do DÓLAR para REAL é de R$ " + valorEmDolar);

alert(nome + ", o valor convertido do EURO para REAL é de R$ " + valorEmEuro);

alert(nome + ", o valor convertido do BITCOIN para REAL é de R$ " + valorEmBitcoin);