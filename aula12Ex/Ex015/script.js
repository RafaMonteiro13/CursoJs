function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha2.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'tarde2.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'noite2.jpg'
        document.body.style.background = 'rgb(0, 0, 114)'
    }
}