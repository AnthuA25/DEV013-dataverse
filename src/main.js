import { filterData,sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// console.log(example, renderItems(data), data);

const containerCard = document.querySelector("#root");

containerCard.innerHTML = renderItems(data);
