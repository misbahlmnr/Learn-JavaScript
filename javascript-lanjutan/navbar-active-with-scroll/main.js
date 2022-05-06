const select = function (el, all = false) {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
}


const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
}

/*
    navbar active with scroll
*/
let list = select('.list__item', true);
const navbarLinkActive = () => {
    let position = window.scrollY + 200
    list.forEach(lis => {
        if (!lis.hash) return
        let section = select(lis.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            lis.classList.add('active')
        } else {
            lis.classList.remove('active')
        }
        console.log(section.offsetHeight);
    });
}

window.addEventListener('load', navbarLinkActive)
onscroll(document, navbarLinkActive);