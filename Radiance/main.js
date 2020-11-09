let prev = document.getElementById("prev")
let next = document.getElementById("next")
let hero = document.getElementById("hero")
let thumbnail = document.getElementsByClassName("thumbnail")

let backgroundImg = [
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
]

let i=0;
next.onclick = () => {
    thumbnail[i].classList.remove("active")
    i = (i + 1)%backgroundImg.length;
    hero.style.backgroundImage = `url('${backgroundImg[i]}')`
    thumbnail[i].classList.add("active")
    
}
prev.onclick = () => {
    thumbnail[i].classList.remove("active")
    i = (i +backgroundImg.length - 1)%backgroundImg.length;
    hero.style.backgroundImage = `url('${backgroundImg[i]}')`
    thumbnail[i].classList.add("active")
   
   
}