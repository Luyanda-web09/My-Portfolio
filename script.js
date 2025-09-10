// Menu toggle for mobile
document.getElementById('menuToggle').addEventListener('click', () => {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});

// Contact form submission with feedback
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Disable the button and show sending
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  // Prepare form data
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Message sent successfully! Thank you for reaching out.');
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  } catch (error) {
    alert('Oops! There was a problem submitting your form.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
