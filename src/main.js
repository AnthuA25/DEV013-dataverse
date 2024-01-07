import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const containerCard = document.querySelector("#root");
const filterType = document.querySelector(
  "select[data-testid='select-filter']"
);
const searchPokemons = document.querySelector("input[type='text']");

// Botón de busqueda
searchPokemons.addEventListener("input",() =>{
  const newPokemons = [];
  const value  = searchPokemons.value;
  const findPokemons =  data.find(data => data.name.toLowerCase() === value)
  // console.log(newPokemons.push(findPokemons))
  if(findPokemons){
    newPokemons.push(findPokemons);
    containerCard.innerHTML = renderItems(newPokemons);
  }
})


filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  const resultFilter = filterData(data,'type_name',selectedFilter);
  containerCard.innerHTML = renderItems(resultFilter);
});


containerCard.innerHTML = renderItems(data);
