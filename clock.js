const clock = document.querySelector('.clock');
const getClock = () => {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2,'0');
  const minute = String(today.getMinutes()).padStart(2,'0');
  clock.textContent = `${hour}:${minute}`;
}
getClock();
setInterval(getClock,1000);