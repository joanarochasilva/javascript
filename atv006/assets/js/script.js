var clicar = window.document.getElementById("clicar")
clicar.addEventListener("click", calcular)

function calcular() {

  var txtv = window.document.getElementById("txtvel")
  var res = window.document.getElementById("res")
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`
  if (vel > 60) {
    res.innerHTML += `<p>você está <strong>MULTADO</strong> por excesso de velocidade</p>`
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
