// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy,value) => {
  const result = data.filter(type => type.type[filterBy].includes(value));
  return result;
};
// export const sortData = (data,sortBy,sortOrder) => {
//   return [];
// };
