window.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.querySelector('.navigationButtons button:nth-child(1)');
    const aboutButton = document.querySelector('.navigationButtons button:nth-child(2)');
    const resumeButton = document.querySelector('.navigationButtons button:nth-child(3)');
    const aboutMeMainPic = document.getElementById('aboutMeMainPic');
    const stripPics = Array.from(document.getElementsByClassName('stripPic'));
    let isScrolled = false;
    let isMobileScreen = window.innerWidth <= 600;
    let wasMobileScreen = isMobileScreen;
    let carouselInterval;

    function updateButtonText() {
        if (window.innerWidth <= 600) {
            aboutButton.textContent = 'About';
        } else {
            aboutButton.textContent = 'About Me';
            aboutMeMainPic.classList.remove('enlarged');
            handleImageCarousel(false);
        }
    }

    function handleImageCarousel(shouldStart = true) {
        clearInterval(carouselInterval);
        if (!isMobileScreen) {
            stripPics.forEach(pic => {
                pic.style.display = 'block';
            });
        }
        if (isMobileScreen && shouldStart) {
            let currentIndex = 0;

            stripPics.slice(1).forEach(pic => {
                pic.style.display = 'none';
            });

            carouselInterval = setInterval(() => {
                stripPics[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % stripPics.length;
                stripPics[currentIndex].style.display = 'block';
            }, 3000);
        }
    }

    updateButtonText();
    handleImageCarousel();

    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;
        wasMobileScreen = isMobileScreen;
        isMobileScreen = currentWidth <= 600;

        updateButtonText();

        if (!wasMobileScreen && isMobileScreen) {
            handleImageCarousel();
        } else if (wasMobileScreen && !isMobileScreen) {
            handleImageCarousel(false);
        }
    });

    homeButton.addEventListener('click', () => {
        window.location.href = 'Landing Page.html';
    });

    aboutButton.addEventListener('click', () => {
        window.location.href = 'About Me.html';
    });

    resumeButton.addEventListener('click', () => {
        window.location.href = 'Resume Page.html';
    });

    window.addEventListener('scroll', function () {
        const distanceFromTop = aboutMeMainPic.getBoundingClientRect().top;

        if (distanceFromTop < window.innerHeight * 0.5 && !isScrolled) {
            aboutMeMainPic.classList.add('enlarged');
            isScrolled = true;
        } else if (distanceFromTop >= window.innerHeight * 0.5 && isScrolled) {
            aboutMeMainPic.classList.remove('enlarged');
            isScrolled = false;
        }

        if (window.scrollY === 0) {
            aboutMeMainPic.classList.remove('enlarged');
            isScrolled = false;
        }
    });
});
