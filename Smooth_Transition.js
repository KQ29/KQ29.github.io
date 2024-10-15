window.addEventListener('load', () => {
    const body = document.body;

    // Fade in the page when it loads
    body.classList.add('loaded');

    // Select all links to apply smooth transition on click
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetUrl = this.href;
            
            // Check if the link is an anchor link (i.e., starts with "#")
            if (targetUrl.includes('#')) {
                return; // Allow default anchor behavior for internal links
            }

            event.preventDefault(); // Prevent default link navigation for other links

            // Start the fade-out animation
            body.classList.add('fade-out');

            // Wait for the transition to complete (0.4 seconds) before navigating
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400); // This should match the CSS transition time
        });
    });
});
