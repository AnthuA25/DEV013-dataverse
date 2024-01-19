import { filterData, sortData, computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";
//import Chart from 'chart.js/auto';

const containerCard = document.querySelector("ul");
const sortOrderSelect = document.getElementById("name");
const filterType = document.getElementById("type");
const form = document.getElementById("formFilters");
const searchPokemons = document.querySelector("input[type='text']");
const modal = document.getElementById("myBtn");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector(".fa-xmark");
const stadistic = document.getElementById("myChart");
//overlay
const overlay = document.querySelector(".overlay");
// const infoPokemons = document.querySelector("dl[itemprop='pokemons']")
// console.log(infoPokemons)

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
  // console.log(containerCard.querySelectorAll("dd[itemprop='image']"));
};

// boton pokemons search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentData = [];
  const value = searchPokemons.value;
  const findPokemons = data.find((data) => data.name.toLowerCase() === value);
  if (findPokemons) {
    currentData.push(findPokemons);
    renderCurrentData(currentData);
    searchPokemons.value = "";
  } else {
    const container = document.createElement("section");
    container.classList.add("container-modal");
    overlay.classList.toggle("overlay-active");
    container.innerHTML = `<i class="fa-solid fa-xmark"></i>
                            <img src="./assets/icono-cerrar.png" alt="Error"/>
                            <p>Pokemon no encontrado</p>`;
    container.querySelector(".fa-xmark").addEventListener("click", () => {
      container.remove();
      overlay.classList.toggle("overlay-active");
    });
    document.querySelector("body").appendChild(container);
    searchPokemons.value = "";
  }
});

// Resetear al estado original
const resetbutton = document.querySelector('[type="reset"]');
resetbutton.addEventListener("click", () => {
  currentData = originalData;
  containerCard.innerHTML = renderItems(currentData);
  const resultchart = computeStats(originalData);
  const names = resultchart.names;
  const nroPokemons = resultchart.nroPokemons;
  updateChart(names, nroPokemons);
});

// alfabetic order
sortOrderSelect.addEventListener("change", () => {
  const sortOrder = sortOrderSelect.value;
  currentData = sortData(currentData, "name", sortOrder);
  renderCurrentData();
});

// Filter Type
filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  currentData = filterData(originalData, "typeName", selectedFilter);
  currentData = sortData(currentData, "name", sortOrderSelect.value);
  renderCurrentData();
});

const updateChart = (names, nroPokemons) => {
  // eslint-disable-next-line no-undef
  new Chart(stadistic, {
    type: "bar",
    data: {
      labels: names,
      datasets: [
        {
          label: "# of Pokemons for type",
          data: nroPokemons,
          borderWidth: 1,
          backgroundColor: "#9BD0F5",
          font: {
            size: 14,
            weight: "bolder",
          },
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

const resultchart = computeStats(originalData);
const names = resultchart.names;
const nroPokemons = resultchart.nroPokemons;
updateChart(names, nroPokemons);

// info

renderCurrentData();

// console.log(pokemonsAverage(originalData))
