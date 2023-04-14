const showHideHeader = () => {

    var doc = document.documentElement;
    var w = window;

    var curScroll = prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('site-header');

    const checkScroll = () => {

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) { 
        //scrolled up
        direction = 2;
        }
        else if (curScroll < prevScroll) { 
        //scrolled down
        direction = 1;
        }

        if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
        }
        
        prevScroll = curScroll;
    };

    const toggleHeader = (direction, curScroll) => {

        if (direction === 2 && curScroll > 100) { 

        header.classList.add('site-header--hide');
        prevDirection = direction;
        }
        else if (direction === 1) {
        header.classList.remove('site-header--hide');
        prevDirection = direction;
        }
    };
  
  window.addEventListener('scroll', checkScroll);

}

showHideHeader()




