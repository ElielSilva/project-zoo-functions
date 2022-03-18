const data = require('../data/zoo_data');

// const filtro = (...entratsOp) => ({
//   NE: data.species.filter((item) => item.location === 'NE')
//     .reduce((acc, curr) => { acc.push(curr.name); return acc; }, []),
//   NW: data.species.filter((item) => item.location === 'NW')
//     .reduce((acc, curr) => { acc.push(curr.name); return acc; }, []),
//   SE: data.species.filter((item) => item.location === 'SE')
//     .reduce((acc, curr) => { acc.push(curr.name); return acc; }, []),
//   SW: data.species.filter((item) => item.location === 'SW')
//     .reduce((acc, curr) => { acc.push(curr.name); return acc; }, []),
// });

// const filtroNames = () => ({
//   NE: [data.species.filter((item) => item.location === 'NE')
//     .reduce((acc, curr) => { acc[curr.name] = curr.residents
//     .reduce((acc1, curr1) => { acc1.push(curr1.name); return acc1; }, []); return acc;
//     }, {})],
//   NW: [data.species.filter((item) => item.location === 'NW')
//     .reduce((acc, curr) => { acc[curr.name] = curr.residents
//     .reduce((acc1, curr1) => { acc1.push(curr1.name); return acc1; }, []); return acc;
//     }, {})],
//   SE: [data.species.filter((item) => item.location === 'SE')
//     .reduce((acc, curr) => { acc[curr.name] = curr.residents
//     .reduce((acc1, curr1) => { acc1.push(curr1.name); return acc1; }, []); return acc;
//     }, {})],
//   SW: [data.species.filter((item) => item.location === 'SW')
//     .reduce((acc, curr) => { acc[curr.name] = curr.residents
//     .reduce((acc1, curr1) => { acc1.push(curr1.name); return acc1; }, []); return acc;
//     }, {})],
// });

function getAnimalMap(options) {
  // if (!options) {
  //   return filtro();
  // }
  // if (Object.values(options).some((item) => item === 'female')) {
  //   return filtro();
  // }
  // if (options.includesNames === true) {
  //   return filtroNames();
  // }
}

module.exports = getAnimalMap;
