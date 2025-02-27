
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
// const fetchdata= async function fetchdata() {
//   const pokemondata= document.getElementById("pokemonname").value;
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemondata}?limit=1000`);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
//   const pokemonsprite= data.sprites.front_default;
//   const imageElement= document.getElementById("Pokemonsprite");
//   imageElement.src=pokemonsprite;
//   imageElement.style.display="block";
// }
// CODE:-
// const start= async function start(){
// const response= await fetch(`https://pokeapi.co/api/v2/pokemon`);
// const data=await response.json();
// console.log(data);

// const pokemonsprite=data.sprites.front_default;
// const image= document.getElementById("pokemonimage");
// image.src=pokemonsprite;
// image.style.display="block";
