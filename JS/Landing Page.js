/*Splash Page Animation*/
let introPage = document.querySelector('.introPage');
let introWrapper = document.querySelector('.introWrapper');
let intro = document.querySelectorAll('.intro');
let buttonWrapper = document.querySelector('.buttonWrapper');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        intro.forEach((intro, index)=>{
            setTimeout(()=>{
                intro.classList.add('active');
            }, (index + 1)*400)
        });

        setTimeout(()=>{
            intro.forEach((intro, index)=>{
                setTimeout(()=>{
                    intro.classList.remove('active');
                    intro.classList.add('fade');
                })
            })
        },2000);

        setTimeout(()=>{
            introPage.style.top='-100vh';
            buttonWrapper.style.display = 'flex'; 
        },2300);
    });

    const resumeButton = document.querySelector('.resumeButton');
    resumeButton.addEventListener('click', () => {
        window.location.href = 'Resume Page.html';
    });

    const aboutMeButton = document.querySelector('.aboutMeButton');
    aboutMeButton.addEventListener('click', () => {
        window.location.href = 'About Me.html';
    });

    const projectButton = document.querySelector('.projectButton');
    projectButton.addEventListener('click', () => {
        window.location.href = 'Project Page.html';
    });
});

/*Visitor Counter*/
async function updateCounter() {
    if (!sessionStorage.getItem('hasViewedSite')) {
        let response = await fetch("https://xew2z5uph3byqfccrsitxi4gzu0ljhjh.lambda-url.us-east-1.on.aws/");
        sessionStorage.setItem('hasViewedSite','true')
    }
}
updateCounter();