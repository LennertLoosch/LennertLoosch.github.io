const currentYear = new Date().getFullYear();

const footer = document.querySelector('footer');

const copyrightText = `&copy; ${currentYear} All Rights Reserved for the Content on This Website.`;

footer.innerHTML = copyrightText;
