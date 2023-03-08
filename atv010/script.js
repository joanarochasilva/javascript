var botao = document.getElementById("btn")
botao.addEventListener("click", verificar)

function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById("txtano")
  var res = document.getElementById("res")

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(`ERRO! Verifique os dados e tente novamente`)
  } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(fano.value)
    var genero = ""
    //Cria uma tag img a partir do Javascript
    // var img = document.creatElement("img")
    //Cria um id = "foto" na tag criada acima
    // img.setAttribute("id", "foto") 

    var imagem = document.getElementById("img")

    //Se for marcado o sexo masculino
    if (fsex[0].checked && idade < 2) {
      genero = "um bebê"
      imagem.innerHTML =`<img src="img/bebe.png" alt="foto de um bebê acordando">`
    } else if(fsex[0].checked && idade < 12) {
      genero ="um menino"
      imagem.innerHTML =`<img src="img/menino.png" alt="foto de um menino">`
    } else if(fsex[0].checked && idade < 18){
      genero = "um homem adolescente"
      imagem.innerHTML =`<img src="img/menino-adolescente.png" alt="foto de um menino adolescente">`
    } else if(fsex[0].checked && idade < 30){
      genero = "um homem jovem adulto"
      imagem.innerHTML =`<img src="img/jovem-adulto.png" alt="foto de um jovem adulto">`
    } else if(fsex[0].checked && idade < 65) {
      genero = "um homem adulto"
      imagem.innerHTML =`<img src="img/adulto.png" alt="foto de um homem adulto">`
    } else if(fsex[0].checked && idade >= 65){
      genero = "um homem idoso"
      imagem.innerHTML =`<img src="img/homem-idoso.png" alt="foto de um homem idoso">`
    //Se for marcado o sexo feminino
    } else if (fsex[1].checked && idade < 2) {
      genero = "um bebê"
      imagem.innerHTML =`<img src="img/bebe.png" alt="">`
    }else if (fsex[1].checked && idade < 12) {
      genero = "uma menina"
      imagem.innerHTML =`<img src="img/menina.png" alt="foto de uma menina">`
    }else if (fsex[1].checked && idade < 18) {
      genero = "uma mulher adolescente"
      imagem.innerHTML =`<img src="img/menina-adolescente.png" alt="foto de uma menina adolescente">`
    }else if (fsex[1].checked && idade < 30) {
      genero = "uma mulher jovem adulta"
      imagem.innerHTML =`<img src="img/jovem-adulta.png" alt="foto de uma jovem adulta">`
    }else if (fsex[1].checked && idade < 65) {
      genero = "uma mulher adulta"
      imagem.innerHTML =`<img src="img/adulta.png" alt="foto de uma mulher adulta">`
    }else {
      genero = "uma idosa"
      imagem.innerHTML =`<img src="img/mulher-idosa.png" alt="foto de uma mulher idosa">`
    }
    res.style.textAlign = "center"
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    // res.appendChild(img)
  }
}
