const data = require('../data/zoo_data');

// console.log(data.species.find((employee) => employee.id === '0938aa23-f153-4937-9f88-4858b24d6bce'));

function getOldestFromFirstSpecies(id) {
  const firstAnimalId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstAnimal = data.species.find((Animal) => Animal.id === firstAnimalId).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(firstAnimal);
}

module.exports = getOldestFromFirstSpecies;
