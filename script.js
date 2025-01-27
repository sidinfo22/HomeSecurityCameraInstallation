const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');
const indexItem = document.querySelector('.dropdown-item.has-submenu'); // Updated to target the entire dropdown item

// Toggle dropdown menu
hamburger.addEventListener('click', () => {
  const navbar = document.querySelector('.nav-bar'); // Target the sticky navbar

  // Get the bounding rectangle of the navbar
  const navbarRect = navbar.getBoundingClientRect();

  // Dynamically position the dropdown below the navbar
  dropdownMenu.style.position = 'fixed'; // Ensure it follows scroll
  dropdownMenu.style.top = `${navbarRect.bottom}px`; // Align to the navbar's bottom
  dropdownMenu.style.left = `${navbarRect.left}px`; // Align to the navbar's left
  dropdownMenu.style.width = `${navbarRect.width}px`; // Match the navbar's width
  dropdownMenu.style.marginTop = '0'; // Ensure no gap between navbar and dropdown

  // Toggle the visibility of the dropdown
  dropdownMenu.classList.toggle('show');
});

// Toggle submenu on clicking anywhere inside "Index"
indexItem.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent closing the parent menu
  const submenu = indexItem.querySelector('.submenu'); // Target the submenu within "Index"
  submenu.classList.toggle('show'); // Toggle the 'show' class
});

// Close menus when clicking outside
window.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !hamburger.contains(e.target)) {
    dropdownMenu.classList.remove('show');
    dropdownMenu.classList.remove('show-submenu');
  }
});

// Optional: Reset dropdown position on window resize
window.addEventListener('resize', () => {
  if (dropdownMenu.classList.contains('show')) {
    const navbar = document.querySelector('.nav-bar');
    const navbarRect = navbar.getBoundingClientRect();

    // Update dropdown menu position and width
    dropdownMenu.style.top = `${navbarRect.bottom}px`;
    dropdownMenu.style.left = `${navbarRect.left}px`;
    dropdownMenu.style.width = `${navbarRect.width}px`;
  }
});

// Optional: Adjust dropdown position on scroll
window.addEventListener('scroll', () => {
  if (dropdownMenu.classList.contains('show')) {
    const navbar = document.querySelector('.nav-bar');
    const navbarRect = navbar.getBoundingClientRect();

    // Update dropdown menu position dynamically while scrolling
    dropdownMenu.style.top = `${navbarRect.bottom}px`;
    dropdownMenu.style.left = `${navbarRect.left}px`;
    dropdownMenu.style.width = `${navbarRect.width}px`;
  }
});