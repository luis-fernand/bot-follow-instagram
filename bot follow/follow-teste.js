let contador = 0
let buttons = document.querySelectorAll('.L3NKy')
do {
    buttons.forEach((botao, index) => {
    setTimeout(() => {
        if(!botao.classList.contains('_8A5w5')){
            botao.click()
            contador++
            console.log(`Já seguiu ${contador} pessoas.`)
        } else {
            console.log('Você já segue essa pessoa.')
        }
    }, index * (Math.floor(Math.random() * 20000) + 1000)); 
    }) 
} while (contador < 3)
