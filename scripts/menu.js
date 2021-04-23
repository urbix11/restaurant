const menuItems = document.querySelectorAll('.dishes')
const btnTitle = document.querySelectorAll('.menu__tile-title')
const btnTitleHover = document.querySelectorAll('.menu__tile-title--hover')
const btnImage = document.querySelector('.menu__tile-image')

const showDishes = id => {
    menuItems.forEach(item => item.style.display = 'none')
    btnTitle.forEach(title => title.classList.remove('menu__tile-title--active'))
    btnTitle.forEach(title => title.classList.add('menu__tile-title'))
    btnTitleHover.forEach(item => item.style.display = 'block')

    const currentFirstButton = document.querySelector(`[data-id=sweet]`)
    currentFirstButton.classList.remove('menu__tile-title--active')
    currentFirstButton.classList.add('menu__tile-title')

    document.getElementById(id).style.display = 'flex'

    const currentActiveButton = document.querySelector(`[data-id=${id}]`)
    currentActiveButton.classList.add('menu__tile-title--active')
    currentActiveButton.classList.remove('menu__tile-title')

    const currentActiveButtonHover = document.querySelector(`[data-id-hover=${id}]`)
    currentActiveButtonHover.style.display = "none"

}