var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    // JS para navegação auto
    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();

        }, 4000);
    }
    repeater();
}

repeat();