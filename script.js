function tempo() {

    let trabalho = parseInt(document.getElementById('trabalho').value, 10)
    let dormir = parseInt(document.getElementById('dormir').value, 10)
    let resto = document.getElementById('resto')

    let calc = 24 - (trabalho + dormir)

    resto.innerText = `Você tem ${calc} horas livres`
}

function dinheiro() {

    let salario = document.getElementById('salario').value.replace(/[^0-9]/g, '')
    trabalho = parseInt(document.getElementById('trabalho').value, 10)
    if (trabalho){}else{
        alert('Responda quantas horas você trabalha primeiro')
    }

    let hora = document.getElementById('hora')
    let minuto = document.getElementById('minuto')

    d = salario / 21
    
    h = Math.round(trabalho * 100) / 100
    m = Math.round((h / 60) * 1000) / 1000

    hora.innerText = `R$${h}`
    minuto.innerText = `R$${m}`
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