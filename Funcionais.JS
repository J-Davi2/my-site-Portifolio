document.addEventListener('DOMContentLoaded', () => {

    new TypeIt('.efeito-digite', {
        speed: 150,
        loop: true
    })
    .type('Web development.', {delay: 700}).delete(13)
    .type(': HTML e CSS.', {delay: 700}).delete(12)
    .type(' JavaScript.', {delay: 700}).delete(16)
    .type('Python development.', {delay: 700}).delete(19)
    .type('Cybersecurity.', {delay: 700}).delete(14)
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