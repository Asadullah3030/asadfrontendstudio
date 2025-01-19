Shery.mouseFollower();
Shery.makeMagnet(".magnet")

let headerIcon = document.querySelector('.header-icon img');
let reverseIcon = document.querySelector('.reverse-icon img');
let HeaderAnima = gsap.timeline();
let NavBarAnima = gsap.timeline({ paused: true }); // Initialize NavBarAnima as paused
// let MyHeroLine = gsap.timeline();

gsap.to(reverseIcon,{
    y:11,
    yoyo:true,
    duration:1,
    delay:1,
    repeat:-1,
    opacity:0,
})

// gsap.from(reverseIcon,{
    
// })
// Header animation (for both desktop and mobile)
HeaderAnima.from('.logo', {
    y: -20,
    duration: 0.5,
    delay: 2,
    opacity: 0,
});

HeaderAnima.from('nav ul li h6', {
    opacity: 0,
    x: -20,
    duration: 0.2,
    stagger: 0.2,
});

HeaderAnima.from('.hero-line-one h1 span',{
    y:90,
    opacity:0,
    duration:.3,
})

HeaderAnima.from('.hero-line-Two h1 span',{
    y:90,
    opacity:0,
    duration:.4,
})

HeaderAnima.from('.hero-line-Three h1 span',{
    y:90,
    opacity:0,
    duration:.4,
})
HeaderAnima.from('.hero-line-Four h1 span',{
    y:90,
    opacity:0,
    duration:.3,
})

// Navbar animation for mobile
NavBarAnima.to('nav ul', {
    top: 0,  // Slide down to top 0 to make the menu visible
    opacity: 1,
    duration: 1,
}).to('nav ul li h6', {
    // opacity: 0,  // Start with opacity 0
    y: -20,      // Move items slightly up
    duration: 0.5,
    stagger: 0.2,  // Stagger the appearance of the items
    ease: "power2.out",  // Smooth easing for the animation
}, "-=0.8"); // Slight overlap with the previous animation for smoothness

// Trigger NavBarAnima on headerIcon click (open menu)
headerIcon.addEventListener('click', () => {
    NavBarAnima.play();
});

// Reverse the animation on reverseIcon click (close menu)
reverseIcon.addEventListener('click', () => {
    NavBarAnima.reverse();
});

// Ensure desktop styles are applied when resizing back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
        // Reset styles for desktop view
        gsap.set('nav ul', {
            clearProps: 'all' // Remove inline styles applied by GSAP
        });
    }
});

// my moving line is start

const Line = document.querySelector('#line');
  const svgPath = document.querySelector('svg path');
  
  Line.addEventListener('mousemove', (e) => {
    // Get bounding box of the SVG
    const rect = Line.getBoundingClientRect();
    // Calculate mouse position relative to the SVG
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update the path with the new mouse position
    const dynamicPath = `M 10 100 Q ${x} ${y} 890 100`;
    gsap.to(svgPath, {
      attr: { d: dynamicPath },
      duration: 0.3,
    });
  });


  Line.addEventListener('mouseleave', () => {
    // Return to the original path
    const FinalPath = `M 10 100 Q 490 100 890 100`;
    gsap.to(svgPath, {
      attr: { d: FinalPath },
      duration: 0.9,
      ease: "elastic.out(1, 0.3)",
    });
  });

  var tl = gsap.timeline()

