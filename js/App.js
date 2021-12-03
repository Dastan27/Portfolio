$(document).ready(function() {
    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    let home = document.querySelector('.home-h');
    let about = document.querySelector('.about-h');
    let projects = document.querySelector('.projects-h');
    let skills = document.querySelector('.skills-h');
    let contact = document.querySelector('.contact-h');
    let cv = document.querySelector('.download-cv');
    let btn = document.querySelector('.contact-btn');


    hamberger.addEventListener('click', function() {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    home.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    about.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    projects.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    });

    skills.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    }); 

    contact.addEventListener('click', function() {
        mobileNav.classList.remove('open');
    }); 

    cv.addEventListener('click', function() {
        window.open("https://drive.google.com/file/d/1lk3Tk0ZvOqbHyGdwZ8qIWbhVkGTbdJp0/view?usp=sharing", '_blank');
    })

    btn.addEventListener('click', function() {
        window.open("#contact", '_top');
    })
    
})