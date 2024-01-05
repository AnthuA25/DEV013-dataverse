export const renderItems = (data) => {
  let html = "";
  const getypecolor = (color) => {
    let lower = "";
    if (color) {
      lower = color.toLowerCase();
    }
    switch (lower) {
      case "fire":
        return "#C33030";
      case "grass":
        return "#55B870";
      case "poison":
        return "#7D3EA4";
      case "water":
        return "#5594B8";
      case "electric":
        return "#AAB855";
      case "fairy":
        return "#B85567";
      case "ground":
        return "#B89055";
      case "fighting":
        return "#DB9731";
      case "normal":
        return "#30A3C7";
      case "flying":
        return "#CBBBA3";
      case "ghost":
        return "#3B0B46";
      default:
        return "black";
    }
  };

  data.forEach((pokemon) => {
    let type = "";
    let weaknesses = "";

    // Agrega colores dependiendo del tipo que tenga cada pokemon
    const types = pokemon.type.type_name;
    let background;
    let style;

    if (types.length === 1) {
      background = getypecolor(types[0]);
      style = `style="background-color: ${background};"`;
    } else {
      const color1 = getypecolor(types[0]);
      const color2 = getypecolor(types[1]);
      background = `linear-gradient(${color1}, ${color2})`;
      style = `style="background: ${background};"`;
    }
    // --

    // Agrega imagenes del tipo de cada pokemón
    for (let i = 0; i < pokemon.type.type_image.length; i++) {
      type += `<img src=${pokemon.type.type_image[i]} alt=${pokemon.name}/>`;
    }
    // --

    // Agrega imagenes de las debilidades de cada pokemón
    for (let i = 0; i < pokemon.weaknesses.weaknesses_image.length; i++) {
      weaknesses += `<img src=${pokemon.weaknesses.weaknesses_image[i]} alt=${pokemon.name}/>`;
    }
    // --

    return (html += `
  
      <dl itemtype="pokemons" itemscope>
        <dd itemprop="type" ${style}>
          ${type}
        </dd>
        <dd itemprop="image">
          <img src=${pokemon.image} alt=${pokemon.name}/>
        </dd>
        <dd itemprop="name">${pokemon.name}</dd>
        <dt>Debilidades</dt>
        <dd itemprop="weaknesses">${weaknesses}</dd>
      </dl>
    
    `);
  });
  return html;
};
