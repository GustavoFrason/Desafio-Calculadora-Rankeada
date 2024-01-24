const readline = require('readline');

// Cria uma interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular saldo e obter o nível
function calcularNivel(nome, vitorias, derrotas) {
  // Converte as entradas para números inteiros
  vitorias = parseInt(vitorias);
  derrotas = parseInt(derrotas);

  // Verifica se as entradas são números válidos
  if (!isNaN(vitorias) && !isNaN(derrotas)) {
    // Calcula o saldo (vitórias - derrotas)
    const saldo = vitorias - derrotas;

    // Verifica o nível com base no saldo
    if (saldo < 10) {
      return `O Herói ${nome} tem saldo de ${saldo} e é de nível Ferro`;
    } 
    else if (saldo < 20) {
      return `O Herói ${nome} tem saldo de ${saldo}é de nível Bronze`;
    } 
    else if (saldo < 50) {
      return `O Herói ${nome} tem saldo de ${saldo} é de nível Prata`;
    } 
    else if (saldo < 80) {
      return `O Herói ${nome} tem saldo de ${saldo} é de nível Ouro`;
    } 
    else if (saldo < 90) {
      return `O Herói ${nome} tem saldo de ${saldo} é de nível Diamante`;
    } 
    else if (saldo < 100) {
      return `O Herói ${nome} tem saldo de ${saldo} é de nível Lendário`;
    } 
    else {
      return `O Herói ${nome} tem saldo de ${saldo} é de nível Imortal`;
    }
  } else {
    // Retorna uma mensagem de erro se as entradas não forem válidas
    return "Por favor, forneça valores numéricos válidos para vitórias e derrotas.";
  }
}

// Chamada da função
rl.question("Informe o nome do herói: ", function(nome) {
  rl.question("Informe o número de vitórias: ", function(vitorias) {
    rl.question("Informe o número de derrotas: ", function(derrotas) {
      const nivel = calcularNivel(nome, vitorias, derrotas);
      console.log(nivel);

      // Fecha a interface de leitura
      rl.close();
    });
  });
});
