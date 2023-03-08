let btn = document.getElementById("BTN_TABUADA")
btn.addEventListener("click", tabuada)

function tabuada() {
  let numero = document.getElementById("TXT_NUMBER")
  let tab = document.getElementById("SEL_TAB")

  if(numero.value.length == 0) {
    window.alert("Defina sua tabuada! Para isso, por favor, digite um numero abaixo.")
  } else {
    let n = Number(numero.value)
    tab.innerHTML = ""
    for (let i = 0; i <= 10; i++) {
      let r = n * i
      tab.innerHTML += `<option>${n} X ${i} = ${r}</option>`
      // let item = document.createElement(option)
      // item.text = `${n} X ${i} = ${r} `
      // item.value = `tab${i}`
      // tab.appendChild(item)
    }
  }
}