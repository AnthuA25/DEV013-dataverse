import { filterData,sortData} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from "./data/dataset.js";


const containerCard = document.querySelector("#root");
const sortOrderSelect=document.getElementById('name'); 
const filterType = document.querySelector(
  "select[data-testid='select-filter']"
);
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

filterType.addEventListener("change", () => {
  const selectedFilter = filterType.value;
  const resultFilter = filterData(data,'type_name',selectedFilter);
  containerCard.innerHTML = renderItems(resultFilter);
});



containerCard.innerHTML = renderItems(data);

// Botón de busqueda