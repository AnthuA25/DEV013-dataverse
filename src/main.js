import { filterData,sortData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from "./data/dataset.js";

const containerCard = document.querySelector("#root");
const sortOrderSelect=document.getElementById('name'); 
const filterType = document.querySelector(
  "select[data-testid='select-filter']"
);

const searchPokemons = document.querySelector("input[type='text']");

// pokemons search
searchPokemons.addEventListener("input",() =>{
  const newPokemons = [];
  const value  = searchPokemons.value;
  const findPokemons =  data.find(data => data.name.toLowerCase() === value)
  if(findPokemons){
    newPokemons.push(findPokemons);
    containerCard.innerHTML = renderItems(newPokemons);
  }
})


//alfabetic order
sortOrderSelect.addEventListener('change',()=>{
  const sortOrder=sortOrderSelect.value;
  const sortedData=sortData(data, 'name',sortOrder);
  containerCard.innerHTML = renderItems(sortedData);
  
});

// name filter
filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  const resultFilter = filterData(data,'type_name',selectedFilter);
  containerCard.innerHTML = renderItems(resultFilter);
});


//reset button
const resetbutton= document.querySelector("[type=\"reset\"]");
resetbutton.addEventListener('click',()=>{
  containerCard.innerHTML = renderItems(data);
});

containerCard.innerHTML = renderItems(data);
