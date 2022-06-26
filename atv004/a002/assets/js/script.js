var button = window.document.getElementById("button")
button.addEventListener("click", somar)

function somar() {
var inputOne = window.document.getElementById("inputOne")
var inputTwo = window.document.getElementById("inputTwo")
var resultado = window.document.getElementById("res")

var n1 = Number.parseFloat(inputOne.value)
var n2 = Number.parseFloat(inputTwo.value)

var s = n1 + n2

resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
}