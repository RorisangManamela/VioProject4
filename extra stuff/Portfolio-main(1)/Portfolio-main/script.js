gsap.registerPlugin(ScrollTrigger),
gsap.registerPlugin(MotionPathPlugin),

console.log("ScrollTrigger", ScrollTrigger)


/////////////////////////////////// Profile In /////////////////////////////////////

const picrewPath = [
  { left: '30%', top: 90 },
]

const picrewTL = gsap.timeline({
	scrollTrigger: {
	trigger: ".main-heading",
	scrub: 2,
	start: 350,
	},
})

picrewTL.to(".intro", {
	motionPath: {
		path: picrewPath,
		autoRotate: false,
	},
	duration: 1,
  ease: Power1.easeInOut,
});

/////////////////////////////////// Profile Shift /////////////////////////////////////

const picrewPath2 = [
	{ left: '8%', top: 90 },
  ]
  
  const picrewTL2 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1300,
	  },
  })
  
  picrewTL2.to(".intro", {
	  motionPath: {
		  path: picrewPath2,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Profile Out /////////////////////////////////////

const picrewPath3 = [
	{ opacity: 0 },
  ]
  
  const picrewTL3 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".middle-continer",
	  scrub: 2,
	  start: 2000,
	  },
  })
  
  picrewTL3.to(".intro", {
	  motionPath: {
		  path: picrewPath3,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Skills in /////////////////////////////////////

const skillsPath = [
	{ left: '30%', top: '30%' },
  ]
  
  const skillsTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1500,
	  },
  })
  
  skillsTL.to(".intro-skills", {
	  motionPath: {
		  path: skillsPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

  /////////////////////////////////// Skills Out /////////////////////////////////////

const skillsPath2 = [
	{ opacity: 0 },
  ]
  
  const skillsTL2 = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".middle-continer",
	  scrub: 2,
	  start: 2000,
	  },
  })
  
  skillsTL2.to(".intro-skills", {
	  motionPath: {
		  path: skillsPath2,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

  /////////////////////////////////// Contact In /////////////////////////////////////

const contactPath = [
	{ left: '30%', top: 80 },
  ]
  
  const contactTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".bottom-container",
	  scrub: 2,
	  start: 1600,
	  },
  })
  
  contactTL.to(".contact-me", {
	  motionPath: {
		  path: contactPath,
		  autoRotate: false,
	  },
	  duration: 1,
  });

   /////////////////////////////////// Footer In /////////////////////////////////////

const footerPath = [
	{ left: '30%', top: 100 },
  ]
  
  const footerTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".top-container",
	  scrub: 2,
	  start: 1600,
	  },
  })
  
  footerTL.to(".bottom-container", {
	  motionPath: {
		  path: footerPath,
		  autoRotate: false,
	  },
	  duration: 1,
  });

/////////////////////////////////// Top Out /////////////////////////////////////

const topPath = [
	{ left: '0%', top:'-150vh' },
  ]
  
  const topTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".design",
	  scrub: 2,
	  start: 150,
	  },
  })
  
  topTL.to(".top-container", {
	  motionPath: {
		  path: topPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });

/////////////////////////////////// Profile Disappear /////////////////////////////////////

const proPath = [
	{ opacity: 0 },
  ]
  
  const proTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".design",
	  scrub: 2,
	  start: 150,
	  },
  })
  
  proTL.to(".top-container", {
	  motionPath: {
		  path: proPath,
		  autoRotate: false,
	  },
	  duration: 1,
	ease: Power1.easeInOut,
  });



