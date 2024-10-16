// List of titles to rotate through
const titles = ["Software Engineer", "Cybersecurity Expert", "Data Scientist", "Machine Learning Specialist", "Artificial Intelligence Engineer"];

// Set interval to change the text every 3 seconds
let index = 0;
const changeText = () => {
    const textElement = document.getElementById('changing-text');
    
    // Fade out effect before changing the text
    textElement.style.opacity = 0;

    setTimeout(() => {
        // Replace the text content
        textElement.textContent = titles[index];
        textElement.style.opacity = 1; // Fade in effect
        
        // Update index for the next text
        index = (index + 1) % titles.length; // Loop back to the first title
    }, 500); // Wait for fade-out effect before changing text
};

// Start the text rotation
setInterval(changeText, 3000);

// List of paragraphs to rotate through
const paragraphs = [
    "Building intelligent systems that enhance the user experience and deliver efficient solutions to complex challenges. Focus on creating user-centric solutions that improve efficiency and usability across platforms.",
    "Driving innovation with a focus on machine learning, full-stack development, and user experience. Streamline development processes to create scalable, future-proof digital products that meet modern business needs.",
    "Creating seamless integrations between software systems and services to optimize workflows and enhance value. Deliver streamlined solutions that support business processes and drive efficiency.",
    "Bridging the gap between creativity and technology through intuitive, user-friendly solutions. Transform ideas into functional designs that support business objectives and improve digital experiences.",
    "Architect AI solutions with grace and simplicity, transforming intricate concepts into beautifully functional creations. Cultivate your passion for innovation through intuitive design and flawless execution."
];


let paragraphIndex = 0;
const changeParagraphText = () => {
    const paragraphElement = document.getElementById('changing-paragraph');
    
    // Fade out effect before changing the text
    paragraphElement.style.opacity = 0;

    setTimeout(() => {
        // Replace the text content
        paragraphElement.textContent = paragraphs[paragraphIndex];
        paragraphElement.style.opacity = 1; // Fade in effect
        
        // Update index for the next paragraph
        paragraphIndex = (paragraphIndex + 1) % paragraphs.length; // Cycle through the paragraphs
    }, 500); // Wait for fade-out effect before changing text
};

// Start the paragraph text rotation
setInterval(changeParagraphText, 3000); 
