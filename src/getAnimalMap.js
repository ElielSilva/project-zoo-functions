const data = require('../data/zoo_data');

const initialValue = { NE: [], NW: [], SE: [], SW: [] };

const filterForLocation = () =>
  data.species.reduce((acc, curr) => {
    if (acc[curr.location].includes(curr.name)) {
      return acc;
    }
    acc[curr.location].push(curr.name);
    return acc;
  }, initialValue);

const filtroNamesSexSorted = (params) =>
  data.species.reduce((acc, curr) => {
    const names = curr.residents
      .filter((sp) => {
        if (params.sex) return sp.sex === params.sex;
        return true;
      })
      .map((sp) => sp.name);
    if (params.sorted) {
      names.sort();
    }
    const specie = {};
    specie[curr.name] = names;

    acc[curr.location].push(specie);
    return acc;
  }, initialValue);

function getAnimalMap(options) {
  if (!options || !('includeNames' in options)) {
    return filterForLocation();
  }
  if ('sex' in options && 'sorted' in options) {
    return filtroNamesSexSorted(options);
  }
  return filtroNamesSexSorted(options);
}

module.exports = getAnimalMap;
