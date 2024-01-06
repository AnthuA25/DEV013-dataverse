import { filterData,sortData} from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

// console.log(example, renderItems(data), data);

const containerCard = document.querySelector("#root");
const sortOrderSelect=document.getElementById('name'); 

//reset button
const resetbutton= document.querySelector("[type=\"reset\"]");
resetbutton.addEventListener('click',()=>{
  containerCard.innerHTML = renderItems(data);
});

//alfabetic order
sortOrderSelect.addEventListener('change',()=>{
  const sortOrder=sortOrderSelect.value;
  const sortedData=sortData(data, 'name',sortOrder);
  containerCard.innerHTML = renderItems(sortedData);

});




containerCard.innerHTML = renderItems(data);
