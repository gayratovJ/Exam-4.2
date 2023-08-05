const productsRow = document.querySelector( ".row" );
const productsCol = document.querySelector( "header .card-row" );
const productsCol1 = document.querySelector( "header .card-row1" );
console.log( productsCol );
function getProductCard( product ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-3";

  const productCardBody = document.createElement( "div" );
  productCardBody.className = "img";

  const productImg = document.createElement( "img" );
  productImg.src = product.images[ 0 ];
  productImg.alt = product.name;

  productCardBody.appendChild( productImg );

  const productCardFlex = document.createElement( "div" );
  productCardFlex.className = "product-Flex";
  const productCardFooter = document.createElement( "div" );
  productCardFooter.className = "product-card-footer";
  const productCardflex = document.createElement( "div" );
  productCardflex.className = "product-card-flex";
  const productCardflex1 = document.createElement( "div" );
  productCardflex1.className = "product-card-flex1";

  const productTitle = document.createElement( "h3" );
  const productTitleText = document.createTextNode( product.name );


  // card
  const productAbout = document.createElement( "p" );
  const productAb = document.createTextNode( product.category );
  // card
  const productcost = document.createElement( "p" );
  productcost.className = "Price";
  const productCost = document.createTextNode( product.rating );
  // card
  const cardAbout = document.createElement( "p" );
  cardAbout.className = "text";
  const cardAboutTag = document.createTextNode( product.description )

  // qoshish
  productTitle.appendChild( productTitleText );
  productAbout.appendChild( productAb );
  productcost.appendChild( productCost );
  cardAbout.appendChild( cardAboutTag );

  // card
  const productPrice = document.createElement( "p" );
  productPrice.className = "head";
  const productpr = document.createTextNode( product.price );
  const productBtn = document.createElement( "button" );
  const pbtn = document.createElement( "p" )
  pbtn.className = "btn"
  pbtn.innerHTML = "В корзину";
  // qoshish
  productPrice.appendChild( productpr );

  // ichiga solish
  productBtn.prepend( pbtn )
  productCardFooter.prepend( productBtn )
  productCardflex1.prepend( productAbout );
  productCardflex1.prepend( productPrice );
  productCardflex.prepend( productTitle );
  productCardflex.prepend( productcost );
  productCardFooter.prepend( cardAbout )
  // div solish
  productCard.append( productCardBody, productCardFlex, productCardflex1, productCardflex, productCardFooter );
  productCardFlex.append( productCardflex1, productCardflex )

  return productCard;
}

function getProductCol( pr1 ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-3";

  const productCardBody = document.createElement( "div" );
  productCardBody.className = "img";

  const productImg = document.createElement( "img" );
  productImg.src = pr1.images[ 0 ];
  productImg.alt = pr1.name;

  productCardBody.appendChild( productImg );

  const productCardFlex = document.createElement( "div" );
  productCardFlex.className = "product-Flex";
  const productCardFooter = document.createElement( "div" );
  productCardFooter.className = "product-card-footer";
  const productCardflex = document.createElement( "div" );
  productCardflex.className = "product-card-flex";
  const productCardflex1 = document.createElement( "div" );
  productCardflex1.className = "product-card-flex1";

  const productTitle = document.createElement( "h3" );
  const productTitleText = document.createTextNode( pr1.name );


  // card
  const productAbout = document.createElement( "p" );
  const productAb = document.createTextNode( pr1.category );
  // card
  const productcost = document.createElement( "p" );
  productcost.className = "Price";
  const productCost = document.createTextNode( pr1.rating );
  // card
  const cardAbout = document.createElement( "p" );
  cardAbout.className = "text";
  const cardAboutTag = document.createTextNode( pr1.description )

  // qoshish
  productTitle.appendChild( productTitleText );
  productAbout.appendChild( productAb );
  productcost.appendChild( productCost );
  cardAbout.appendChild( cardAboutTag );

  // card
  const productPrice = document.createElement( "p" );
  productPrice.className = "head";
  const productpr = document.createTextNode( pr1.price );
  const productBtn = document.createElement( "button" );
  const pbtn = document.createElement( "p" )
  pbtn.className = "btn"
  pbtn.innerHTML = "В корзину";
  // qoshish
  productPrice.appendChild( productpr );

  // ichiga solish
  productBtn.prepend( pbtn )
  productCardFooter.prepend( productBtn )
  productCardflex1.prepend( productAbout );
  productCardflex1.prepend( productPrice );
  productCardflex.prepend( productTitle );
  productCardflex.prepend( productcost );
  productCardFooter.prepend( cardAbout )
  // div solish
  productCard.append( productCardBody, productCardFlex, productCardflex1, productCardflex, productCardFooter );
  productCardFlex.append( productCardflex1, productCardflex )

  return productCard;
}

