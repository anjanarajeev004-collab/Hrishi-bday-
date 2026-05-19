let currentPage = 1;

const totalPages = 5;

const music =
document.getElementById("bgMusic");

/* PASSWORD */

function unlockSite(){

    const password =
    document.getElementById("password").value;

    if(password === "kallakannan"){

        document.getElementById("page1")
        .classList.remove("active");

        currentPage = 2;

        document.getElementById("page2")
        .classList.add("active");

        music.play();

        startBubbles();
    }

    else{

        alert("wrong password 🥲");
    }
}

/* PAGE CHANGE */

document.addEventListener("click",(e)=>{

    if(
        e.target.closest(".password-box")
    ) return;

    if(currentPage >= 2 &&
       currentPage < totalPages){

        document.getElementById(
        `page${currentPage}`
        ).classList.remove("active");

        currentPage++;

        document.getElementById(
        `page${currentPage}`
        ).classList.add("active");
    }
});

/* FLOATING BUBBLES */

const photos = [

"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpg",
"11.jpg",
"12.jpg",
"13.jpg",
"14.jpg",
"15.jpg",
"16.jpg",
"17.jpg",
"18.jpg",
"19.jpg",
"20.jpg",
"21.jpg",
"25.jpg"

];

function createBubble(){

    if(currentPage === 5) return;

    const bubble =
    document.createElement("div");

    bubble.classList.add("bubble");

    const size =
    Math.random()*25 + 45;

    bubble.style.width =
    size + "px";

    bubble.style.height =
    size + "px";

    bubble.style.left =
    Math.random()*100 + "vw";

    bubble.style.animationDuration =
    (Math.random()*6 + 8) + "s";

    const img =
    document.createElement("img");

    img.src =
    photos[Math.floor(
    Math.random()*photos.length
    )];

    bubble.appendChild(img);

    document.body.appendChild(bubble);

    setTimeout(()=>{

        bubble.remove();

    },14000);
}

function startBubbles(){

    setInterval(createBubble,600);
}