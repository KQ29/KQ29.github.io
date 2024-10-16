var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}


function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

window.addEventListener("pageshow", function(event) {
    if (event.persisted || window.performance && window.performance.navigation.type === 2) {
      // The page was accessed via the browser's back button
      window.location.reload();
    }
  });

// List of titles to rotate through
const titles = ["Software Engineer", "Cybersecurity Expert", "Data Scientist", "Machine Learning Specialist", "Artificial Intelligence Engineer",];

// Set interval to change the text every 3 seconds
let index = 0;
const changeText = () => {
    const textElement = document.getElementById('changing-text');
    
    // Fade out effect before changing the text
    textElement.style.opacity = 0;

    setTimeout(() => {
        // Clear and replace the text
        textElement.textContent = '';  // Clear the text to avoid duplicates
        textElement.textContent = titles[index]; // Set new text
        textElement.style.opacity = 1; // Fade in effect
        
        // Update the index for the next text
        index = (index + 1) % titles.length; // Cycle through the list of titles
    }, 500); // Wait for fade out before changing text
};

// Start the text rotation
setInterval(changeText, 5000);

