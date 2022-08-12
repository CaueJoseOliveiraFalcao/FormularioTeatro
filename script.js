/*Bandeiras*/
const Brasil = document.querySelector('.portugues')
const EstadosUnidos = document.querySelector('.ingles')
const Espanha = document.querySelector('.espanhol')

Brasil.addEventListener('click', () => {
    console.log('br')
})

EstadosUnidos.addEventListener('click', () => {
    document.querySelector('.titulo-BR').innerHTML = 'espanha only'
})

Espanha.addEventListener('click', () => {
    console.log('es')
})


document.querySelector('input').style.padding = ''