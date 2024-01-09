// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//data=data, sortBy=name, sorOrder=asc, desc
export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = data; //create copy array
  console.log(sortedData);


  sortedData.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (sortOrder === 'asc') {
      return nameA.localeCompare(nameB);
      //console.log(a.name.localeCompare(b.name))

    } else if (sortOrder === 'desc') {
      return nameB.localeCompare(nameA);
      //console.log(b.name.localeCompare(a.name))
    }

  })

  return sortedData;
}

export const filterData = (data, filterBy, value) => {
  const result = data.filter(type => type.type[filterBy].includes(value));
  return result;

};

export const pokemonsAverage  = (data,value) => {
  const result = data.filter(type => type.type.type_name.includes(value)).length;
  return result;
};
