import "./todolist.css"
import { useState } from "react"
import TodoHeader from "./components/TodoHeader.jsx" //import 추가 안했어서 오류 났었음!!
import TodoAdder from "./components/TodoAdder.jsx" 
import TodoList from "./components/TodoList.jsx"

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
            // todos, 
            new Todo(
                Date.now(),//id: 고유 ID 시간을 이용 == new Date().getTime()과 같음
                text, //text: 할일 내용
                false //isCompleted: 할일의 완료 여부, 기본값은 false
            )
        ]);
    }
    function toggleTodo(id){
        //let o1 = {a:10, b:20} b수정을 하고 싶음 o1.b=200 변함 깊은 복사 얕은 복사 이렇게 하면 안 먹음.
        //o1을 스프레드 연산자로 o2에 넣으면 새로 만들어지고 o1과 o2는 다른 객체가 됨 -> 얕은 복사
        //o1=o2할 시에 주소값을 공유해서 o1과 o2는 같은 객체가 됨 -> 깊은 복사 
        setTodos((todos)=>
            
            //todos에서 하나식 꺼내서, todo, 꺼낸 todo의 id와 파라미터의 id가 같다면,
            //새 객체 만들어서 todo값 복사, 속성 수정
            todos.map((todo)=>
                todo.id===id?{...todo, isCompleted: !todo.isCompleted} : todo
            )
        )
    }

    function deleteTodo(id){
        // todos를 하나씩 todo꺼내서 
        setTodos((todos)=>{

        });
    }

    return (
        <div className="todo">

            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
        </div>
    )
}

export default TodoListApp 
//const [count, setCount] = usetState(0)
//count : number
// 값이 바뀐 -> 리액트 인식 -> 값 새로 업데이트

//const [todos, settodos] = userState([])
//todos : list 
//3학년 2반 리스트 위치로 값 변경함
//->3학년 3반 교실 로 바꿔야 아 바뀌었구나! 함 교실에 한 명씩 옮기고 새로운 학생 추가 -> 그래야 react가 바뀌었다고 인식