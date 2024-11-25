// script.js
document.getElementById('learn-more').addEventListener('click', () => {
  document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you shortly.');
  form.reset();
});