function getProductCol( pr2 ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-3";

  const productCardBody = document.createElement( "div" );
  productCardBody.className = "img";

  const productImg = document.createElement( "img" );
  productImg.src = pr2.images[ 0 ];
  productImg.alt = pr2.name;

  productCardBody.appendChild( productImg );

  const productCardFlex = document.createElement( "div" );
  productCardFlex.className = "product-Flex";
  const productCardFooter = document.createElement( "div" );
  productCardFooter.className = "product-card-footer";
  const productCardflex = document.createElement( "div" );
  productCardflex.className = "product-card-flex";
  const productCardflex1 = document.createElement( "div" );
  productCardflex1.className = "product-card-flex1";

  const productTitle = document.createElement( "h3" );
  const productTitleText = document.createTextNode( pr2.name );


  // card
  const productAbout = document.createElement( "p" );
  const productAb = document.createTextNode( pr2.category );
  // card
  const productcost = document.createElement( "p" );
  productcost.className = "Price";
  const productCost = document.createTextNode( pr2.rating );
  // card
  const cardAbout = document.createElement( "p" );
  cardAbout.className = "text";
  const cardAboutTag = document.createTextNode( pr2.description )

  // qoshish
  productTitle.appendChild( productTitleText );
  productAbout.appendChild( productAb );
  productcost.appendChild( productCost );
  cardAbout.appendChild( cardAboutTag );

  // card
  const productPrice = document.createElement( "p" );
  productPrice.className = "head";
  const productpr = document.createTextNode( pr2.price );
  const productBtn = document.createElement( "button" );
  const pbtn = document.createElement( "p" )
  pbtn.className = "btn"
  pbtn.innerHTML = "В корзину";
  // qoshish
  productPrice.appendChild( productpr );

  // ichiga solish
  productBtn.prepend( pbtn )
  productCardFooter.prepend( productBtn )
  productCardflex1.prepend( productAbout );
  productCardflex1.prepend( productPrice );
  productCardflex.prepend( productTitle );
  productCardflex.prepend( productcost );
  productCardFooter.prepend( cardAbout )
  // div solish
  productCard.append( productCardBody, productCardFlex, productCardflex1, productCardflex, productCardFooter );
  productCardFlex.append( productCardflex1, productCardflex )

  return productCard;
}

products.map( ( product ) => {
  let card = getProductCard( product );
  productsRow.append( card );
} );

products.map( ( pr1 ) => {
  let card = getProductCol( pr1 );
  productsCol.append( card );
} );

products.map( ( pr2 ) => {
  let card = getProductCol( pr2 );
  productsCol1.append( card );
} );
let discountProducts = products.filter( ( pr ) => pr.discount ).slice( -4 );

let newProducts = products.slice( -4 );

let popularProducts = products
  .toSorted( ( a, b ) => a.rating - b.rating )
  .slice( -4 );


// function BtnClick() {
//   document.button.classList.toggle( "onclickBtn" );
// }

// productBtn.onclick = BtnClick;