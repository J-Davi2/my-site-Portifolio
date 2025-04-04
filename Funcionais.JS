document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('.efeito-digite', {
        speed: 150,
        loop: true
    })
    .type('Python.', {delay: 700}).delete(7)
    .type('Pandas.', {delay: 700}).delete(7)
    .type('Scikit Learn.', {delay: 700}).delete(13)
    .type('Prompt Engineering.', {delay: 700}).delete(19)
    .type('JavaScript.', {delay: 700}).delete(16)
    .go()
}) //efeito de digitacão da parte principal 

let btnmenu = document.querySelector('.abrir-menu')
let menu = document.querySelector('.mobile-menu')
let overlay = document.querySelector('.overlay-menu')


btnmenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu') //Faz o menu abrir 
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu') // faz o  menu fechar se tocar em alguma parte dentro da área
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu') //faz o menu ffecahr se tocar em alguma parte fora da área
})