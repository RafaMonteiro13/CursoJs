function Gerar() {
    let numero = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        let contador = 1
        tab.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`
            item.value = `tab${contador}`
            tab.appendChild(item)
            contador++
        }
    }
}