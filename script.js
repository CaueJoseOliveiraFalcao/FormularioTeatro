/*Bandeiras*/
const Brasil = document.querySelector('.portugues')
const EstadosUnidos = document.querySelector('.ingles')
const Espanha = document.querySelector('.espanhol')

Brasil.addEventListener('click', () => {
    document.querySelector('.idioma-text').innerHTML = 'Idioma'
    document.querySelector('.Idioma-titulo').innerHTML = 'Gostaríamos de obter seu feedback em relação à experiência de conhecer nosso maior patrimônio histórico e cultural. Vamos lá?'
    document.querySelector('.form-titulo').innerHTML = 'Formulario'
    document.querySelector('.nome-form').innerHTML = 'Nome:'
    document.querySelector('.contato-form').innerHTML = 'Contato:'
    document.querySelector('.email-form').innerHTML = 'E-mail:'
    document.querySelector('.pais-form').innerHTML = 'País:'
    document.querySelector('.cidade-form').innerHTML = 'Cidade:'
    document.querySelector('.radio-titulo').innerHTML = 'Com relação ao Teatro Amazonas, avalie os seguintes tópicos:'
    document.querySelector('.cafe-idioma').innerHTML = 'Café:'
    const nodeList = document.querySelectorAll(".otimo");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = 'Otimo';
    }
    const bom = document.querySelectorAll(".Bom");
    for (let i = 0; i < bom.length; i++) {
        bom[i].innerHTML = 'Bombom';
    }
    document.querySelector('.nome-form').innerHTML = 'Nome:'
    document.querySelector('.nome-form').innerHTML = 'Nome:'
})

EstadosUnidos.addEventListener('click', () => {
    document.querySelector('.titulo-BR').innerHTML = 'espanha only'
})

Espanha.addEventListener('click', () => {
    console.log('es')
})