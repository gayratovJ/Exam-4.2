// const productsRow = document.querySelector( ".products-row" );
// const searchInput = document.querySelector( ".search-input" );
// const totalProducts = document.querySelector( ".total-products" );

// let search = "";

// function getProductCard( images, id, name, price, description ) {
//   return `
//     <div class="product-card">
//       <div class="product-card-body">
//         <img
//           src="${images[ 0 ]}"
//           alt="${name}"
//         />
//       </div>
//       <div class="product-card-footer">
//         <h3><a href="product.html">${name}</a></h3>
//         <p><i> ${price} </i></p>
//         <p> ${description} </p>
//         <button><b> Add to the cart </b></button>
//       </div>
//     </div>
//   `;
// }

// function getProducts() {
//   let results = products.filter(
//     ( pr ) =>
//       pr.name.toLowerCase().includes( search ) ||
//       pr.description.toLowerCase().includes( search )
//   );

//   totalProducts.textContent = results.length;

//   productsRow.innerHTML = "";

//   if ( results.length !== 0 ) {
//     results.map( ( pr ) => {
//       productsRow.innerHTML += getProductCard( pr );
//     } );
//   } else {
//     productsRow.innerHTML = `<div>
//       No products
//     </div>`;
//   }
// }

// getProducts();

// searchInput.addEventListener( "keyup", function () {
//   search = this.value.trim().toLowerCase();
//   getProducts();
// } );


// // drop map
// function getCategory( pr ) {
//   return `
//     <div class="product-card">
//       <div class="product-card-body">
//         <img
//           src="${pr.images[ 0 ]}"
//           alt="${pr.name}"
//         />
//       </div>
//       <div class="product-card-footer">
//         <h3><a href="product.html">${pr.name}</a></h3>
//         <p><i> ${pr.price} </i></p>
//         <p> ${pr.description} </p>
//         <button><b> Add to the cart </b></button>
//       </div>
//     </div>
//   `;
// }

// const cardProduct = document.querySelector( ".drop li a" )

// const cardRow = document.querySelector( "header .col-8" )

// if ( cardProduct == pr.category ) {
//   cardRow.innerHTML += getCategory( pr );
// } else {
//   cardRow.innerHTML = `<div>
//       No products
//     </div>`;
// }

// console.log( cardRow );



// // 
// function addToCart( id ) {
//   let product = products.find( ( pr ) => pr.id === id );
//   let check = cart.find( ( pr ) => pr.id === id );

//   if ( check ) {
//     cart = cart.map( ( pr ) => {
//       if ( pr.id === id ) {
//         pr.quantity++;
//       }
//       return pr;
//     } );
//   } else {
//     product.quantity = 1;
//     cart.push( product );
//   }
//   localStorage.setItem( "cart", JSON.stringify( cart ) );
//   getProducts();
//   getCartTotal();
// }

const productsRow = document.querySelector( ".products-row" );
const searchInput = document.querySelector( ".search-input" );
const totalProducts = document.querySelector( ".total-products" );

let search = "";

function getProductCard( { id, images, name, description, price } ) {
  let check = cart.find( ( pr ) => pr.id === id );

  return `
    <div class="product-card">
      <div class="product-card-body">
        <img
          src="${images[ 0 ]}"
          alt="${name}"
        />
      </div>
      <div class="product-card-footer">
        <h3><a href="product.html">${name}</a></h3>
        <p> ${description} </p>
        <p><i> ${price} </i></p>
        <button class="${check ? "active-cart" : ""
    }" onClick="addToCart(${id})"><b> Add to the cart </b></button>
      </div>
    </div>
  `;
}

function getProducts() {
  let results = products.filter(
    ( pr ) =>
      pr.name.toLowerCase().includes( search ) ||
      pr.description.toLowerCase().includes( search )
  );

  totalProducts.textContent = results.length;

  productsRow.innerHTML = "";

  if ( results.length !== 0 ) {
    results.map( ( pr ) => {
      productsRow.innerHTML += getProductCard( pr );
    } );
  } else {
    productsRow.innerHTML = `<div>
      No products
    </div>`;
  }
}

getProducts();

searchInput.addEventListener( "keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
} );

function addToCart( id ) {
  let product = products.find( ( pr ) => pr.id === id );
  let check = cart.find( ( pr ) => pr.id === id );

  if ( check ) {
    cart = cart.map( ( pr ) => {
      if ( pr.id === id ) {
        pr.quantity++;
      }
      return pr;
    } );
  } else {
    product.quantity = 1;
    cart.push( product );
  }
  localStorage.setItem( "cart", JSON.stringify( cart ) );
  getProducts();
  getCartTotal();
}
