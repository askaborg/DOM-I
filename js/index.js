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
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
}

// Example: Update the img src for the logo
let logoImg = document.getElementById("logo-img")
logoImg.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute("src", siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let navLinks = document.getElementsByTagName("a")
let h1Button = document.querySelectorAll("h1, button")
let h4P = document.querySelectorAll("h4, p")
const navText = Object.values(siteContent.nav)
const h1ButtonText = Object.values(siteContent.cta)
const h4Ptext = Object.values(siteContent["main-content"])
const contactText = Object.values(siteContent.contact)

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = navText[i]
}

for (let i = 0; i < h1Button.length; i++) {
  h1Button[i].textContent = h1ButtonText[i]
}

for ( let i = 0; i < 10; i++){
  if ( i < 4) {
    h4P[i].textContent = h4Ptext[i]
  }
  else {
    h4P[i].textContent = h4Ptext[i+1]
  }
}

for ( let i = 0; i < h4P.length-1; i++) {
    h4P[i+10].textContent = contactText[i]
  }

h4P[14].textContent = siteContent.footer.copyright

