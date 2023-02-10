setInterval(() => {
  let date = new Date();
  let today = date.getDay()
  let hour = date.getHours()
  if (hour < 10) {
    hour = `0${hour}`
  }
  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  let seconds = date.getSeconds()
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  const dayOfTheWeek = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
  }

  let jsDayElement = document.getElementById('jsDay').innerText = dayOfTheWeek[today];

  let jsHourElement = document.getElementById('jsHour').innerText = hour;

  let jsMinutesElement = document.getElementById('jsMinutes').innerText = minutes;

  let jsSecondsElement = document.getElementById('jsSeconds').innerText = seconds;
}, 1000);
