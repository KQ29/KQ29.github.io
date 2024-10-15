document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('schedule-form');

    form.addEventListener('submit', function (e) {
        let isValid = true;
        let errorMessage = '';

        // Get form values
        const name  = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const date  = document.getElementById('date').value;
        const time  = document.getElementById('time').value;

        // Validate name
        if (name === '') {
            isValid = false;
            errorMessage += 'Please enter your name.\n';
        }

        // Validate email
        if (email === '') {
            isValid = false;
            errorMessage += 'Please enter your email.\n';
        } else if (!validateEmail(email)) {
            isValid = false;
            errorMessage += 'Please enter a valid email address.\n';
        }

        // Validate date
        if (date === '') {
            isValid = false;
            errorMessage += 'Please select a date.\n';
        }

        // Validate time
        if (time === '') {
            isValid = false;
            errorMessage += 'Please select a time.\n';
        }

        if (!isValid) {
            e.preventDefault(); // Prevent form submission
            alert(errorMessage); // Display error messages
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
