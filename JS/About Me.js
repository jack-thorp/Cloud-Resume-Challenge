window.addEventListener('DOMContentLoaded', (event) => {
//initalize variables and listeners on screen load
    const homeButton = document.querySelector('.navigationButtons button:nth-child(1)');
    const aboutButton = document.querySelector('.navigationButtons button:nth-child(2)');
    const resumeButton = document.querySelector('.navigationButtons button:nth-child(3)');
    const projectsButton = document.querySelector('.navigationButtons button:nth-child(4)');

    const aboutMeMainPic = document.getElementById('aboutMeMainPic');
    const stripPics = Array.from(document.getElementsByClassName('stripPic'));
    let isScrolled = false;
    let isMobileScreen = window.innerWidth <= 600;
    let wasMobileScreen = isMobileScreen;
    let carouselInterval;
    //on screen load, check the size of screen to adjust about me text and image container
    updateButtonText();
    handleImageCarousel();

//adding button links
    homeButton.addEventListener('click', () => {
        window.location.href = 'LandingPage.html';
    });

    aboutButton.addEventListener('click', () => {
        window.location.href = 'About Me.html';
    });

    resumeButton.addEventListener('click', () => {
        window.location.href = 'Resume Page.html';
    });

    projectsButton.addEventListener('click', () => {
        window.location.href = 'Project Page.html';
    });

//create function
    //function updates the text to be 'about' or 'about me'
    function updateButtonText() {
        if (window.innerWidth <= 600) {
            aboutButton.textContent = 'About';
        } else {
            aboutButton.textContent = 'About Me';
            aboutMeMainPic.classList.remove('enlarged');
            handleImageCarousel(false);
        }
    }

    //fucntion to keep photo strip or display one image that rotates
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

//add event listeners
    //adds enlarge/minimzie effect to main pic when scrolling up/down
    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;
        wasMobileScreen = isMobileScreen;
        isMobileScreen = currentWidth <= 600;

        updateButtonText();

        //update photostrip piece when changing screen size
        if (!wasMobileScreen && isMobileScreen) {
            handleImageCarousel();
        } else if (wasMobileScreen && !isMobileScreen) {
            handleImageCarousel(false);
        }
    });
    
     //adds enlarge/minimzie effect to main pic when scrolling up/down
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
