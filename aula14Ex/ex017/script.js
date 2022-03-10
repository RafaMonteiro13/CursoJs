function contar() {
    let inicio = document.getElementById('ninicio')
    let fim = document.getElementById('nfim')
    let passo = document.getElementById('npasso')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando : <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            alert('Passo Inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            for (var contador = i; contador <= f; contador += p) {
                res.innerHTML += ` ${contador}  \u{1F449}`
            }
        } else {
            for (var contador = i; contador >= f; contador -= p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}