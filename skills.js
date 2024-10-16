document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            skill: params.get("skill"),
            percentage: params.get("percentage")
        };
    }

    // Skills, their descriptions, and icons
    const skillDetails = {
        Python: {
            description: "A versatile language used in web development, data science, and automation.",
            icon: '<i class="fa-brands fa-python"></i>'
        },
        JavaScript: {
            description: "A scripting language essential for creating dynamic and interactive web content.",
            icon: '<i class="fa-brands fa-js"></i>'
        },
        Java: {
            description: "A powerful, general-purpose programming language used for building cross-platform applications.",
            icon: '<i class="fa-brands fa-java"></i>'
        },
        "C++": {
            description: "A general-purpose programming language used in systems programming and game development.",
            icon: '<i class="fa-solid fa-c"></i>'
        },
        PHP: {
            description: "A server-side scripting language designed for web development.",
            icon: '<i class="fa-brands fa-php"></i>'
        },
        Ruby: {
            description: "A dynamic programming language focused on simplicity and productivity.",
            icon: '<i class="fa-solid fa-diamond"></i>'
        },
        CSS: {
            description: "A language used to style and layout web pages, making them responsive and visually appealing.",
            icon: '<i class="fa-brands fa-css3-alt"></i>'
        },
        HTML: {
            description: "The standard markup language for creating web pages.",
            icon: '<i class="fa-brands fa-html5"></i>'
        },
        SQL: {
            description: "A domain-specific language used for managing and querying relational databases.",
            icon: '<i class="fa-solid fa-database"></i>'
        },
        Cybersecurity: {
            description: "The practice of protecting systems, networks, and programs from digital attacks.",
            icon: '<i class="fa-solid fa-shield"></i>'
        },
        Figma: {
            description: "A UI/UX design tool that allows teams to collaborate in real-time to design interfaces.",
            icon: '<i class="fa-brands fa-figma"></i>'
        },
        Canva: {
            description: "An easy-to-use graphic design tool for creating presentations, posters, and social media posts.",
            icon: '<i class="fa-solid fa-paint-brush"></i>'
        },
        Photoshop: {
            description: "A powerful tool for photo editing, graphic design, and digital art creation.",
            icon: '<i class="fa-solid fa-image"></i>'
        },
        CorelDraw: {
            description: "A vector graphics editor used for illustration, layout, and design.",
            icon: '<i class="fa-solid fa-pen-nib"></i>'
        }
    };

    // Get the skill and percentage from the URL
    const { skill, percentage } = getQueryParams();

    // Update the skill name, percentage, and description in the HTML
    document.getElementById("skill-name").textContent = skill;
    document.getElementById("percentage").textContent = percentage + "%";

    const skillDetail = skillDetails[skill] || {
        description: "Skill description not available.",
        icon: ""
    };
    document.getElementById("skill-description").textContent = skillDetail.description;

    // Set the icon above the skill name
    document.getElementById("skill-icon").innerHTML = skillDetail.icon;

    // Add a delay to ensure the CSS transition is applied
    const progressBar = document.querySelector(".progress");
    setTimeout(function() {
        progressBar.style.width = `${percentage}%`;
    }, 100); // Add a 100ms delay before updating the width
});
