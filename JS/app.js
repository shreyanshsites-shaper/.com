// menu bar scroll active 
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: '0px',
        threshold: 0.5 // Adjust this threshold as needed
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                menuLinks.forEach(link => {
                    link.classList.remove('is-active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('is-active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// for onclick button 
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
	link.addEventListener("click", () => {
		menuLinks.forEach((link) => {
			link.classList.remove("is-active");
		});
		link.classList.add("is-active");
	});
});

// title writer
// const title = document.querySelector('.title');
// const text = "Shaping the Future of Your Business!";
// let index = 0;

// function type() {
//   if (index < text.length) {
//     title.textContent += text.charAt(index);
//     index++;
//     setTimeout(type, 100); // Adjust typing speed as needed
//   }
// }

// type();



// explore   Animation
AOS.init({
	duration: 1000
  });
  

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const langImg = document.querySelector('.langImg');

    const maxMovement = 130; // Maximum distance the element should move
    const movement = Math.min(scrollY * 0.5, maxMovement); // Calculate movement but limit it to maxMovement
    
    // Apply the movement to the element
    langImg.style.transform = `translateY(${movement}px)`;
});

//   what we do 

document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.row1 .service2');
    const options = {
        root: null,
        threshold: 0.5
    };

    let currentIndex = 0;

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                applyHoverEffect(entry.target);
                observer.unobserve(entry.target); // Stop observing once it's in view
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    const applyHoverEffect = (element) => {
        setTimeout(() => {
            element.classList.add('active');
            setTimeout(() => {
                element.classList.remove('active');
                currentIndex++;
                if (currentIndex < services.length) {
                    observer.observe(services[currentIndex]);
                }
            }, 1000); // Adjusted duration of the hover effect (matches CSS transition duration)
        }, 500); // Delay before applying hover effect
    };

    // Start observing the first element
    if (services.length > 0) {
        observer.observe(services[0]);
    }
});

// iamge 


document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.col-image');
    const windowHeight = window.innerHeight;

    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= windowHeight;

        if (isInView) {
            image.classList.add('hovered');
        } else {
            image.classList.remove('hovered');
        }
    });
});





/******** Modal */

document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('.modal-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
});

//pdf 
// document.addEventListener('contextmenu', function(e) {
//     if (e.target.closest('.pdf')) {
//         e.preventDefault();
//     }
// });

// contact us 

const scriptURL = 'https://script.google.com/macros/s/AKfycbzMM-YGM9MAQfxL4-EnW-H25ZUb2cU14ZlhnbfArgLJLS3MmbiNgq57tggs72wvKbqhNg/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Create a FormData object from the form
    const formData = new FormData(form);
    
    // Add the current date and time to the form data
    formData.append('submissionDate', new Date().toISOString());
    
    // Send the form data with the appended date
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            // Show the popup
            const popup = document.getElementById('popup');
            popup.style.display = 'block';

            // Hide the popup after 5 seconds
            setTimeout(() => {
                popup.style.display = 'none';
                // Optionally reload the page after hiding the popup
                // window.location.reload();
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message));
});


