const images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'];
const bg = document.querySelector('.bg');
//백그라운드 이미지 변경 함수
const randomBg = () => {
  const bgNum = Math.floor(Math.random()*images.length);
  bg.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3) ),url(./images/${images[bgNum]})`;
  bg.style.backgroundsize = 'cover';
  bg.style.backgroundposition = 'center';
}
randomBg();