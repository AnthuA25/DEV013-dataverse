import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const cards=document.querySelector('#root');
cards.innerHTML=renderItems(data);


console.log(example, renderItems(data), data);
