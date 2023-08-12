const open_madal = document.querySelector( "button.open-btn" );
const madal_opening = document.querySelector( "body .madal" );
const toogle = document.querySelector( ".toggler" )
open_madal.addEventListener( "click", () => {
  toogle.classList.toggle( "toggler-open" )
} )

function getMadal() {
  toogle.classList.toggle( "toggler-open " )
}

