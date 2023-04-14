const siteMenu = () => {

    
    const menuButton = document.querySelector('.menu__button')
    const siteMenu = document.querySelector('.site-menu')

    const toggleMenu = () => {
        
        menuButton.classList.toggle('menu__button--close');
        siteMenu.classList.toggle('site-menu--open')
    }

    
    menuButton.addEventListener('click', toggleMenu)

}

siteMenu()