let drop = document.querySelector( ".drop-down i.fa" );
let down = document.querySelector( ".drop" )
const cartTotal = document.querySelector( "span.cart" );

function dropdown() {
  down.classList.toggle( "down" )
}

drop.onclick = dropdown;

// dark

let darkBtn = document.querySelector( "button.dark" );
console.log( darkBtn );
console.log( darkBtn );
function dark() {
  document.body.classList.toggle( "light" );
}
function btnlight() {
  document.darkBtn.classList.toggle( "dark" )
}


// products
const categoriesMenu = document.querySelector( ".drop .container" );

const categoryMenuToggleBtn = document.querySelector( "main button" );
const categoriesMenuDropdown = document.querySelector( ".drop" );

categoryMenuToggleBtn.addEventListener( "click", () => {
  categoriesMenuDropdown.classList.toggle( "hidden" );
} );

categories.map( ( category ) => {
  categoriesMenu.innerHTML += `<a href="Категории 1440.html?Категории 1440=${category.name}">${category.name}</a>`;
} );

let cartJson = localStorage.getItem( "cart" );

let cart = JSON.parse( cartJson ) || [];

function getCartTotal() {
  cartTotal.textContent = cart.length;
}

getCartTotal();

