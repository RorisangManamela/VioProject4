// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

////////////////// Heading Text animation /////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showTitle');
        } else {
            entry.target.classList.remove('showTitle');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenTitle');
hiddenElements.forEach((el) => observer.observe(el));


////////////////// Tech icons animation (Left) /////////////////

const observerIconLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showniconLeft');
        } 
        /*else {
            entry.target.classList.remove('showniconLeft');
        }*/
    });
});

const hiddenElementsIconLeft = document.querySelectorAll('.hiddeniconLeft');
hiddenElementsIconLeft.forEach((el) => observerIconLeft.observe(el));

////////////////// Tech icons animation (Right) /////////////////

const observerIconRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showniconRight');
        } 
        /*else {
            entry.target.classList.remove('showniconRight');
        }*/
    });
});

const hiddenElementsIconRight = document.querySelectorAll('.hiddeniconRight');
hiddenElementsIconRight.forEach((el) => observerIconRight.observe(el));

////////////////// Intro animation  /////////////////

const observerIntro = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showIntro');
        } 
        else {
            entry.target.classList.remove('showIntro');
        }
    });
});

const hiddenElementsIntro= document.querySelectorAll('.hiddenIntro');
hiddenElementsIntro.forEach((el) => observerIntro.observe(el));

////////////////// Custom cursor /////////////////

const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // Update the cursor position using CSS variables
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});