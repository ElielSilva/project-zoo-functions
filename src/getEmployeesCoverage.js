const data = require('../data/zoo_data');

function seachIdAnimal(params) {
  return data.species.filter((x, index) => params.find((y) => y === x.id));
}

const padrao = data.employees.reduce((acc, curr) => {
  acc.push({ id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: seachIdAnimal(curr.responsibleFor).map((x) => x.name),
    locations: seachIdAnimal(curr.responsibleFor).map((x) => x.location) });
  return acc;
}, []);

function getEmployeesCoverage(entrets) {
  if (!entrets) return padrao;
  if (entrets.name) {
    const { name } = entrets;
    return padrao.find((item) => item.fullName.split(' ').includes(name));
  }
  if (entrets.id) {
    const { id } = entrets;
    if (id !== 'Id inválido') {
      return padrao.find((item) => item.id === id);
    }
    throw Error('Informações inválidas');
  }
}
console.log(getEmployeesCoverage({ id: 'Stephanie' }));

module.exports = getEmployeesCoverage;
