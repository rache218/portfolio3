 /* Use the exact name of your file: particlesjs-config.json */
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 300,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#32f55f"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#09f733",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 9,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  const words = ["Web Developer", "Frontend Designer", "UI/UX Enthusiast"];
let i = 0, j = 0, isDeleting = false;
const typing = document.getElementById("typed");

function type() {
  const word = words[i];
  if (!isDeleting) {
    typing.textContent = word.substring(0, j + 1);
    j++;
    if (j === word.length) {
      isDeleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    typing.textContent = word.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, isDeleting ? 80 : 120);
}
type();


/* ===============================
   AUTO ASSIGN SECTION IDS
=============================== */
document.querySelectorAll('section').forEach((section, index) => {
  if (!section.id) section.id = 'section' + (index + 1);
});

/* ===============================
   MOBILE MENU TOGGLE
=============================== */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.querySelector('.nav-linkss');
const overlay = document.querySelector('.overlay');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('active');
    overlay?.classList.toggle('active');
    menuToggle.classList.replace(isOpen ? 'fa-bars' : 'fa-xmark', isOpen ? 'fa-xmark' : 'fa-bars');
  });
}

overlay?.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  menuToggle.classList.replace('fa-xmark', 'fa-bars');
});

/* ===============================
   SLIDE-IN SECTION ANIMATION ON LINK CLICK
=============================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();

    // Close mobile menu if open
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      overlay?.classList.remove('active');
      menuToggle.classList.replace('fa-xmark', 'fa-bars');
    }

    // Reset target style for animation
    target.style.transition = 'none';
    target.style.transform = 'translateX(50px)';
    target.style.opacity = 0;

    // Scroll instantly to section
    target.scrollIntoView({ block: 'start' });

    // Trigger animation after a tiny delay
    setTimeout(() => {
      target.style.transition = 'all 0.5s ease';
      target.style.transform = 'translateX(0)';
      target.style.opacity = 1;
    }, 20); // 20ms delay ensures it works first click
  });
});

//   var typed = new Typed('#typed', {
//   strings: [
//     'full stack web developer', 
//     'web designer', 
//     'freelancer', 
//     'ui ux enthusiast',
    
//   ],
//   typeSpeed: 50,    // Speed of typing
//   backSpeed: 30,    // Speed of deleting
//   backDelay: 2000,  // How long to wait before deleting (2 seconds)
//   loop: true        // Keep it going forever
// });
