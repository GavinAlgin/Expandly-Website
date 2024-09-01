//MODAL SCRIPT
var modal = document.getElementById("contactModal");

var openModalBtn = document.getElementById("openModalBtn");

var closeBtn = document.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//form validation 
// Get the form element
const form = document.getElementById('contactForm');

// Get the input fields
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const servicesSelect = document.getElementById('services');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting

  // Validate the input fields
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('invalid');
  } else {
    nameInput.classList.remove('invalid');
  }

  // Validate email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }

  // Validate message
  if (messageInput.value.trim() === '') {
    isValid = false;
    messageInput.classList.add('invalid');
  } else {
    messageInput.classList.remove('invalid');
  }

  // Validate services
  if (servicesSelect.value === '') {
    isValid = false;
    servicesSelect.classList.add('invalid');
  } else {
    servicesSelect.classList.remove('invalid');
  }

  // If the form is valid, submit it
  if (isValid) {
    form.submit();
  } else {
    // Display an error message
    const alertModal = document.getElementById('AlertModal');
    alertModal.textContent = 'Please fill in all the required fields.';
  }
});

//Accordion Section
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const expanded = this.getAttribute('aria-expanded') === 'true' || false;

            // Close all open accordions
            document.querySelectorAll('.accordion-header').forEach(header => {
                header.setAttribute('aria-expanded', false);
                header.nextElementSibling.style.maxHeight = null;
            });

            // Toggle the clicked accordion
            if (!expanded) {
                this.setAttribute('aria-expanded', true);
                const content = this.nextElementSibling;
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

//Responsive Navbar
const MenuBtn = document.getElementById("MenuIcon");
//const navEl = document.getElementById("MenuIcon");
const nav = document.getElementsByTagName(".open");

MenuBtn.addEventListener("click", () => {
    nav[1].classList.toggle("active");
});