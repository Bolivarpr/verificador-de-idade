function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=15 && idade < 20){
                // Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=15 && idade < 20){
                // Jovem
                img.setAttribute('src', 'jovem-mulher.png')
            } else if (idade >= 20 && idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-mulher.png')
            } else {
                // Idosa
                img.setAttribute('src', 'velha.png')
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}