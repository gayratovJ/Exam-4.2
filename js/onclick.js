
// let btn = document.querySelector( "p.btn" );
let but = document.querySelector( "button" )
// let btn1 = document.querySelector( ".product-card:nth-child(2) p.btn" );
let but1 = document.querySelector( ".col-3:nth-child(2) button" )
let but2 = document.querySelector( ".col-3:nth-child(3) button" )
let but3 = document.querySelector( ".col-3:nth-child(4) button" )
function BtnClick() {
  but.classList.toggle( "onclickBtn" )
}
function BtnClick1() {
  but1.classList.toggle( "onclickBtn" );
}
function BtnClick2() {
  but2.classList.toggle( "onclickBtn" );
}
function BtnClick3() {
  but3.classList.toggle( "onclickBtn" );
}
but.onclick = BtnClick;
but1.onclick = BtnClick1;
but2.onclick = BtnClick2;
but3.onclick = BtnClick3;