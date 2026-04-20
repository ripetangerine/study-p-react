import "./todolist.css"
import TodoHeader from "./components/TodoHeader.jsx"
import TodoAdder from "./components/TodoAdder.jsx"
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";

class Todo{
    constructor(id, text, isCompleted){
        this.id=id;
        this.text=text;
        this.isCompleted=isCompleted; // true or false
    }
}
function TodoListApp() {
    const [todos, setTodos] = useState([]) // Todo 객체들의 배열 (기본값은 빈 배열)
    function addTodo(text){
        //이전 todos에 newTodo 만들어서 추가하자 -> 그것을 setTodos() 하자
        setTodos((todos)=>[
            ...todos,  //dotos에 있는 item을 다 꺼내서 새로운 리스트에서 시작
            todos, 
            new Todo(
                Date.now(),//id: 고유 ID 시간을 이용 == new Date().getTime()과 같음
                text, //text: 할일 내용
                false //isCompleted: 할일의 완료 여부, 기본값은 false
            )
        ]);
    }
    return (
        <div className="todo">

            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

//const [count, setCount] = usetState(0)
//count : number
// 값이 바뀐 -> 리액트 인식 -> 값 새로 업데이트

//const [todos, settodos] = userState([])
//todos : list 
//3학년 2반 리스트 위치로 값 변경함
//->3학년 3반 교실 로 바꿔야 아 바뀌었구나! 함 교실에 한 명씩 옮기고 새로운 학생 추가 -> 그래야 react가 바뀌었다고 인식

export default TodoListApp 