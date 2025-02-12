const temperature = document.querySelector('.tem');
const place = document.querySelector('.loca');

const success = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = '6f16cc02104129b25654b5735c68fa59';
  let URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(URL);
  fetch(URL).then((response) => {
    return response.json();
  }).then((data)=>{
    place.textContent = (data.name);
    temperature.textContent = (Math.floor(data.main.temp - 273.15));
  });
}


const error = () => {
  console.log('error');
}

const weathrt_init = () => {
  if(!navigator.geolocation){
    console.log('현재 위치를 가져올 수 없습니다.');
  }else{
    console.log('위치 파악 중.....');
    navigator.geolocation.getCurrentPosition(success,error);
  }
}

weathrt_init();