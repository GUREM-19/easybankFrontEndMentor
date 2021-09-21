const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const body  = document.querySelector('body');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(header.classList.contains('open')){ //Close Hamburger menu
        header.classList.remove('open');
        body.classList.remove('noscroll')
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        

    }
    else{
        header.classList.add('open'); //Open Hamburger menu
        body.classList.add('noscroll')
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});

