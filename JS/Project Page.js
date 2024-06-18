document.addEventListener('DOMContentLoaded', function () {
    // Navigation buttons
    const homeButton = document.querySelector('.navigationButtons button:nth-child(1)');
    const aboutButton = document.querySelector('.navigationButtons button:nth-child(2)');
    const resumeButton = document.querySelector('.navigationButtons button:nth-child(3)');
    const projectsButton = document.querySelector('.navigationButtons button:nth-child(4)');

    function updateButtonText() {
        if (window.innerWidth <= 600) {
            aboutButton.textContent = 'About';
        } else {
            aboutButton.textContent = 'About Me';
        }
    }

    updateButtonText();
    window.addEventListener('resize', updateButtonText);

    // Add event listeners for navigation buttons
    homeButton.addEventListener('click', function () {
        window.location.href = 'LandingPage.html';
    });

    aboutButton.addEventListener('click', function () {
        window.location.href = 'About Me.html';
    });

    resumeButton.addEventListener('click', function () {
        window.location.href = 'Resume Page.html';
    });

    projectsButton.addEventListener('click', function () {
        window.location.href = 'Project Page.html';
    });

});
