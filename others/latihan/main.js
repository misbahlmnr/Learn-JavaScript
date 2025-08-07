const select = (el, all=false) => {
    el = el.trim()
    if ( all ) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

// pada saat tombol button di click
const btn = select('button'),
    input = select('input'),
    textarea = select('textarea'),
    scs = select('.alert-success'),
    ggl = select('.alert-gagal')

btn.addEventListener('click', function() {
    if (input.value === '' && textarea.value === '') {
        ggl.classList.add('active')
    } else {
        scs.classList.add('active')
    }
})