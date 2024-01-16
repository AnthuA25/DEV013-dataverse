// Aqui puedes agregar los datos que necesites para tus pruebas
// al menos debe tener uno que se llame "data"

export const data = [
  {
    id: "1",
    name: "Bulbasaur",
    type: {
      typeName: ["Grass", "Poison"],
      typeImage: ["./assets/planta.png", "./assets/veneno.png"],
    },
    image: "./assets/Bulbasaur..png",
    weaknesses: {
      weaknessesName: ["Fire", "Flying", "Ice", "Psychic"],
      weaknessesImage: [
        "./assets/fuego.png",
        "./assets/volador.png",
        "./assets/hielo.png",
        "./assets/psiquico.png",
      ],
    },
    baseStats: {
      hp: "45",
      attack: "49",
      defense: "49",
      speed: "45",
    },
    height: "0.7", // en metros
    category: "Seed",
    ability: "Overgrow",
    weight: "6.9", // en kilogramos
  },
  {
    id: "4",
    name: "Charmander",
    type: {
      typeName: ["Fire"],
      typeImage: ["./assets/fuego.png"],
    },
    image: "./assets/Charmander.png",
    weaknesses: {
      weaknessesName: ["Water", "Rock", "Ground"],
      weaknessesImage: [
        "./assets/agua.png",
        "./assets/roca.png",
        "./assets/tierra.png",
      ],
    },
    baseStats: {
      hp: "39",
      attack: "52",
      defense: "43",
      speed: "65",
    },
    height: "0.6",
    category: "Lizard",
    ability: "Blaze",
    weight: "8.5",
  },
  {
    id: "5",
    name: "Charmeleon",
    type: {
      typeName: ["Fire"],
      typeImage: ["./assets/fuego.png"],
    },
    image: "./assets/Charmaleon.png",
    weaknesses: {
      weaknessesName: ["Water", "Rock", "Ground"],
      weaknessesImage: [
        "./assets/agua.png",
        "./assets/roca.png",
        "./assets/tierra.png",
      ],
    },
    baseStats: {
      attack: "64",
      defense: "58",
      speed: "80",
    },
    height: "1.1",
    category: "Flame",
    ability: "Blaze",
    weight: "19.0",
  },
];
