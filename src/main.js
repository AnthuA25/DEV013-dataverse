import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from "./data/dataset.js";

const containerCard = document.querySelector("#root");
const sortOrderSelect = document.getElementById('name');
const filterType = document.querySelector("select[data-testid='select-filter']");
const searchPokemons = document.querySelector("input[type='text']");


// create copy
const originalData = data;
// current data
let currentData = originalData;

//
const renderCurrentData = () => {
  containerCard.innerHTML = renderItems(currentData);
};

// boton pokemons search
searchPokemons.addEventListener("input",() =>{
  currentData = [];
  const value  = searchPokemons.value;
  const findPokemons =  data.find(data => data.name.toLowerCase() === value)
  if(findPokemons){
    currentData.push(findPokemons);
    renderCurrentData(currentData);
  }
})

// Reset button
const resetbutton= document.querySelector("[type=\"reset\"]");
resetbutton.addEventListener('click',()=>{
  containerCard.innerHTML = renderItems(data);
});

// alfabetic order
sortOrderSelect.addEventListener('change', () => {
  const sortOrder = sortOrderSelect.value;
  currentData = sortData(currentData, 'name', sortOrder);
  renderCurrentData();
});

// Filter Type
filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  currentData = filterData(originalData, 'type_name', selectedFilter);
  currentData = sortData(currentData, 'name', sortOrderSelect.value);
  renderCurrentData();
});


renderCurrentData();

