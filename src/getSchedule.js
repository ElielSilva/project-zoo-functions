const data = require('../data/zoo_data');

const animalsNames = data.species.map((item) => item.name);
const daysNames = Object.keys(data.hours);

const horarioTotal = () => {
  const lista = data.species;
  return daysNames
    .reduce((acc, curr, index) => {
      if (curr === 'Monday') {
        acc[curr] = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
        return acc;
      }
      acc[curr] = {
        officeHour: `Open from ${data.hours[daysNames[index]].open}
        am until ${data.hours[daysNames[index]].close}pm`,
        exhibition: lista.reduce((acc1, curr1) => {
          if (curr1.availability.some((item) => item === daysNames[index])) {
            acc1.push(curr1.name);
            return acc1;
          } return acc1;
        }, [])/* ((item) => item === daysNames[index])) */ };
      return acc;
    }, {});
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  } if (daysNames.includes(scheduleTarget)) {
    const retorno = horarioTotal();
    return { [scheduleTarget]: retorno[scheduleTarget] };
  } if (animalsNames.includes(scheduleTarget)) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return horarioTotal();
}

module.exports = getSchedule;
