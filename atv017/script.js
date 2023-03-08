//Variáveis para os botões 
let adcBtn = document.getElementById("ADICIONAR")
let anlBtn = document.getElementById("ANALISAR")
//Listener para os botões
adcBtn.addEventListener("click", adicionar)
anlBtn.addEventListener("click", analisar)

//Variáveis globais para as funções
let numero = document.getElementById("NUM_TXT")
let res = document.getElementById("RES")
let listTab = document.getElementById("VISUAL_NUM")
let valores = []

//Função de validação do intervalo adicionar
function isNumero(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else  {
    return false
  }
}

//Função de validação para valores não repetidos
function inLista(n, l) {
  //se o valor não estiver presente, true.
  //se o valor estiver presente, false.
  if(l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}
//Função para adição de valores a lista
function adicionar() {
  if(isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value))
    listTab.innerHTML += `<option>O número ${numero.value} foi adicionado.</option>`
  } else {
    window.alert(`Valor inválido ou já adicionado. Tente novamente!`)
  }
  //Apaga a adição anterior do input
  numero.value = ""
  //faz o mouse continuar no input depois da adição, não precisando clicar novamente
  numero.focus()
}

//Função para análise da lista
function analisar() {
  if(valores.length == 0) {
  //Validação da existância de valores na lista
  window.alert("Impossível analisar por falta de dados! Adicione valores acima.")
  } else {
  //colocando os números do array em ordem
  //Lembrar da função de implementação
  valores.sort(function(a,b) {return a - b})
  //Escrevendo as tags de acordo com a posição no array ordenado
  res.innerHTML = ""
  res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
  res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}.</p>`
  res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`
  //fazendo a soma dos valores
  let soma = 0
  for(let cont in valores) {
    soma += valores[cont]
  }
  //estabelecendo a média dos valores
  let media = soma/(valores.length)
  //escrevendo as tags finais com a soma e média
  res.innerHTML += `<p>A soma dos valores é  ${soma}.</p>`
  res.innerHTML += `<p>A média dos valores é ${media}.</p>`
  }
  
}