const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  } if (Object.keys(animal).length === 1) {
    return data.species.find((obj) => obj.name === animal.specie).residents.length;
  } return data.species.find((obj) => obj.name === animal.specie).residents
    .filter((item) => item.sex === animal.sex).length;
}

module.exports = countAnimals;
