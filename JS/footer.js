// Get the current year
const currentYear = new Date().getFullYear();

// Get the footer element
const footer = document.querySelector('footer');

// Create the copyright text
const copyrightText = `&copy; ${currentYear} All Rights Reserved for the Content on This Website.`;

// Set the innerHTML of the footer to the copyright text
footer.innerHTML = copyrightText;
