export const renderItems = (data) => {
  //console.log(data)
  let html = "";
  const getypecolor =(type)=>{
    /* switch(type.toLowerCase()){ */
    let lower='';
    if(type){
      lower=type.toLowerCase();
    }
    switch(lower){
    case 'fire':
      return '#C33030';
    case 'grass':
      return '#55B870';
    case 'poison':
      return '#7D3EA4';
    case 'water':
      return '#5594b8'
    case 'electric':
      return '#aab855';
    case 'fairy':
      return '#b85567';
    case 'ground':
      return '#b89055';
    case 'fighting':
      return '#db9731'; 
    case 'normal':
      return '#30a3c7';
    case 'flying':
      return '#cbbba3';
    case 'ghost':
      return '#3b0b46'; 
    default:
      return 'black';
    }
  
  }

  data.forEach(
    (pokemon) => {
      const types=pokemon.type.split('/');
      let background;
      let style;

      if(types.length===1){
        background = getypecolor(types[0]);
        style= `style="background-color: ${background};"`
      }else{
        const color1=getypecolor(types[0]);
        const color2=getypecolor(types[1]);
        background=`linear-gradient(${color1}, ${color2})`;
        style= `style="background: ${background};"`
      }

      return (html += `
    <dl itemtype="pokemons" >
        <dd itemprop="type" ${style}>${pokemon.type};</dd>
        <dd itemprop="image"><img src=${pokemon.image} alt="${pokemon.name}"></dd>
        <dd itemprop="name">${pokemon.name}</dd>
        <dt>Debilidades</dt>
        <dd itemprop="weaknesses">${pokemon.weaknesses}</dd>
    </dl>
 
  `)
    });
  return html;
}; 

