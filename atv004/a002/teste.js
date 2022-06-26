function investimento (valorInvestimento, valorDoIvestimento, quantidadeIvestidores) {
  let risco = ((valorInvestimento + valorDoIvestimento) / quantidadeIvestidores)
  let altoRisco = risco * 5

  if (risco == altoRisco) {
    return "alto risco"
  } else if (risco <= valorDoIvestimento) {
    return "baixo risco"
  } else {
    return "médio risco"
  }
}

investimento (300, 500, 1000)