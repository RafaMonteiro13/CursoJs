let numero = document.getElementById('txtnumero')
let lista = document.getElementById('flista')
var res = document.getElementById('res')
let valores = []

function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(numero, lista) {
    if (lista.indexOf(Number(numero) == -1)) {
        return false
    } else {
        return true
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)

    } else {
        alert('[Erro]Valor inválido ou já econtrado na lista!')
    }
    numero.value = ''
    numero.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados!</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos números é ${soma}</p>`
        res.innerHTML += `<p>A média é ${media}</p>`

    }
}