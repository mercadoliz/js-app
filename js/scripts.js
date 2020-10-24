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

  function addListItem(pokemon) {
    let ul = document.querySelector(".pokemon-list");
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("my-class");
    button.innerText = pokemon.name;
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
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
  pokemonRepository.addListItem(pokemon);
});
