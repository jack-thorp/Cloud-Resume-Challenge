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
        },2000)

        setTimeout(()=>{
            introPage.style.top='-100vh';
            buttonWrapper.style.display = 'flex'; 
        },2300)
    })
})