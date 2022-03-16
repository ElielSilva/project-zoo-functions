const data = require('../data/zoo_data');

console.log(data);

function getSchedule(...scheduleTarget) {
  if (!scheduleTarget) {
    const meta = data.hours.reduce((acc, curr) => {
      data.hours[curr] = {'officeHour' : `'Open from ${data.hours['Thursday'].open} until ${data.hours['Thursday'].open}'`};
      'exhibition' = {}
    }, {});
    return 
  }
}

module.exports = getSchedule;
