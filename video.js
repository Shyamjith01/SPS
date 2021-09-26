const spsimg = document.querySelector(".spsimg");
const spsvideo = document.querySelector(".spsvideo");

const contentplacer = () =>{
    spsimg.classList.add("hidden");
    spsvideo.classList.remove("hidden");

    spsvideo.setAttribute(
        "src",
        "https://www.youtube.com/watch?v=I9QGnNvrmoY?autoplay=1"
    );
}

spsimg.addEventListener("click",contentplacer);