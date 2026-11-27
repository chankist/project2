import { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

 /*<TodoItem id={item.id} isDone={item.isDone} content={item.content} createDate={item.createDate} />*/
/*<TodoItem key={item.id} {...item} />*/

const TodoList = ({todoList, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult = () => {//search 결과가 리스트에 저장되는 함수
        if(search === "") {//참->모든 할일(item)이 todoList에 포함되어야함
            //검색 기능을 사용하지 않으므로 모든 할일이 들어 있는 필터링하지 않은 todoList를 반환
            return todoList;
        } else {//검색어로 필러링한 todoList 반환
            return todoList.filter((item) => item.content.includes(search));
        }

    }

    const onKeyDown = (e) => {//엔터키 입력 이벤트 핸들러
        //ESC키의 코드번호 27
        if(e.keyCode === 27) {//엔터키의 코드번호 13
            setSearch("");// search 값 초기화-> 검색란이 빈칸으로 초기화
        }
    }

    return (
        <div className="TodoList">
            <h4>TodoList 🌱</h4>
            <input value={search} onKeyDown={onKeyDown} onChange={onChangeSearch} className="searchbar" placeholder="검색어를 입력하세요"/>
            <div className='list_wrapper'>
                {
                    getSearchResult().map((item) => (
                       <TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete}/>
                    ))

                }
            </div>
        </div>
    );
}

export default TodoList;