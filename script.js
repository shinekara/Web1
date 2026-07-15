/* ==================================================
   ArtVerse Community
   script.js
   Part 1
================================================== */



/* ==========================
   Navbar Scroll Effect
========================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

/* ========================== Mobile Navigation ========================== */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Perbaikan: Memastikan menuBtn dan navLinks ada di HTML sebelum memasang event listener
if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

/* ==========================
   Close Menu After Click
========================== */

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    });

});

/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(
        this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================
   Scroll Down Button
========================== */

const scrollButton =
document.querySelector(".scroll-down");

if(scrollButton){

    scrollButton.addEventListener("click",()=>{

        window.scrollTo({

            top:window.innerHeight,

            behavior:"smooth"

        });

    });

}

/* ==========================
   Active Navigation
========================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/* ==========================
   Back To Top Button
========================== */

const topButton =
document.createElement("div");

topButton.className =
"back-to-top";

topButton.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================
   Button Hover Animation
========================== */

document.querySelectorAll(".btn-primary")
.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform =
        "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform =
        "";

    });

});

/* ==================================================
   ArtVerse Community
   script.js
   Part 2
   Premium Animation
==================================================*/

/* ==========================
   Scroll Reveal Animation
========================== */

const revealElements = document.querySelectorAll(
".about-card,.category-card,.gallery-item,.stat-card,.testimonial-card,.community-box,.upload-box"
);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("animate");

        }

    });

},{
    threshold:0.2
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/* ==========================
   Statistics Counter
========================== */

const counters = document.querySelectorAll('.counter');

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=parseInt(counter.innerText.replace(/\D/g,""));

let value=0;

const speed=Math.max(10,Math.floor(target/120));

const update=()=>{

if(value<target){

value+=speed;

counter.innerText=value+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ==========================
   Hero Mouse Parallax
========================== */

const hero=document.querySelector(".hero");

const heroContent=document.querySelector(".hero-content");

hero.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.pageX)/40;

const y=(window.innerHeight/2-e.pageY)/40;

heroContent.style.transform=

`translate(${x}px,${y}px)`;

});

hero.addEventListener("mouseleave",()=>{

heroContent.style.transform="translate(0,0)";

});

/* ==========================
   Tilt Card Effect
========================== */

const cards=document.querySelectorAll(

".about-card,.category-card,.testimonial-card"

);

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=-(y-rect.height/2)/18;

const rotateY=(x-rect.width/2)/18;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ==========================
   Ripple Effect
========================== */

document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const size=Math.max(

button.clientWidth,

button.clientHeight

);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=

e.offsetX-size/2+"px";

ripple.style.top=

e.offsetY-size/2+"px";

ripple.className="ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================
   Floating Glow
========================== */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/* ==========================
   Scroll Progress Bar
========================== */

const progress=document.createElement("div");

progress.className="scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const percent=

(window.scrollY/total)*100;

progress.style.width=

percent+"%";

});

/* ==================================================
   ArtVerse Community
   script.js
   Part 3
   Advanced Features
==================================================*/

/* ==========================
   Gallery Lightbox
========================== */

const galleryItems =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `
<div class="lightbox-content">
    <img src="" alt="">
    <span class="lightbox-close">&times;</span>
</div>
`;

document.body.appendChild(lightbox);

const lightboxImg =
lightbox.querySelector("img");

const lightboxClose =
lightbox.querySelector(".lightbox-close");

galleryItems.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src = img.src;

});

});

lightboxClose.addEventListener("click",()=>{

lightbox.classList.remove("show");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});

/* ==========================
   Search Artwork
========================== */

const searchBox =
document.querySelector(".gallery-search");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const keyword =
searchBox.value.toLowerCase();

document
.querySelectorAll(".gallery-item")
.forEach(item=>{

const text =
item.innerText.toLowerCase();

item.style.display =
text.includes(keyword)
? "block"
: "none";

});

});

}

/* ==========================
   Lazy Loading Images
========================== */

const lazyImages =
document.querySelectorAll("img");

const lazyObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img = entry.target;

img.classList.add("loaded");

lazyObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

lazyObserver.observe(img);

});

/* ==========================
   Toast Notification
========================== */

function showToast(message){

const toast =
document.createElement("div");

toast.className = "toast";

toast.innerHTML = message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},300);

},3000);

}

/* ==========================
   Upload Button Notification
========================== */

document
.querySelectorAll(".btn-primary")
.forEach(btn=>{

btn.addEventListener("click",()=>{

showToast("Fitur berhasil dijalankan");

});

});

/* ==========================
   Floating Upload Button
========================== */

const uploadFloat =
document.createElement("a");

uploadFloat.href = "#upload";

uploadFloat.className =
"floating-upload";

uploadFloat.innerHTML =
'<i class="fa-solid fa-cloud-arrow-up"></i>';

document.body.appendChild(uploadFloat);

/* ==========================
   Dark Light Mode
========================== */

const themeButton =
document.createElement("div");

themeButton.className =
"theme-toggle";

themeButton.innerHTML =
'<i class="fa-solid fa-moon"></i>';

document.body.appendChild(themeButton);

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

themeButton.innerHTML =
'<i class="fa-solid fa-sun"></i>';

localStorage.setItem("theme","light");

}else{

themeButton.innerHTML =
'<i class="fa-solid fa-moon"></i>';

localStorage.setItem("theme","dark");

}

});

/* ==========================
   Remember Theme
========================== */

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light-mode");

themeButton.innerHTML =
'<i class="fa-solid fa-sun"></i>';

}

/* ==========================
   Keyboard Shortcuts
========================== */

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("show");

}

});

/* ==========================
   Welcome Toast
========================== */

setTimeout(()=>{

showToast("Selamat datang di ArtVerse");

},1500);
