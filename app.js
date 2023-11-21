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

////////////////// Parallax enter animation (Left) /////////////////

const observerParallaxLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('motionContainerShown');
        } 
        /*else {
            entry.target.classList.remove('showniconLeft');
        }*/
    });
});

const hiddenElementsParallaxLeft = document.querySelectorAll('.motionContainerHidden');
hiddenElementsParallaxLeft.forEach((el) => observerParallaxLeft.observe(el));

////////////////// Motion comic enter animation (Right) /////////////////

const observerMotionLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('parallaxContainerShown');
        } 
        /*else {
            entry.target.classList.remove('showniconLeft');
        }*/
    });
});

const hiddenElementsMotionLeft = document.querySelectorAll('.parallaxContainerHidden');
hiddenElementsMotionLeft.forEach((el) => observerMotionLeft.observe(el));

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

////////////////// Shifting content to display iFrame /////////////////

  var isIframeVisible = false;

  document.getElementById("shift1").addEventListener("click", function() {
    var embeddedFrame = document.getElementById("embeddedFrame");
    if (isIframeVisible) {
      embeddedFrame.style.display = "none";
      isIframeVisible = false;
    } else {
      embeddedFrame.style.display = "block";
      embeddedFrame.src = "https://rorisangmanamela.github.io/VioProject2/";
      isIframeVisible = true;
    }

    var content = document.getElementById("contentToShift");
    if (content.style.display === "none") {
      content.style.display = "block";
      content.style.marginTop = "50px";
    } else {
      content.style.display = "none";
    }
  });

  document.getElementById("popUpParallax").addEventListener("click", function() {
    var embeddedFrame = document.getElementById("embeddedFrame");
    if (isIframeVisible) {
      embeddedFrame.style.display = "none";
      isIframeVisible = false;
    } else {
      embeddedFrame.style.display = "block";
      embeddedFrame.src = "https://rorisangmanamela.github.io/VioProject2/";
      isIframeVisible = true;
    }

    var content = document.getElementById("contentToShift");
    if (content.style.display === "none") {
      content.style.display = "block";
      content.style.marginTop = "50px";
    } else {
      content.style.display = "none";
    }
  });


////////////////////////////////// VIVIAN GO BRR /////////////////////////

  document.body.style.cursor = "url('media/images/kunai.png') auto"

gsap.registerPlugin(ScrollTrigger),
gsap.registerPlugin(MotionPathPlugin),

console.log("ScrollTrigger", ScrollTrigger)







///////////////////////////////////////VIVIAN ANIMATIONS HERE//////////////////////////////////////////////////////

/////////////////////////////////// Main container /////////////////////////////////////

window.addEventListener('scroll', function () {
  var object = document.getElementById('viv');
  var scrollPosition = window.scrollY;

  // You can adjust these values based on when you want the transparency to start and end
  var startTransparent = 100; // Pixels from the top
  var endTransparent = 300;   // Pixels from the top

  if (scrollPosition >= startTransparent && scrollPosition <= endTransparent) {
    // Calculate the opacity based on the scroll position
    var opacity = 1 - (scrollPosition - startTransparent) / (endTransparent - startTransparent);

    // Set the opacity directly
    object.style.opacity = opacity;
  } else {
    // Reset to the initial opacity if outside the specified range
    object.style.opacity = 1;
  }
});








///////////////////////////////////////PAGE ANIMATIONS HERE//////////////////////////////////////////////////////

/////////////////////////////////// Main container /////////////////////////////////////

const mainTitlePath = [
	{ opacity: 0},
  ]
  
  const mainTitleTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".main-container",
		  scrub: 2,
		  start: 90,
	  },
  })
  
  mainTitleTL.to(".main-container", {
	  motionPath: {
		  path: mainTitlePath,
		  autoRotate: false,
	  },
	  duration: 10,
	ease: Power1.easeInOut,
  });


  /////////////////////////////////////////////NAV HIGHLIGHT///////////////////////////////////////




