var btn = document.getElementById("BTN_CONTAGEM")
btn.addEventListener("click", contagem)

function contagem() {

  var primeiroNumero = document.getElementById("FIRST_NUMBER")
  var ultimoNumero = document.getElementById("LAST_NUMBER")
  var passo = document.getElementById("PASSO")
  var res = document.getElementById("RESPOSTA")

  if(primeiroNumero.value.length == 0 || ultimoNumero.value.length == 0 || passo.value.length == 0) {
    window.alert(`[ERRO] Faltam dados!`)
  } else if(primeiroNumero.value == 0 || ultimoNumero.value == 0 || passo.value == 0) {
    window.alert(`[ERRO] Impossivel contar! Adicione valores diferentes de 0.`)
  } else {
    res.innerHTML = `Contando: `
    var i = Number(primeiroNumero.value)
    var f = Number(ultimoNumero.value)
    var p = Number(passo.value)

    for(var c = i; c <= f; c += p) {
      res.innerHTML += `${c} \u{1F449} `
    } 
    res.innerHTML += `\u{1F6A9}`   
  }
}