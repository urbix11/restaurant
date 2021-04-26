const navBtn = document.querySelector('.nav__btn')
const nav = document.querySelector('.nav__wrap')
const allNavItems = document.querySelectorAll('.nav__item')
const shadow = document.querySelector('.shadow')
const allSections = document.querySelectorAll('.section')
const navLogoIcon = document.querySelector('.nav__logo--desktop')

//wysuwanie menu
const showNav = () => {
    nav.classList.toggle('nav__wrap--active')

    navBtn.classList.toggle('active')

    const currentSection = window.scrollY

    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
            if (navBtn.classList.contains('active')) {
                navBtn.classList.remove('dark')
            } else {
                navBtn.classList.add('dark')
            }
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
            navBtn.classList.remove('dark')
        }
    })


    shadow.classList.toggle('shadow--on')


    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav__wrap--active')
            shadow.classList.remove('shadow--on')
            navBtn.classList.remove('active')

        })
    })


}
navBtn.addEventListener('click', showNav)



// zamykanie menu po kliknięciu w cokolwiek
const closeMenu = e => {
    if (!nav.contains(e.target) && (!navBtn.contains(e.target))) {
        nav.classList.remove('nav__wrap--active')
        shadow.classList.remove('shadow--on')
        navBtn.classList.remove('active')
        navBtn.classList.add('dark')


        const currentSection = window.scrollY;

        allSections.forEach(section => {
            if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
                navBtn.classList.add('dark')
            } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
                navBtn.classList.remove('dark')
            }
        })
    }
}

//zmiana koloru przycisku i logo
const changeIconColor = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
            navLogoIcon.src = "../assets/icons/coffee-dark.svg"
            if (navBtn.classList.contains('active')) {
                navBtn.classList.remove('dark')
            } else {
                navBtn.classList.add('dark')
            }

        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
            navLogoIcon.src = "../assets/icons/coffee.svg"
            navBtn.classList.remove('dark')
        }
    })

}

//zmiana kolorów icon od 1024px
const ShowDesktopIcon = x => {
    if (x.matches) {
        navBtn.classList.add('white')
    } else {
        navBtn.classList.remove('white')
        window.addEventListener('click', closeMenu)
        window.addEventListener('scroll', changeIconColor)
    }
}

const x = window.matchMedia("(max-width: 1024px)")
ShowDesktopIcon(x)
x.addListener(ShowDesktopIcon)