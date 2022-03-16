const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  } if (ids.length === 1) {
    return [data.species.find((item) => ids[0] === item.id)];
  }
  return ids.map((item) => data.species.find((specie) => specie.id === item));
}

module.exports = getSpeciesByIds;
