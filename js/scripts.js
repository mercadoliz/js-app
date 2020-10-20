let pokemonRepository = (function () {
  let pokemonList = [
    {
      name: "vulpix",
      height: 1,
      types: ["flash fire", "drought"],
    },
    {
      name: "charmander",
      height: 6,
      types: ["blaze", "solar power"],
    },
    {
      name: "ponyta",
      height: 12,
      types: ["flash fire", "flame body", "runaway"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  return {
    getAll: getAll,
    add: add,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "eve", height: 2, types: ["speed"] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  let size = "";
  if (pokemon.height > 10) {
    size = "It's a big pokemon!";
  } else if (pokemon.height < 5) {
    size = "It's a small pokemon!";
  } else {
    size = "It's an average pokemon!";
  }
  document.write(
    '<div class="box">' +
      pokemon.name +
      " (height:" +
      pokemon.height +
      ")" +
      size +
      "<br>" +
      pokemon.types +
      "<br>" +
      "</div>"
  );
});
