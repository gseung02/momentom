const todoKey = 'TODOLIST';
let todo_list = [];
const todoForm = document.querySelector('#todoForm');
const list = document.querySelector('.t-box');
const inputTodo = document.querySelector('#todoForm>input');
const ul = document.querySelector('.f-todolist');
const todoBtn = document.querySelector('.todo>a');
const mainTodo = document.querySelector('.todo-list');
const trashBtn = document.querySelector('.tb-head>a');

//스토리지 저장
const storageSave = ()=>{
  const strobj = JSON.stringify(todo_list);
  localStorage.setItem(todoKey,strobj);
}

//스토리지 불러오기
const storageLoad = ()=>{
  return localStorage.getItem(todoKey);
}

//리스트에 각각의 키, 값, 체크여부 역할 부여하기
const saveTodoList = (num,txt,flag)=>{
  const obj = {id:num,value:txt,check:flag};
  todo_list.push(obj);
  storageSave();
}

//todo 버튼을 누르면
todoBtn.addEventListener('click',()=>{
  todoBtn.classList.toggle('back');
  list.classList.toggle('hidden');
});

//checkbox 버튼을 누르면
const handlerCheck = (event)=>{
  //event.target을 이용하여 원하는 대상 선택
  const changeID = event.target.parentElement.id;
  const check = event.target.checked;
  updateCheckBox(changeID,check);
}

//원하는 대상 찾기
const updateCheckBox = (id,check)=>{
  for(let i=0; i<todo_list.length; i++){
    if(todo_list[i].id == id){
      todo_list[i].check = check;
      break;
    }
  }
  storageSave();
}

//삭제시키시 위해 만든 id 선택 함수
const handlerDelBtn = (event)=>{
  const delID = event.target.parentElement.id;
  const li = document.querySelectorAll('.f-todolist>li');
  todo_list = todo_list.filter((item,idx)=>{
    if( delID == item.id ){
      li[idx].remove();
    }
    return delID != item.id;
  });

  event.target.parentElement.remove();
  storageSave();  

}


//삭제시키시 위해 만든 check 선택 함수
const handlerTrashBtn = () => {
  //1. 배열을 하나 만든다.
  //todo_list를 처음부터 끝까지 반복하면서 
  //체크가  true 일경우 - list 삭제
  //체크가   false일 경우는 1번에서 만들 배열에 추가
  //1번 배열을 todo_list에 저장
  let checkList = [];
  const li = document.querySelectorAll('.f-todolist>li');
  const main = document.querySelectorAll('.todo-list>li')
  for(let i=0; i<todo_list.length;i++){
    if(todo_list[i].check == false){
      checkList.push(todo_list[i]);
    } else {
      li[i].remove();
      main[i].remove();
    }
  }
  todo_list = checkList;
  storageSave();
}

//로그인 후 todo박스에 있는 li들 메인 화면에 보이는 todo로 가져오기
const showTodoList = ()=>{
  for( let i=0 ; i<todo_list.length ; i++ ){
    console.log( todo_list[i] );
    addTodoList(mainTodo, todo_list[i].id,todo_list[i].value,todo_list[i].check,false);
  }
}

//li 추가하기
const addTodoList = (ul,id,value,check, flag)=>{
  const newLi = document.createElement('li');
  newLi.id = id;
  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  newInput.checked = check;
  newInput.addEventListener('change',handlerCheck);
  const newSpan = document.createElement('span');
  newSpan.textContent = value;
  newLi.appendChild(newInput);
  newLi.appendChild(newSpan);
  if( flag === false ){
    const newBtn = document.createElement('button');
    newBtn.textContent = 'x';
    newBtn.classList.add('x');
    newBtn.addEventListener('click',handlerDelBtn);
    newLi.appendChild(newBtn);
  }
  ul.appendChild(newLi);  
  if( flag ) {
    saveTodoList(id,value,check);
  }  
}

//todoinput에 값이 입력되면
const todoSubmit = (event)=>{
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  let time = Date.now();
  addTodoList(ul,time,value,false,true);
  addTodoList(mainTodo,time,value,false,false);
}

//실행이 되자마자
const todo_init = ()=>{
  let loadTodos = storageLoad();
  if(loadTodos){
    const obj = JSON.parse(loadTodos);
    obj.forEach((item)=>{
      addTodoList(ul,item.id,item.value,item.check,true);
    });
    showTodoList();
  }
  todoForm.addEventListener('submit',todoSubmit);
  trashBtn.addEventListener('click',handlerTrashBtn);
}

//처음 실행되는 함수
todo_init();
