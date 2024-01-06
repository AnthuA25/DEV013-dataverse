import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";


const containerCard = document.querySelector("#root");
const filterType = document.querySelector(
  "select[data-testid='select-filter']"
);


filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  const resultFilter = filterData(data,'type_name',selectedFilter);
  containerCard.innerHTML = renderItems(resultFilter);
});


containerCard.innerHTML = renderItems(data);

// Botón de busqueda