tl.from('#loader h3',{
    x:40,
    opacity:0,
    stagger:0.1,
    duration:1,
})
tl.to('#loader h3',{
    x:-40,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl.to('#loader',{
    opacity:0,
    display:'none',
})
  



//   here is locomotive code using with scroller trigger is start
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
//   here is locomotive code using with scroller trigger is End

gsap.from('.Expertise h1 span',{
    y:150,
    // opacity:0,
    duration:.5,
    stagger:0.3,
    scrollTrigger:{
        trigger:'.main-Expertise',
        scroller:'.main',
        start:'top 80%',
        end:'top 40%',
        // markers:true,
        scrub:1,
    }
})

gsap.from('.development h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.courses',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.Mentorship h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.Mentorship',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.Consultations h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.Consultations',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})


gsap.from('.Success h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.Success',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

Shery.imageEffect(".animations img", {
  style: 3,
  config: {
    "uFrequencyX": { "value": 8.4, "range": [0, 100] },
    "uFrequencyY": { "value": 7.63, "range": [0, 100] },
    "uFrequencyZ": { "value": 7.63, "range": [0, 100] },
    "geoVertex": { "range": [1, 64], "value": 10.14 },
    "zindex": { "value": 2, "range": [-9999999, 9999999] }, // Set z-index to 2
    "aspect": { "value": 0.6666908563134978 },
    "ignoreShapeAspect": { "value": true },
    "shapePosition": { "value": { "x": 0, "y": 0 } },
    "shapeScale": { "value": { "x": 0.5, "y": 0.5 } },
    "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] },
    "shapeRadius": { "value": 0, "range": [0, 2] },
    "currentScroll": { "value": 0 },
    "scrollLerp": { "value": 0.07 },
    "gooey": { "value": false },
    "infiniteGooey": { "value": false },
    "growSize": { "value": 4, "range": [1, 15] },
    "durationOut": { "value": 1, "range": [0.1, 5] },
    "durationIn": { "value": 1.5, "range": [0.1, 5] },
    "displaceAmount": { "value": 0.5 },
    "masker": { "value": true },
    "maskVal": { "value": 1.37, "range": [1, 5] },
    "scrollType": { "value": 0 },
    "noEffectGooey": { "value": true },
    "onMouse": { "value": 1 },
    "noise_speed": { "value": 0.2, "range": [0, 10] },
    "metaball": { "value": 0.2, "range": [0, 2] },
    "discard_threshold": { "value": 0.5, "range": [0, 1] },
    "antialias_threshold": { "value": 0.002, "range": [0, 0.1] },
    "noise_height": { "value": 0.5, "range": [0, 2] },
    "noise_scale": { "value": 10, "range": [0, 100] }
  },
  // debug: true,
});

const marque = document.querySelector('.marque')

window.addEventListener('wheel',(dets)=>{
  if (dets.deltaY>0) {

    gsap.to('.marque',{
      transform:'translateX(-200%)',
      duration:4.8,
      x:dets.deltaY,
      repeat:-1,
      ease:'none'
  })

    gsap.to('.marque img',{
      rotate:180
    })

  }else{

    gsap.to('.marque',{
      transform:'translateX(0%)',
      duration:4.8,
        x:dets.deltaY,
        repeat:-1,
        ease:'none'
    })

    gsap.to('.marque img',{
      rotate:0
    })
  }
})


gsap.from('.service-one h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.service-one',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.service-one h2 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.service-one',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.work-table h2 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.work-table',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.services-img img',{
  y:150,
  opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.services-img',
      scroller:'.main',
      start:'top 80%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    const formData = new FormData(form);
    e.preventDefault();

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "send";
            }, 3000);
        });
});

gsap.from('.marque h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.marque',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.footer-four ul li span',{
  y:50,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.footer-four',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      scrub:2,
  }
})

gsap.from('.work-project-text h1 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.work-project-text h2 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.service-one-inscribes h1 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.service-one-inscribes h2 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.about-heading h1 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.about-heading h2 span',{
  y:200,
  opacity:0,
  duration:2,
})

gsap.from('.manage-layout h1 span',{
  y:100,
  opacity:0,
  duration:2,
})


gsap.from('.latest-project h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.latest-project',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.latest-project h2 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.3,
  scrollTrigger:{
      trigger:'.latest-project',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.project-row-overview h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.project-row-overview',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.project-row-overview p span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.project-row-overview',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.project-img-title h2 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.project-img-title',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.project-img-title h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.project-img-title',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.touch h1 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.touch',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})
gsap.from('.touch h2 span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.touch',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})
gsap.from('.touch p span',{
  y:150,
  // opacity:0,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.touch',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      // markers:true,
      scrub:2,
  }
})

gsap.from('.about-travel-title h1 span',{
  y:150,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.about-travel-title',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      scrub:2,
  }
})

gsap.from('.about-travel-title h2 span',{
  y:-150,
  duration:.5,
  stagger:0.2,
  scrollTrigger:{
      trigger:'.about-travel-title',
      scroller:'.main',
      start:'top 100%',
      end:'top 40%',
      scrub:2,
  }
})

gsap.from('.about-image img',{
      y:60,
      duration:0.8,
      delay:1.3,
      opacity:0,

})

