const login = document.querySelector('#login');
const inputName = document.querySelector('#login>input:nth-of-type(1)');
const loginBtn = document.querySelector('.loginbtn');
const logoutBtn = document.querySelector('.logoutbtn');
const hello = document.querySelector('.hello');
const hiName = document.querySelector('.hello>h2');
const TODO = document.querySelector('.todo');
const LOGIN_KEY = 'loginname';

const saveLoginName = (strInput) => {
  localStorage.setItem(LOGIN_KEY,strInput);
}

const loadLoginName = () => {
  return localStorage.getItem(LOGIN_KEY);
}

  const printLoginName = (strName) => {
    hiName.textContent = `반갑습니다. ${strName}님`;
    hello.classList.remove('hidden');
    inputName.classList.add('hidden');
    loginBtn.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
    TODO.classList.remove('hidden');
  }

const handlerSubmit = (event) => {
  event.preventDefault();
  printLoginName(inputName.value);
  saveLoginName(inputName.value);
  inputName.value = null;
}

  logoutBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    hello.classList.add('hidden');
    inputName.classList.remove('hidden');
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    TODO.classList.add('hidden');
    inputName.value = null;
  });

const init = () => {
  let loginName = loadLoginName();
  if(loginName){
    printLoginName(loginName);
  }else{
    login.addEventListener('submit',handlerSubmit);
  }
  loginBtn.addEventListener('click',()=>{
    localStorage.removeItem(LOGIN_KEY);
    hello.classList.add('hidden');
    inputName.classList.remove('hidden');
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
    TODO.classList.add('hidden');

    // event.preventDefault(); //초기화
    // hiName.textContent = `반갑습니다. ${inputName.value}님`;
    // hello.classList.remove('hidden');
    // inputName.classList.add('hidden');
    // loginBtn.classList.add('hidden');
    // logoutBtn.classList.remove('hidden');
    // TODO.classList.remove('hidden');
  });
};
window.onload = init;