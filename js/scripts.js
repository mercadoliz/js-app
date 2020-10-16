let pokemonList = [
  {
    name: "vulpix",
    height: 0.06,
    types: ["flash fire", "drought"],
  },
  {
    name: "charmander",
    height: 0.06,
    types: ["blaze", "solar power"],
  },
  {
    name: "ponyta",
    height: 1,
    types: ["flash fire", "flame body", "runaway"],
  },
];

//list all pokemon's name, height, and types
for (let i = 0; i < pokemonList.length; i++) {
  document.write("#" + pokemonList[i].name + " " + pokemonList[i].height + "");
  //creates conditional that if a pokemon is a certain height a phrase will be added on
  if (pokemonList[i].height >= 1.0) {
    document.write(
      "(height: " + pokemonList[i].height + ") - Wow that's HUGE!</br>"
    );
  } else if (pokemonList[i].height < 1.0)
    document.write("(height: " + pokemonList[i].height + ")</br>");
}

let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();
