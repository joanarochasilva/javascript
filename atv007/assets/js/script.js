var verificar = window.document.getElementById("BTN_VER")
verificar.addEventListener("click", nacionalidade)

function nacionalidade() {
  var txtnacio = window.document.getElementById("TXT_NACIO")
  var resposta = window.document.getElementById("RES")
  var pais = txtnacio.value

  resposta.innerHTML = `Você é do(a) ${pais} .`

  if (pais == "Brasil" ||
      pais == "brasil" ||
      pais == "Brazil" ||
      pais == "brazil") {
        resposta.innerHTML += `<p>Você é <strong>brasileiro(a)</strong>!</p>`
      } else {
        resposta.innerHTML += `<p>Você é <strong>estrangeiro</strong>!</p>`
      }
}