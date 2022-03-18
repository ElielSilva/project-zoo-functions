const data = require('../data/zoo_data');

const dayN = Object.keys(data.hours);
const animalsNames = data.species.map((item) => item.name);

const horarioTotal = () => {
  const lista = data.species;
  return dayN
    .reduce((acc, curr, i) => {
      if (curr === 'Monday') {
        acc[curr] = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
        return acc;
      }
      acc[curr] = {
        officeHour: `Open from ${data.hours[dayN[i]].open}am until ${data.hours[dayN[i]].close}pm`,
        exhibition: lista.reduce((acc1, curr1) => {
          if (curr1.availability.some((item) => item === dayN[i])) {
            acc1.push(curr1.name);
            return acc1;
          } return acc1;
        }, [])/* ((item) => item === dayN[i])) */ };
      return acc;
    }, {});
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  } if (dayN.includes(scheduleTarget)) {
    const retorno = horarioTotal();
    return { [scheduleTarget]: retorno[scheduleTarget] };
  } if (animalsNames.includes(scheduleTarget)) {
    return data.species.find((animal) => animal.name === scheduleTarget).availability;
  }
  return horarioTotal();
}

module.exports = getSchedule;
