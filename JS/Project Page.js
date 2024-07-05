document.addEventListener('DOMContentLoaded', function () {
    // Navigation buttons
    const homeButton = document.querySelector('.navigationButtons button:nth-child(1)');
    const aboutButton = document.querySelector('.navigationButtons button:nth-child(2)');
    const resumeButton = document.querySelector('.navigationButtons button:nth-child(3)');
    const projectsButton = document.querySelector('.navigationButtons button:nth-child(4)');

    // Mobile Menu
    const mobileMenu = document.querySelector('.mobileMenu');
    const homeButtonMobile = document.querySelector('.homeButton');
    const aboutButtonMobile = document.querySelector('.aboutMeButton');
    const resumeButtonMobile = document.querySelector('.resumeButton');
    const projectsButtonMobile = document.querySelector('.projectButton');

    //Projects
    const cloudResumeChallenge = document.querySelector('.CloudResumeChallenge');


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

    // Add event listeners for mobile menu button
    mobileMenu.addEventListener('click',function(){
        if(mobileMenu.src.indexOf('hamburger') > 0 ){
            mobileMenu.src = "images/x icon.png"
            const mobileNavContainer = document.querySelector('.overlayMobileNavContainer');
            const body = document.body;
            mobileNavContainer.style.display = 'Flex';
            body.classList.add('no-scroll');
        }
        else {
            mobileMenu.src = "images/hamburger-menu.png"
            const mobileNavContainer = document.querySelector('.overlayMobileNavContainer');
            const body = document.body;
            mobileNavContainer.style.display = 'None';
            body.classList.remove('no-scroll');
        }
    });

    homeButtonMobile.addEventListener('click', function () {
        window.location.href = 'LandingPage.html';
    });

    aboutButtonMobile.addEventListener('click', function () {
        window.location.href = 'About Me.html';
    });

    resumeButtonMobile.addEventListener('click', function () {
        window.location.href = 'Resume Page.html';
    });

    projectsButtonMobile.addEventListener('click', function () {
        window.location.href = 'Project Page.html';
    });

    //Add Event Listener to Project Pages
    cloudResumeChallenge.addEventListener('click', function () {
        window.location.href = 'project-cloudResumeChallenge.html';
    });
});
