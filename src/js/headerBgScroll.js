const headerBgScroll = () => {

    const header = document.querySelector('.site-header')

    const toggleHeaderClass = () => {
        
        if ( window.scrollY > 200 ) {

            header.classList.add('site-header--bg-scroll')

        } else {

            header.classList.remove('site-header--bg-scroll')
        }

    }

    window.addEventListener('scroll', toggleHeaderClass)

}

headerBgScroll()