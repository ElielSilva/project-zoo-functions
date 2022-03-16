const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return data.employees.find((employe) => employe.firstName === employeeName || employe.lastName === employeeName);
}

module.exports = getEmployeeByName;
