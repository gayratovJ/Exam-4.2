let drop = document.querySelector( ".drop-down i.fa" );
let down = document.querySelector( ".drop" )

function dropdown() {
  down.classList.toggle( "down" )
}

drop.onclick = dropdown;
