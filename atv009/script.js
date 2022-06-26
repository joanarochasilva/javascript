//Definindo hora e minutos
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

//Colocando no formato HH:MM
hora < 10 ? hora = "0" + hora : hora = hora
minutos < 10 ? minutos = "0" + minutos : minutos = minutos

//Adicionando as horas e minutos no h2
var horaAtual = window.document.querySelector("h2")
horaAtual.innerHTML = `Agora são ${hora}:${minutos} h`

 //Configurando as imagens e fundo pela faixa do dia
if (hora < 12) {
  img.src = "imagens/manha.png"
  document.body.style.backgroundImage = "linear-gradient(to left, #FF8868 , #CF867B, #B08181, #AC898A)"
} else if(hora < 18) {
  img.src = "imagens/tarde.png"
  document.body.style.backgroundImage = "linear-gradient(to left, #8FA4BD , #7F93AC, #798DAA, #6A7E99)"
} else {
  img.src = "imagens/noite.png"
  document.body.style.backgroundColor = "#06172C"
}

