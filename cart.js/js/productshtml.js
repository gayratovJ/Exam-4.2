const showImg = document.querySelector("header .flex .col-2");
const CardImg = document.querySelector("header .flex col-10 img");

showImg.addEventListener("click",(e) => {
  e.target.src && (CardImg.src = e.target.src);
})