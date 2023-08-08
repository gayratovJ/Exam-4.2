const headRow = document.querySelector( "header .row" );
console.log( headRow );

function Col6( product ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-6";

  const productCardBody = document.createElement( "img" );
  productCardBody.src = product.img;

  const productImg = document.createElement( "p" );
  productImg.innerHTML = product.name
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
  // productTitle.appendChild( productTitleText );
  // productAbout.appendChild( productAb );
  // productcost.appendChild( productCost );
  // cardAbout.appendChild( cardAboutTag );

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
  productCard.append( productCardBody, productImg );

  return productCard;
}

col_6.map( ( product ) => {
  let card = Col6( product );
  headRow.append( card );
} );

let newCard = card.filter( ( pr ) => pr.discount ).slice( -2 );

let prvCard = card.slice( -2 );

let cardSecetion = card
  .toSorted( ( a, b ) => a.about - b.about )
  .slice( -2 );