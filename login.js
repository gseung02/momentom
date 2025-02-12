const login = document.querySelector('#login');
const inputName = document.querySelector('#login>input:nth-of-type(1)');
const loginBtn = document.querySelector('.loginbtn');
const logoutBtn = document.querySelector('.logoutbtn');
const hello = document.querySelector('.hello');
const hiName = document.querySelector('.hello>h2');
const TODO = document.querySelector('.todo');
const LOGIN_KEY = 'loginname';

// UI 상태 관리 함수
const updateUIState = (isLoggedIn, username = '') => {
  hello.classList.toggle('hidden', !isLoggedIn);
  inputName.classList.toggle('hidden', isLoggedIn);
  loginBtn.classList.toggle('hidden', isLoggedIn);
  logoutBtn.classList.toggle('hidden', !isLoggedIn);
  TODO.classList.toggle('hidden', !isLoggedIn);
  
  if (isLoggedIn) {
    hiName.textContent = `반갑습니다. ${username}님`;
  } else {
    hiName.textContent = '';
    inputName.value = '';
  }
};

// 로컬 스토리지 관리 함수
const saveLoginName = (strInput) => {
  localStorage.setItem(LOGIN_KEY, strInput);
};

const loadLoginName = () => {
  return localStorage.getItem(LOGIN_KEY);
};

// 이벤트 핸들러
const handleLogin = (username) => {
  saveLoginName(username);
  updateUIState(true, username);
};

const handleLogout = () => {
  localStorage.removeItem(LOGIN_KEY);
  updateUIState(false);
};

const handlerSubmit = (event) => {
  event.preventDefault();
  handleLogin(inputName.value);
};

// 이벤트 리스너 설정
const init = () => {
  const loginName = loadLoginName();
  
  if (loginName) {
    updateUIState(true, loginName);
  } else {
    updateUIState(false);
    login.addEventListener('submit', handlerSubmit);
  }

  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const username = inputName.value;
    if (username) {
      handleLogin(username);
    }
  });

  logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    handleLogout();
  });
};

window.onload = init;