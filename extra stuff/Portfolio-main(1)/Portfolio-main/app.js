////////////////// Heading Text animation /////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
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