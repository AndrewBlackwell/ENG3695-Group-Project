// Don't change unless you know what you're doing

// Header Scroll Effect - works on all pages
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }
});

// Wait for DOM to load before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle - works on all pages
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
    });
  }

  // Carousel Navigation (index.html)
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (carousel && prevBtn && nextBtn) {
    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    });

    prevBtn.addEventListener("click", () => {
      carousel.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    });
  }

  // FAQ Search (on faq.html)
  const searchInput = document.getElementById("faq-search");
  if (searchInput) {
    const faqItems = document.querySelectorAll(".faq-item");
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      faqItems.forEach((item) => {
        const question = item
          .querySelector(".faq-question")
          .textContent.toLowerCase();
        const answer = item
          .querySelector(".faq-answer")
          .textContent.toLowerCase();
        item.style.display =
          question.includes(searchTerm) || answer.includes(searchTerm)
            ? "block"
            : "none";
      });
    });
  }

  const categoryBtns = document.querySelectorAll(".category-btn");
  if (categoryBtns.length > 0) {
    const faqCategories = document.querySelectorAll(".faq-category");
    categoryBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        categoryBtns.forEach((b) => b.classList.remove("active"));
        // Add active class to clicked button
        btn.classList.add("active");

        const category = btn.dataset.category;
        if (category === "all") {
          faqCategories.forEach((cat) => (cat.style.display = "block"));
        } else {
          faqCategories.forEach((cat) => {
            cat.style.display = cat.id === category ? "block" : "none";
          });
        }
      });
    });
  }
});
