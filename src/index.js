const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];



const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  let x=pokemons.length;
  console.log(`I have ${x} pokemons!`)
}
countThem()


/* const orderThem = () => {
  // order the pokemons alphabetically
  let pokemonsOrdered = pokemons.sort(); 
  console.log(pokemonsOrdered);
};
orderThem() */

const flipThem = () => {
  // reverse the order of the pokemons
  let pokemonsReverse = pokemons.toReversed();
  console.log(pokemonsReverse);
};
flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  let pokemonsBigger =[];
  for(let i=0; i<pokemons.length; i++){
    let pokemonsBig = pokemons[i].toUpperCase();
    pokemonsBigger.push(pokemonsBig);
  }
  //console.log(pokemonsBigger);
};
makeThemBig()



const onlyTheBs = () => {
  // only print the pokemons that starts with B
  let pokemonsStartB = [];
  for(let i=0; i<pokemons.length; i++){
    let pokemonsB = pokemons[i].startsWith("B");
    if (pokemonsB){
      pokemonsStartB.push(pokemons[i]);
    }
      
  }
  console.log(pokemonsStartB) 
};
onlyTheBs();




/* const notTheCs = () => {
  // remove all pokemons that starts with C
  const arrayWithoutC = [];
  for(let i =0; i<pokemons.length;i++){
    let withoutC = pokemons[i].startsWith("C"); 
    if (!withoutC){
      arrayWithoutC.push(pokemons[i]);
    } 
  }
  console.log (arrayWithoutC);
};

notTheCs(); */

const notTheC =()=>{
  let noC =[];
  pokemons.forEach((el)=>{
    if(!el.startsWith("C")){
      noC.push(el);
    }
  })
  console.log (noC);
}
notTheC();




const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
  pokemons.forEach ((array, index) => { 
    console.log (`number ${index} - ${array}`)
  })
};
nameAndIdThanks ()

/* const catchPokemon = () => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  
  pokemons.unshift("lightning");
  console.log(pokemons);
};
catchPokemon(); */

const didICatchIt = (x) => {
  // check the pokemons to see if a specific pokemon is in the array
  
  let checkIt = pokemons.includes(x)
  console.log(checkIt);
}
didICatchIt ("Weedle");


const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
  pokemons.splice(2,0,"Clefairy");
  console.log(pokemons);
};
addInThirdPlace ()

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  pokemons.sort((a,b)=>(b.length - a.length))
  console.log(pokemons[0])

};
theLongestName ()
