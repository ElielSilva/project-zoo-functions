const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some(({ managers }) => managers.some((item) => item === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees
      .filter((obj) => obj.managers.some((managers) => managers === managerId))
      .reduce((acc, curr) => {
        acc.push(`${curr.firstName} ${curr.lastName}`);
        return acc;
      }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
