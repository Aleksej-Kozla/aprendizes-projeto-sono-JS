function tempo() {

    let trabalho = parseInt(document.getElementById('trabalho').value, 10)
    let dormir = parseInt(document.getElementById('dormir').value, 10)
    let resto = document.getElementById('resto')

    let calc = 24 - (trabalho + dormir)

    resto.innerText = `Seu tempo livre é ${calc} horas`
}

function dinheiro() {

    let salario = document.getElementById('salario').value
    let minuto = document.getElementById('minuto')
    let hora = document.getElementById('hora')

    d = parseInt(salario.value, 10) / 21
    h = Math.round((d / parseInt(trabalho.value, 10)) * 100) / 100
    m = Math.round((h / 60) * 1000) / 1000

    hora.innerText = h
    minuto.innerText = m
}

function dormir(){
    inicio = document.getElementById('dormiu').value.split(':')

    h = parseInt(inicio[0]) + 7
    m = parseInt(inicio[1]) + 40

    if(m >= 60){
        h +=1
        m -=60
        if (m <= 9){
            m = '0' + m
        }
    }
    if(h > 23){
        h -= 24
    }

    resultado = `Você precisa acordar as ${h}:${m} da ${(h < 11) ? 'manha' : (h < 18)? 'tarde':'noite'}`
    document.getElementById('acordou').innerText = resultado

    let dormir = parseInt(document.getElementById('dormir').value)
    // 0 ... 24

    resto = dormir - 8

    let e = document.getElementById('recomendacao')

    if (resto == 0 ){
        e.innerText = `Você pode dormir 20 minuto a menos`
    }else if ( resto < 0 ){
        e.innerText = `Você precisa dormir ${Math.abs(resto)}:40 hs a mais`
    }else if (resto > 0 ){
        e.innerText = `Você pode dormir ${resto}:20 hs a menos`
    }
}