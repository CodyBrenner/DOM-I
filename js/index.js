const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");

logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
nav.forEach((link, index) => {
  link.textContent = siteContent.nav[`nav-item-${index + 1}`]
  console.log(`This is link ${link}, This is index ${index}`);
})

 let headline = document.querySelector('h1')
headline.innerHTML = 'DOM <br>IS<br> AWESOME'

 let mainImg = document.querySelector('#cta-img');
mainImg.src = 'img/header-img.png'

 let button = document.querySelector('button');
button.textContent = 'Get Started'

 let linkNav = document.querySelectorAll('h4');
 linkNav [0].textContent = siteContent.nav["nav-item-1"];
 linkNav [1].textContent = siteContent.nav["nav-item-2"];
 linkNav [2].textContent = siteContent.nav["nav-item-2"];
 linkNav [3].textContent = siteContent.nav["nav-item-2"];
 linkNav[4].textContent = siteContent.nav["nav-item-2"];
 linkNav[5].textContent = siteContent.nav["nav-item-2"];


let IncludedH4 = document.querySelectorAll('.main-content h4');
IncludedH4[0].textContent = (siteContent["main-content"]["features-h4"])
IncludedH4[1].textContent = (siteContent["main-content"]["about-h4"])
IncludedH4[2].textContent = (siteContent["main-content"]["services-h4"])
IncludedH4[3].textContent = (siteContent["main-content"]["product-h4"])
IncludedH4[4].textContent = (siteContent["main-content"]["vision-h4"])

 let IncludedP = document.querySelectorAll('.main-content p');
 IncludedP[0].textContent = siteContent["main-content"]["features-content"]; 
 IncludedP[1].textContent = siteContent["main-content"]["about-content"];
 IncludedP[2].textContent = siteContent["main-content"]["services-content"];
 IncludedP[3].textContent = siteContent["main-content"]["product-content"];
 IncludedP[4].textContent = siteContent["main-content"]["vision-content"];
 
let centerImg = document.querySelector('#middle-img')
centerImg.src = 'img/mid-page-accent.jpg'

 const contactFooter = document.querySelector('.contact h4')
contactFooter.textContent = siteContent['contact']['contact-h4'];
const footerInfo = document.querySelectorAll('.contact p');
footerInfo[0].innerHTML = siteContent.contact.address;
footerInfo[1].textContent = siteContent.contact.phone;
footerInfo[2].textContent = siteContent.contact.email; 

const copyrightFooter = document.querySelector('footer p')
copyrightFooter.innerHTML = siteContent.footer.copyright;