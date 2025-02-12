const years = document.querySelector('.year');
const day = document.querySelector('.day');

let today = new Date();
let year = today.getFullYear();
let month = today.getMonth()+1;
let date = today.getDate();

years.textContent = `${year}년`;
day.textContent = `${month-1}월${date}일`;