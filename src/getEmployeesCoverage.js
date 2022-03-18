const data = require('../data/zoo_data');

function seachIdAnimal(params) {
  return data.species.filter((x, index) => params.find((y) => y === x.id));
}

// const erroPush = () => {
//   if () {
//     throw new Error('Informações inválidas');
// }
const padrao = data.employees.reduce((acc, curr) => {
  acc.push({ id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: seachIdAnimal(curr.responsibleFor).map((x) => x.name),
    locations: seachIdAnimal(curr.responsibleFor).map((x) => x.location) });
  return acc;
}, []);

function getEmployeesCoverage(entrits) {
  if (!entrits) {
    return padrao;
  } if (Object.keys(entrits).includes('name')) {
    return padrao.find((item) => item.fullName.split(' ').includes(entrits.name));
  } if (Object.keys(entrits).includes('id')) {
    return padrao.find((item) => item.id === entrits.id);
  }
}
// console.log(getEmployeesCoverage())

module.exports = getEmployeesCoverage;
