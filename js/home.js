const card = [
  {
    about: "Оформите карту «Северяночка»",
    text: "И получайте бонусы при покупке в магазинах и на сайте",
    image: [
       "./assets/images/products/Карта лояльности-10 1.png",
    ],
  },
  {
    about: "Покупайте акционные товары",
    text: "И получайте вдвое больше бонусов",
    image: [
      "./assets/images/products/73 1.png",
    ],
  }
];

const col6 = document.querySelector( "section .row" )
console.log( col6 );

function Col6( card ) {
  const productCard = document.createElement( "div" );
  productCard.className = "col-6";

  const productCardBody = document.createElement( "div" );
  productCardBody.className = "col-3";

  const productImg = document.createElement( "div" );
  productImg.className = 'col-3'

  const productTitle = document.createElement( "h3" );
  const productTitleText = document.createTextNode( card.about );


  // card
  const productAbout = document.createElement( "p" );
  const productAb = document.createTextNode( card.text );

  // card
  const productcost = document.createElement( "img" );
  productcost.src = card.images[ 0 ];

  // qoshish
  productTitle.appendChild( productTitleText );
  productAbout.appendChild( productAb );

  // ichiga solish
  productCardBody.prepend( productTitle )
  productCardBody.prepend( productAbout );
  productImg.prepend( productcost )
  // div solish
  productCard.append( productCardBody, productImg, );

  return productCard;
}

card.map( ( card ) => {
  let card = Col6( card );
  col6.append( card );
} );

let newCard = card.filter( ( pr ) => pr.discount ).slice( -2 );

let prevCard = card.slice( -2 );

let cardSecetion = card
  .toSorted( ( a, b ) => a.about - b.about )
  .slice( -2 );
