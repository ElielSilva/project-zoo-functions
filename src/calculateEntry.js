const data = require('../data/zoo_data');

const redux = (item) => item.reduce((acc, curr) => {
  if (curr.age < 18) { return acc + 20.99; }
  if (curr.age >= 18 && curr.age < 50) { return acc + 49.99; }
  return acc + 24.99;
}, 0);

function countEntrants(entrants) {
  return { child: entrants.filter((item) => item.age < 18).length,
    adult: entrants.filter((item) => item.age >= 18 && item.age < 50).length,
    senior: entrants.filter((item) => item.age >= 50).length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const redu = redux(entrants);
  return parseFloat(redu.toFixed(2));
}

module.exports = { calculateEntry, countEntrants };
