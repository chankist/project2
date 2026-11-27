import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header.js';
import TodoEditor from './component/TodoEditor.js';
import TodoList from './component/TodoList.js';

function App() {

  const idRef = useRef(3);

  const mockTodo = [//가짜 할일 데이터 리스트
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createDate: new Date().getTime(),
    },
    
    {
      id: 1,
      isDone: false,
      content: "빨래널기",
      createDate: new Date().getTime(),
    },
    
    {
      id: 2,
      isDone: false,
      content: "노래 연습히기",
      createDate: new Date().getTime(),
    }    

];

  const [todoList, setTodoList] = useState(mockTodo);//todoList -> 할일들의 리스트 -> 객체들의 배열

  //새 할일(객체)을 만들어주는 함수 ->할일 리스트에 추가
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,//체크박스 (초기값 체크되지 않은 상태->false)
      content,
      createDate: new Date().getTime(),
    };
    setTodoList([newItem, ...todoList]);// 기존 할일 리스트에 새로운 할일 객체 추가
    idRef.current = idRef.current += 1;
    //할일 리스트에 넣은 후 id값 1증가 시킴 -> 다음 할일 객체의 id값
  };

    //체크박스 수정 기능을 추가해주는 함수
    const onUpdate = (targetId) => {//매개변수로 이벤트 핸들러를 호출한 할일객체(item)의 id값 선언
      //1)이벤트가 발생한 할일 객체 찾기
      //2)이벤트가 발생한 할일 객체의 isDone 값 가져오기
      //3)isDone 값 반대로 바꾸기(!isDone)
      setTodoList(
      todoList.map((item) => {
        if(item.id === targetId){//참 -> 이벤트가 발생한 할일 객체 찾기 성공
          //...item => id, content, isDone, createDate, isDone : !isDone
          return {...item, isDone : !item.isDone};
        }else {
          return item;//체크 이벤트가 발생하지 않은 할일 객체들은 그대로 배열로 넣어주기위해서 반환
        }
      })
    );
   };

   //할일 객체 삭제 함수 -> 삭제해야할 할일 객체를 제외하는 필터링 함수
   const onDelete = (targetId) => {
    setTodoList(
    todoList.filter((item) => 
      item.id !== targetId//삭제해야할 id 할일 객체를 제외한 나머지 할일 객체만 배열로 생성
    )
  );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList  todoList={todoList} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
