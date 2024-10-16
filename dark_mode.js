//Dark mode

// Get the button element
        const themeToggleBtn = document.getElementById('theme-toggle');

        // Check if dark mode was previously enabled and apply it
        if (localStorage.getItem('dark-theme') === 'enabled') {
            document.body.classList.add('dark-theme');
            themeToggleBtn.textContent = 'Light Mode'; // Set initial text to Light Mode
        }

        // Add an event listener to toggle between dark and light mode
        themeToggleBtn.addEventListener('click', function() {
            // Toggle dark mode
            document.body.classList.toggle('dark-theme');

            // Update button text and store mode in localStorage
            if (document.body.classList.contains('dark-theme')) {
                themeToggleBtn.textContent = 'Light Mode'; // Change text to Light Mode
                localStorage.setItem('dark-theme', 'enabled'); // Save mode to localStorage
            } else {
                themeToggleBtn.textContent = 'Dark Mode'; // Change text to Dark Mode
                localStorage.setItem('dark-theme', 'disabled'); // Save mode to localStorage
            }
        });
