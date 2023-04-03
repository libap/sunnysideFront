const hamburgerIcon = document.querySelector(".nav_hamburger");
const menu = document.querySelector(".nav_menu");
menu.setAttribute("status", "is-closed");
const contactButton = document.querySelector(".menu_button");
const redirects = document.querySelectorAll(".content_redirect");
const footerLinks = document.querySelectorAll(".option");
const socialIcons = document.querySelectorAll("i");

const temp = document.querySelector(".feature_content");

// change opacity of hamburger icon on mouseover and mouseout
hamburgerIcon.addEventListener("mouseover", (event) => {
    hamburgerIcon.style.opacity = "1";
    hamburgerIcon.style.transition = "all .5s ease-in-out";
});
hamburgerIcon.addEventListener("mouseout", (event) => {
    hamburgerIcon.style.opacity = "60%";
    hamburgerIcon.style.transition = "all .5s ease-in-out";
});

// change nav menu status when clicking on hamburger menu to show or unshow
hamburgerIcon.addEventListener("click", changeStatus);

function changeStatus() {
    if(menu.getAttribute("status") === "is-open") {
        menu.style.transform = "scale(0)";
        menu.style.transition = "all .5s ease-in-out";
        menu.setAttribute("status", "is-closed");
    } else if (menu.getAttribute("status") === "is-closed") {
        menu.style.transform = "scale(1)";
        menu.style.transition = "all .5s ease-in-out";
        menu.setAttribute("status", "is-open");
    }
}

// change opacity of hamburger icon on mouseover and mouseout
contactButton.addEventListener("mouseover", (event) => {
    contactButton.style.transition = "all .5s ease-in-out";
});
contactButton.addEventListener("mouseout", (event) => {
    contactButton.style.transition = "all .5s ease-in-out";
});

// change bottom line color of "learn more" on mouseover and mouseout
for(const redirect of redirects) {
    redirect.addEventListener("mouseover", (event) => {
        redirect.children[0].style.opacity = "1";
        redirect.children[0].style.transition = "all .25s ease-in-out";
    });
    redirect.addEventListener("mouseout", (event) => {
        redirect.children[0].style.opacity = "30%";
        redirect.children[0].style.transition = "all .25s ease-in-out";
    });
}

// change text color
for(const option of footerLinks) {
    option.addEventListener("mouseover", (event) => {
        option.style.transition = "all .5s ease-in-out";
    });
    option.addEventListener("mouseout", (event) => {
        option.style.transition = "all .5s ease-in-out";
    });
}

// change color smoothly
for(const icon of socialIcons) {
    icon.addEventListener("click", (event) => {
        window.scrollTo(0,0);
    });
    icon.addEventListener("mouseover", (event) => {
        icon.style.transition = "all .5s ease-in-out";
    });
    icon.addEventListener("mouseout", (event) => {
        icon.style.transition = "all .5s ease-in-out";
    });
}


