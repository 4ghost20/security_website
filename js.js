/*
Shaphilltd Security Website JavaScript
Adapted from Inner Peace template
Functions:
1. Toggle mobile navigation menu
2. Smooth scroll for navigation links
3. Basic anti-spam check on contact form
*/

// ===== 1. Toggle Mobile Navigation Menu =====
function toggleMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  // Toggle active classes for menu button and nav links
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
}

// ===== 2. Smooth Scroll for Internal Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // Close menu after clicking link on mobile
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
  });
});

// ===== 3. Contact Form Anti-Spam Check =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const humanCheck = document.getElementById('human-check').value.trim();

      // Correct answer for the anti-spam question "What is 5 + 3?"
      if (humanCheck !== "8") {
        alert("Please answer the anti-spam question correctly.");
        e.preventDefault();
      }
    });
  }
});
