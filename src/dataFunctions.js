// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//data=data, sortBy=name, sorOrder=asc, desc
export const sortData = (data, sortBy, sortOrder) => {
  if (data.length === 0) {
    return false;
  }
  const sortedData = data; //create copy array
  // console.log(sortedData);

  sortedData.sort((a, b) => {
    const nameA = a[sortBy].toLowerCase();
    const nameB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      return nameA.localeCompare(nameB);
      //console.log(a.name.localeCompare(b.name))
    } else if (sortOrder === "desc") {
      return nameB.localeCompare(nameA);
      //console.log(b.name.localeCompare(a.name))
    }
  });

  return sortedData;
};

export const filterData = (data, filterBy, value) => {
  const result = data.filter((type) => type.type[filterBy].includes(value));
  return result;
};

export const computeStats = (originalData) => {
  // const result = data.filter(type => type.type.type_name.includes(value)).length;
  // return result;
  let names = [];
  //const nroPokemons = [];
  // eslint-disable-next-line no-undef
  const uniqueType = new Set();
  for (let i = 0; i < originalData.length; i++) {
    const types = originalData[i].type.typeName;
    //console.log("pokk"+types);
    for (let j = 0; j < types.length; j++) {
      uniqueType.add(types[j]);
      //console.log("uniq"+uniqueType);
    }
  }
  
  names = Array.from(uniqueType);
  
  /* let sametypes = 0;
  for (let i = 0; i < names.length; i++) {
    sametypes = originalData.filter((type) =>
      type.type.typeName.includes(names[i])
    ).length;
    // console.log(sametypes);
    nroPokemons.push(sametypes);
  }  */

  //originalData.filter((pokemon) => pokemon.type.typeName.includes(typeName)).length
  const nroPokemons = names.map((typeName) =>
    originalData.reduce((accumulator, pokemon) => {
      if (pokemon.type.typeName.includes(typeName)) {
        return accumulator + 1;
      }
      return parseInt(accumulator);
    }, 0)
  );
  return{
    names,nroPokemons
  }
};