var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });


    Shery.imageEffect('.back', {style:5,config: {"a":{"value":0.46,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":3,"range":[-9999999,9999999]},"aspect":{"value":2.010752688172043},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.58,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}, debug: false,gooey:true})


    const ProjectDetail = [
      {
          title: 'Web Application 2021',
          heading: 'Beautiful website fully Analysis, design and complete frontend implementation.',
          myImage: 'images/Gettree-Project6.webp',
          link: 'gettreeDetail.html' // Link to the page for this project
      },
      {
          title: 'Creative Epic Site',
          heading: 'Implement new Technologies like GSAP,ScrollTrigger and creative animation',
          myImage: 'images/Epic-Project2.webp',
          link: 'epicDetails.html' // Link to the page for this project
      },
      {
        title: 'Magmas 2023',
        heading: 'Internal web application massive creative design',
        myImage: 'images/Magmas-Project3.webp',
        link: 'magmaDetails.html' // Link to the page for this project
    },
    {
      title: 'Rejuice New LoOk 2022',
      heading: 'Internal web application massive creative design',
      myImage: 'images/Rejuice-Project1.webp',
      link: 'rejuiceDetails.html' // Link to the page for this project
  },
  {
    title: 'Finsa OutStanding 2023 - 2024',
    heading: 'Beautiful full flesh web application massive creative design',
    myImage: 'images/Finsa-Project4.webp',
    link: 'finsaDetails.html' // Link to the page for this project
},
{
  title: 'DigitalBit Social Media 2023',
  heading: 'Great full flesh web application for social media',
  myImage: 'images/Digitalbit-Project7.webp',
  link: 'digitalDetails.html' // Link to the page for this project
},{
  title: 'InstaDp Social Site 2023',
  heading: 'Beautiful fully flesh web application for social media',
  myImage: 'Images/instaDp-Project9.webp',
  link: 'instaDpDetails.html' // Link to the page for this project
},{
  title: 'LiveCount Social 2024',
  heading: 'Complete fully flesh web application for social media',
  myImage: 'images/Livecount-Project8.webp',
  link: 'liveCountDetails.html' // Link to the page for this project
},{
  title: 'RedStore e-commerce 2024',
  heading: 'Complete commerce site in frontend',
  myImage: 'images/RedStore-Project5.webp',
  link: 'redStoreDetails.html' // Link to the page for this project
},{
  title: 'DavidChang stylish site 2024',
  heading: 'Modern and Beautiful Site in Shery.js',
  myImage: 'images/Davidchang-Project10.webp',
  link: 'davidChangDetails.html' // Link to the page for this project
},
  ];

  
  
  // Get the container where you want to display the data
  const container = document.getElementById('data-container');
  
  // Function to display specific project data with anchor tag
  function displayProjectData(projectIndex) {
      // Clear the container before adding new content
      container.innerHTML = '';
  
      const item = ProjectDetail[projectIndex];
  
      // Create the HTML structure for the selected item
      const showDataDiv = document.createElement('div');
      showDataDiv.classList.add('show-data');
  
      // Create an anchor tag that wraps the entire content
      const anchorElement = document.createElement('a');
      anchorElement.href = item.link;
      anchorElement.target = '_blank'; // Open in a new tab

      
      const titleElement = document.createElement('h2');
      titleElement.textContent = item.title;
  
      const headingElement = document.createElement('h6');
      headingElement.textContent = item.heading;
  
      const imageElement = document.createElement('img');
      imageElement.src = item.myImage;
      imageElement.alt = item.title;
      
      anchorElement.appendChild(imageElement);
      // Append the elements to the anchor tag
      showDataDiv.appendChild(anchorElement); // Only image inside anchor
      showDataDiv.appendChild(titleElement);
      showDataDiv.appendChild(headingElement);
  
      // Finally, append showDataDiv to the container
      container.appendChild(showDataDiv);
  }
  
  // Add event listeners for buttons
  document.querySelector('#show-project-one').addEventListener('click', () => {
      displayProjectData(0); // Show first project's data
  });
  
  document.querySelector('#show-project-Two').addEventListener('click', () => {
      displayProjectData(1); // Show second project's data
  });

  document.querySelector('#show-project-Three').addEventListener('click', () => {
    displayProjectData(2); // Show second project's data
});

document.querySelector('#show-project-Four').addEventListener('click', () => {
  displayProjectData(3); // Show second project's data
});

document.querySelector('#show-project-Five').addEventListener('click', () => {
  displayProjectData(4); // Show second project's data
});
  
document.querySelector('#show-project-Six').addEventListener('click', () => {
  displayProjectData(5); // Show second project's data
});
  
document.querySelector('#show-project-Seven').addEventListener('click', () => {
  displayProjectData(6); // Show second project's data
});

document.querySelector('#show-project-Eight').addEventListener('click', () => {
  displayProjectData(7); // Show second project's data
});

document.querySelector('#show-project-Nine').addEventListener('click', () => {
  displayProjectData(8); // Show second project's data
});

document.querySelector('#show-project-Ten').addEventListener('click', () => {
  displayProjectData(9); // Show second project's data
});



  // Get all project titles
const projectTitles = document.querySelectorAll('.project-one h1');

// Function to remove active class from all project titles
function clearActiveClasses() {
    projectTitles.forEach(title => {
        title.classList.remove('active');
    });
}

// Add click event listener to each project title
projectTitles.forEach(title => {
    title.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();

        // Clear active class from all other project titles
        clearActiveClasses();

        // Add active class to the clicked project title
        this.classList.add('active');
    });
});






