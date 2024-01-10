import {
  filterData,
  sortData
} from './dataFunctions.js';
import {
  renderItems
} from './view.js';

import data from "./data/dataset.js";
//import Chart from 'chart.js/auto';

const containerCard = document.querySelector("#root");
const sortOrderSelect = document.getElementById('name');
const filterType = document.querySelector("select[data-testid='select-filter']");
const searchPokemons = document.querySelector("input[type='text']");
const modal = document.getElementById("myBtn");
const modalContent = document.querySelector('.modal-content');
const close = document.querySelector('.fa-xmark');
const stadistic = document.getElementById('myChart');
//overlay
const overlay = document.querySelector('.overlay');


// Modal
modal.addEventListener("click", () => {
  modalContent.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
});
close.addEventListener("click", () => {
  modalContent.classList.toggle("modal-active");
  overlay.classList.toggle("overlay-active");
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
searchPokemons.addEventListener("input", () => {
  currentData = [];
  const value = searchPokemons.value;
  const findPokemons = data.find(data => data.name.toLowerCase() === value)
  if (findPokemons) {
    currentData.push(findPokemons);
    renderCurrentData(currentData);
  }
})

// Reset button
const resetbutton = document.querySelector("[type=\"reset\"]");
resetbutton.addEventListener('click', () => {
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

let names = [];
const nroPokemons = [];
const uniqueType = new Set();
for (let i = 0; i < originalData.length; i++) {
  const types = originalData[i].type.type_name;
  //console.log("pokk"+types);
  for (let j = 0; j < types.length; j++) {
    uniqueType.add(types[j]);
    //console.log("uniq"+uniqueType);

  }

}

names = Array.from(uniqueType);

let sametypes = 0;
for (let i = 0; i < names.length; i++) {
  sametypes = data.filter(type => type.type.type_name.includes(names[i])).length;
  console.log(sametypes);

  nroPokemons.push(sametypes);
}
console.log(nroPokemons);


new Chart(stadistic, {
  type: 'bar',
  data: {
    labels: names,
    datasets: [{
      label: '# of Votes',
      data: nroPokemons,
      borderWidth: 1,
      backgroundColor: '#9BD0F5',
      font: {
        size: 14,
        weight: 'bolder',
      }
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
