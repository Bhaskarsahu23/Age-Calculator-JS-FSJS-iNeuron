const container = document.querySelector('.container');
const error = document.querySelector('.error');
const dob = document.querySelector('#dob');
const age = document.querySelector('.age');
dob.addEventListener('change', displayAge);

function getAge() {
  return dob.value;
}

function calcAge() {
  const currDate = new Date();
  const userDate = new Date(getAge());
  const currTime = currDate.getTime();
  const totaldays = Math.floor(
    (currTime - userDate.getTime()) / (1000 * 3600 * 24)
  );
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth() + 1;
  const [userYear, userMonth] = getAge().split('-');
  const dobYear = currYear - userYear;
  const dobMonth = currMonth - userMonth;
  const dobDays = Math.floor(totaldays / 30);

  return [dobYear, dobMonth, dobDays];
}
function displayAge() {
  const [year, month, days] = calcAge();

  document.querySelector('#years').textContent = year;
  document.querySelector('#months').textContent = month;
  document.querySelector('#days').textContent = days;
}
