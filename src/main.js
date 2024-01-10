import { filterData, sortData} from './dataFunctions.js';
import { renderItems } from './view.js';

import data from "./data/dataset.js";
// import Chart from 'chart.js/auto';

const containerCard = document.querySelector("#root");
const sortOrderSelect = document.getElementById('name');
const filterType = document.querySelector("select[data-testid='select-filter']");
const searchPokemons = document.querySelector("input[type='text']");
const modal = document.getElementById("myBtn");
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.fa-xmark');
const stadistic = document.getElementById('myChart');


// Modal
modal.addEventListener("click",() =>{
  modalContent.classList.toggle("modal-active");
});
close.addEventListener("click",() => {
  modalContent.classList.toggle("modal-active");
});

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

new Chart(stadistic, {
  type: 'bar',
  data: {
    labels: ['Electrico', 'Fuego', 'Volador', 'Agua', 'Bicho', 'Dragon','Veneno','Tierra','Roca','Psiquico','Planta','Oscuro','Normal','Lucha','Hada','Acero'],
    datasets: [{
      label: 'Cantidad de Pokemones',
      data: [3,4,3,1,4,5,3,4,2,3,4,3,3,4,2,1],
      borderWidth: 1,
      backgroundColor: '#9BD0F5',
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


renderCurrentData();



// console.log(pokemonsAverage(originalData))
