const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((Animal) => Animal.id === firstAnimalId).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(firstAnimal);
}

module.exports = getOldestFromFirstSpecies;
