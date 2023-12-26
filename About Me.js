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
            // If transitioning from mobile to desktop, reset the picture container
            aboutMeMainPic.classList.remove('enlarged');
            handleImageCarousel(false); // Stop the carousel on desktop
        }
    }

    function handleImageCarousel(shouldStart = true) {
        // Clear the existing interval to avoid multiple instances
        clearInterval(carouselInterval);

        // Ensure all three images are displayed when going from mobile to desktop
        if (!isMobileScreen) {
            stripPics.forEach(pic => {
                pic.style.display = 'block';
            });
        }

        // Only enable picture carousel on mobile view
        if (isMobileScreen && shouldStart) {
            let currentIndex = 0;

            carouselInterval = setInterval(() => {
                stripPics[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % stripPics.length;
                stripPics[currentIndex].style.display = 'block';
            }, 3000); // Adjust the interval (in milliseconds) as needed
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
            // If transitioning from desktop to mobile, start the carousel
            handleImageCarousel();
        } else if (wasMobileScreen && !isMobileScreen) {
            // If transitioning from mobile to desktop, reset the picture container and stop the carousel
            aboutMeMainPic.classList.remove('enlarged');
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
