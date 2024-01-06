// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  return 'example';
};

//data=data, sortBy=name, sorOrder=asc, desc
export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = [...data]; //create copy array
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
};
