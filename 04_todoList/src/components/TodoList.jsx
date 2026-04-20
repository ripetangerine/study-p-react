import TodoItemEmpty from "./TodoItemEmpty.jsx"
import TodoItem from "./TodoItem.jsx"
export default function TodoList({todos}){
    return(
        <ul className="todo__list">
            {/* todos가 없으면, todoItemEmptys */}
            {todos.length===0 && <TodoItemEmpty/>}

            {/* todos가 있으면, todoItems에 todos */}
            {todos.length>0 &&
                todos.map((v, i)=><TodoItem key={i} todo={v}/>)}
        </ul>
    )
}