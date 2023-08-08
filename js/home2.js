const productsRow = document.querySelector( ".main-row" );
const productsCol = document.querySelector( ".new-row" );
const productsCol1 = document.querySelector( ".old-row" );
function productCol( product ) {
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

function Card( pr1 ) {
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

function footerCard( pr2 ) {
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
  let card = productCol( product );
  productsRow.append( card );
} );

products.map( ( pr1 ) => {
  let card = Card( pr1 );
  productsCol.append( card );
} );

products.map( ( pr2 ) => {
  let card = footerCard( pr2 );
  productsCol1.append( card );
} );
let discountProducts = products.filter( ( pr ) => pr.discount ).slice( -4 );

let newProducts = products.slice( -4 );

let popularProducts = products
  .toSorted( ( a, b ) => a.rating - b.rating )
  .slice( -4 );


// section
let col6 = document.querySelector( "section .row" )
function Col6( product ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-6";

  const productCardBody = document.createElement( "div" );
  productCardBody.className = "col-3";

  const productImg = document.createElement( "div" );
  productImg.className = 'col-3'
  const cardimg = document.querySelector( "img" )
  cardimg.src = product.image;
  // productImg.alt = product.name;
  productCard.append( productCardBody, productImg );
  productCardBody.appendChild( cardimg )

  const productCardFlex = document.createElement( "h3" );
  const productCardFooter = document.createElement( "div" );
  productCardFooter.className = "product-card-footer";
  const productCardflex = document.createElement( "div" );
  productCardflex.className = "product-card-flex";
  const productCardflex1 = document.createElement( "div" );
  productCardflex1.className = "product-card-flex1";

  const productTitle = document.createElement( "h3" );
  const productTitleText = document.createTextNode( product.about );


  // card
  const productAbout = document.createElement( "p" );
  const productAb = document.createTextNode( product.text );
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
  // productCardFooter.prepend( productBtn )
  productImg.prepend( productAbout );
  // productCardflex1.prepend( productPrice );
  productImg.prepend( productTitle );
  productCardflex.prepend( productcost );
  productCardFooter.prepend( cardAbout )
  // div solish
  productCard.append( productImg, productCardBody );

  return productCard;
}

card.map( ( product ) => {
  let card = Col6( product );
  col6.append( card );
} );

let newCard = card.filter( ( pr ) => pr.discount ).slice( -2 );

let prvCard = card.slice( -2 );

let cardSecetion = card
  .toSorted( ( a, b ) => a.about - b.about )
  .slice( -2 );


// section about
let aboutRow = document.querySelector( "section.about .container .row" );
console.log( aboutRow );
// function articlesCard( artcl ) {
const href = document.createElement( "a" );
href.href = "../Статьи.html";
const articleCol = document.createElement( "div" );
articleCol.className( "col-4" );
const articleImg = document.createElement( "img" );
articleImg.src = artcl.image;
const data = document.createElement( "p" );
data.className = "date";
data.innerHTML = articles.data;
const articleTitle = document.createElement( "h3" );
articleTitle.innerHTML = artcl.name;
const text = document.createElement( "p" );
text.innerHTML = artcl.text;
const btn = document.createElement( "button" )
btn.type = "submit";
btn.innerHTML = `<a href = "../Статьи.html">${artcl.btn}</a> `;
// adding
articleCol.prepend( btn );
articleCol.prepend( text );
articleCol.prepend( articleTitle );
articleCol.prepend( data );
articleCol.prepend( articleImg )
// main add
href.append( articleCol );
console.log( href );
  // return artcl;
// }

// articles.map( ( artcl ) => {
//   let artclCol = articlesCard( artcl );
//   aboutRow.append( artclCol );
// } )
// let artCard = artclCol.filter( ( pr ) => pr.data ).slice( -3 );

// let add = artclCol.slice( -3 );

// let addCol = artclCol
//   .toSorted( ( a, b ) => a.name - b.name )
//   .slice( -3 );