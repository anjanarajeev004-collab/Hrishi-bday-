const pages = document.querySelectorAll(".page");

let currentPage = 0;

/* PASSWORD */
function checkPassword(){

    const pass =
    document.getElementById("password").value;

    if(pass === "kallakannan"){

        const music =
        document.getElementById("bgMusic");

        music.play().catch(()=>{});

        showPage(1);

    }else{

        alert("wrong password 😭");
    }
}

/* SHOW PAGE */

function showPage(index){

    pages.forEach(page => {

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage = index;
}

/* NEXT PAGE */

function nextPage(){

    if(currentPage < pages.length-1){

        showPage(currentPage + 1);
    }
}

/* PREVIOUS PAGE */

function prevPage(){

    if(currentPage > 1){

        pages[currentPage].classList.remove("active");

        currentPage--;

        pages[currentPage].classList.add("active");
    }
   
}

/* TAP NEXT */

document.addEventListener("click",(e)=>{

    if(
        e.target.tagName === "INPUT" ||
        e.target.tagName === "BUTTON"
    ){
        return;
    }

    if(currentPage > 0 &&
       currentPage < pages.length-1){

        showPage(currentPage + 1);
    }
});

/* FLOATING BUBBLES */

function createBubble(){

    const bubble = document.createElement("div");

    bubble.classList.add("bubble");

    const img = document.createElement("img");

    const photos = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "5.jpg",
    "6.jpg",
    "8.jpg",
    "9.jpg",
    "11.jpg",
    "14.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "22.jpg",
    "23.jpg",
    "24.jpg",
    "25.jpg",
    "26.jpg",
    "27.jpg",
    "28.jpg",
    "29.jpg",
    "30.jpg"
];

const randomPhoto =
photos[Math.floor(Math.random()*photos.length)];

img.src = randomPhoto;

    img.onerror = () => {
    img.src = "5.jpg";
    };

    bubble.appendChild(img);

    const size =
    Math.random()*55 + 60;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    bubble.style.left =
    Math.random()*100 + "vw";

    bubble.style.animationDuration =
    Math.random()*8 + 8 + "s";

    const pagesWithBubbles =
    ["page2","page3","page4"];

    pagesWithBubbles.forEach(id=>{

        const page =
        document.getElementById(id);

        const clone =
        bubble.cloneNode(true);

        page.appendChild(clone);

        setTimeout(()=>{
            clone.remove();
        },16000);
    });
}

setInterval(createBubble,700);

/* PLAY VOICE ON FIRST PAGE */
window.addEventListener("load", () => {

    const voice =
    document.getElementById("voiceMessage");

    voice.play().catch(() => {

        document.addEventListener("click", () => {
            voice.play();
        }, { once:true });

    });

});




