const box = document.querySelector('.box')
const body = document.querySelector('body')
const section = document.querySelector('section')
const pre = document.querySelector('.pre')
const loc = document.querySelector('.loc')
const clock = document.querySelector('.clock')
const text = document.querySelector('.text_key')

section.style.display = 'none'
text.style.display = 'none'

document.addEventListener('keyup', (e) => {
    box.style.display = 'none'
    section.style.display = 'flex'
    text.style.display = 'block'
    console.log(e);

    pre.innerHTML = `<h1>${e.code}</h1>`
    clock.innerHTML = `<h1>${e.key}</h1>`
    loc.innerHTML = `<h1>${e.which}</h1>`
})