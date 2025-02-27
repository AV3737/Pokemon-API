
const fetchdata= async function fetchdata(){
  const pokemonname=document.getElementById("pokemonname").value;
  const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonname}`);
  // console.log(response);
  const getdata=await response.json();
 const pokemonsprite=getdata.sprites.front_default;
 const imageElement= document.getElementById("Pokemonsprite")
 imageElement.src=pokemonsprite;
 imageElement.style.display="block";
  
}
