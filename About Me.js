window.addEventListener('DOMContentLoaded', (event) => {
    const homeButton = document.querySelector('.navigationButtons button:nth-child(1)');
    const aboutButton = document.querySelector('.navigationButtons button:nth-child(2)');
    const resumeButton = document.querySelector('.navigationButtons button:nth-child(3)');

    function updateButtonText() {
        if (window.innerWidth <= 600) {
            aboutButton.textContent = 'About';
        } else {
            aboutButton.textContent = 'About Me';
        }
    }
    updateButtonText();
    window.addEventListener('resize', updateButtonText);

    
    homeButton.addEventListener('click', () => {
        window.location.href = 'Landing Page.html';
    });

    // Handle About button click
    aboutButton.addEventListener('click', () => {
        window.location.href = 'About Me.html';
    });

    // Handle Resume button click
    resumeButton.addEventListener('click', () => {
        window.location.href = 'Resume Page.html';
    });
});

var aboutMeMainPic = document.getElementById('aboutMeMainPic');
var isScrolled = false;

window.addEventListener('scroll', function () {
    var distanceFromTop = aboutMeMainPic.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight * 0.5 && !isScrolled) {
        aboutMeMainPic.classList.add('enlarged');
        isScrolled = true;
    } else if (distanceFromTop >= window.innerHeight * 0.5 && isScrolled) {
        aboutMeMainPic.classList.remove('enlarged');
        isScrolled = false;
    }
});
