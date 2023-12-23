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
