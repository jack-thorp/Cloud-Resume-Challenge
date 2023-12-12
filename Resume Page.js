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
        console.log('Navigating to Home Page');
    });

    // Handle About button click
    aboutButton.addEventListener('click', () => {
        window.location.href = 'Resume Page.html';
        console.log('About button clicked');
    });

    // Handle Resume button click
    resumeButton.addEventListener('click', () => {
        window.location.href = 'Landing Page.html';
        console.log('Resume button clicked');
    });
});
