const images = [
    {
        img: "../website/back1.jpg", s1: "wp template for", s2: "Wedding planners", s3: "Lorem ipsum dolor sit amet consectetur adpiscing elit. Nulla convallis euisemod odio  scelerisque mollis.", button1: "TAKE IT FOR SPIN", button: false
    },
    {
        img: "../website/backg3.jpg", s1: "Multi-Purpose & well-bred", s2: "WordPress theme", s3: "Lorem ipsum dolor sit amet consectetur adpiscing elit. Nulla convallis <br>euisemod odio  scelerisque  mollis.", button1: "TAKE IT FOR SPIN", buttons2: false
    },
    {
        img: "../website/frontcar.jpg", s1: "Make your website", s2: "Fresh & beautiful", s3: "Lorem ipsum dolor sit amet consectetur adpiscing elit. Nulla convallis <br>euisemod odio  scelerisque  mollis.", button1: "CONTACT US", buttons2: "PURCHASE THEME"
    }



];

const imgElement = document.querySelector("#slide-img");
const slide = document.querySelector(".slide1");
const cursor = document.querySelector(".cursor_point")

let count = 0;
timer = setInterval(() => {
    count += 1;
    let si = count % images.length;
    imgElement.src = images[si].img;

    if (si === 2) {           //take index position in images
        slide.innerHTML = `<div class="s1">${images[si].s1}</div> 
    <div class="s2">${images[si].s2}</div> <div class="s3">${images[si].s3}</div> 
    <button class="button1">${images[si].button1}</button>
    <button class="buttons2">${images[si].buttons2}</button> 
   `;
    } else {
        slide.innerHTML = `<div class="s1">${images[si].s1}</div> 
    <div class="s2">${images[si].s2}</div> <div class="s3">${images[si].s3}</div> 
    <button class="button1">${images[si].button1}</button>
  
   `;
    }

}, 5 * 1000);


// #############################################


const nav_gator = document.querySelector(".navitems");
const changes = document.querySelector(".scroll_color")

document.addEventListener("scroll", (e) => {
    console.log(scrollY)

    if (scrollY > 100) {     //scrollY is a function its not a scroll
        // nav_gator.classList.add()
        nav_gator.style.color = "grey"
        nav_gator.style.background = "white";




    } else {
        nav_gator.style.background = "transperant";
    }
});

console.log(nav_gator)



// ######################################################

const navItems = document.querySelectorAll(".nav-item")
const cont = document.querySelector(".contented")


navItems.forEach((navI) => {
    navI.addEventListener("click", () => {
        resetAllNav()
        navI.classList.add('change_in_hover')
        cont.setAttribute("class", "contented")
        cont.classList.add(navI.innerText)
    })
})

function resetAllNav() {
    navItems.forEach((item) => {
        console.log(item);
        item.classList.remove("change_in_hover")
    })
}