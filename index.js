// List of titles to rotate through
const titles = [
    "Software Engineer", 
    "Cybersecurity Expert", 
    "Data Scientist", 
    "Machine Learning Specialist", 
    "Artificial Intelligence Engineer"
];

// List of paragraphs to rotate through
const paragraphs = [
    "Building intelligent systems that enhance the user experience and deliver efficient solutions to complex challenges. Focus on creating user-centric solutions that improve efficiency and usability across platforms.",
    "Driving innovation with a focus on machine learning, full-stack development, and user experience. Streamline development processes to create scalable, future-proof digital products that meet modern business needs.",
    "Creating seamless integrations between software systems and services to optimize workflows and enhance value. Deliver streamlined solutions that support business processes and drive efficiency.",
    "Bridging the gap between creativity and technology through intuitive, user-friendly solutions. Transform ideas into functional designs that support business objectives and improve digital experiences.",
    "Architect AI solutions with grace and simplicity, transforming intricate concepts into beautifully functional creations. Cultivate your passion for innovation through intuitive design and flawless execution."
];

// List of image sources to rotate through
const images = [
    'assets/SW.webp',
    'assets/CE.webp',
    'assets/DS.webp',
    'assets/MLS.webp',
    'assets/AI.webp'
];

// Set initial index for all
let index = 0;

// Get elements
const textElement = document.getElementById('changing-text');
const paragraphElement = document.getElementById('changing-paragraph');
const imageElement = document.getElementById('rotating-image');

// Function to change text, paragraph, and image every 3 seconds
const changeContent = () => {
    // Fade out effect for text, paragraph, and image
    textElement.style.opacity = 0;
    paragraphElement.style.opacity = 0;
    imageElement.style.opacity = 0;

    setTimeout(() => {
        // Change text
        textElement.textContent = titles[index];
        
        // Change paragraph
        paragraphElement.textContent = paragraphs[index];
        
        // Change image
        imageElement.src = images[index];

        // Fade in effect for text, paragraph, and image
        textElement.style.opacity = 1;
        paragraphElement.style.opacity = 1;
        imageElement.style.opacity = 1;

        // Update index for next change
        index = (index + 1) % titles.length; // Loop back when reaching the end
    }, 1000); // Wait 1 second for fade-out before changing content
};

// Start the synchronized rotation every 3 seconds
setInterval(changeContent, 3000);

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('backdrop');

    menuToggle.addEventListener('click', () => {
        const isActive = sidebar.classList.contains('active');
        sidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', String(!isActive));
    });

    backdrop.addEventListener('click', () => {
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var maxScrollDistance = 100; // The scroll distance after which the icon is fully hidden

    // Function to update the icon's visibility and functionality
    function updateMenuToggleVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= maxScrollDistance) {
            // Calculate opacity based on scroll position
            var opacity = 1 - (scrollTop / maxScrollDistance);
            menuToggle.style.opacity = opacity.toString();
            menuToggle.classList.remove('hidden');
            // Enable pointer events only when fully visible
            if (scrollTop === 0) {
                menuToggle.style.pointerEvents = 'auto';
            } else {
                menuToggle.style.pointerEvents = 'none';
            }
        } else {
            // Hide the icon completely
            menuToggle.style.opacity = '0';
            menuToggle.classList.add('hidden');
            menuToggle.style.pointerEvents = 'none';
        }
    }

    // Initial check on page load
    updateMenuToggleVisibility();

    // Update on scroll
    window.addEventListener('scroll', function() {
        updateMenuToggleVisibility();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var darkModeToggle = document.querySelector('.theme-toggle-btn');
    var maxScrollDistance = 150; // The scroll distance after which the button is fully hidden

    function updateDarkModeToggleVisibility() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= maxScrollDistance) {
            // Calculate opacity based on scroll position
            var opacity = 1 - (scrollTop / maxScrollDistance);
            darkModeToggle.style.opacity = opacity.toString();
            darkModeToggle.classList.remove('hidden');
            // Enable pointer events only when fully visible
            if (scrollTop === 0) {
                darkModeToggle.style.pointerEvents = 'auto';
            } else {
                darkModeToggle.style.pointerEvents = 'none';
            }
        } else {
            // Hide the button completely
            darkModeToggle.style.opacity = '0';
            darkModeToggle.classList.add('hidden');
            darkModeToggle.style.pointerEvents = 'none';
        }
    }

    // Initial check on page load
    updateDarkModeToggleVisibility();

    // Update on scroll
    window.addEventListener('scroll', function() {
        updateDarkModeToggleVisibility();
    });
});

