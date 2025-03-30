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
  let lenght = pokemons.length

  console.log('I have', lenght, 'pokemons')
};

countThem();

const orderThem = () => {
  // order the pokemons alphabetically
  pokemons.sort()
  console.log(pokemons)
};

orderThem();

const flipThem = () => {
  // reverse the order of the pokemons
  pokemons.reverse();
  console.log(pokemons)
};
flipThem();

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  for (let i = 0; i < pokemons.length; i++) {
    pokemons[i] = pokemons[i].toUpperCase();
  }
  console.log(pokemons)
};
makeThemBig();

const onlyTheBs = () => {
  // only print the pokemons that starts with B

  const checkB = (pokemon) => {
    return pokemon.startsWith("B") || pokemon.startsWith("b");
  };

  const results = pokemons.filter(checkB);

  console.log(results);
};

onlyTheBs();

const notTheCs = () => {
  // remove all pokemons that starts with C
  const filtered = pokemons.filter(pokemon => !pokemon.toLowerCase().startsWith("c"));
  console.log(filtered);
};

notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
  pokemons.forEach((pokemon, index) => {
    console.log(`number ${index} - ${pokemon}`);
  });
};

catchPokemon();

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array

  if (pokemons.includes(name)) {
    console.log(`Yes! You caught ${name}!`);
  } else {
    console.log(`Nope, ${name} is not in your Pokédex.`);
  }
};

didICatchIt("Squirtle");

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.

  pokemons.splice(2, 0, "Clefairy");
  console.log(pokemons);
};

addInThirdPlace();

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
  let longest = "";

  pokemons.forEach(pokemon => {
    if (pokemon.length > longest.length) {
      longest = pokemon;
    }
  });

  console.log(`The longest name is: ${longest}`);
};
theLongestName();
