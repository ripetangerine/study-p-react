import Button from "./Button.jsx"
import Checkbox from "./Checkbox.jsx"
export default function TodoItem({todo, toggleTodo}){
    return(
        //todo.iscompleted가 treu면 "todo__item--complete" false ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <Checkbox 
            id={todo.id} 
            checked={todo.isCompleted}
            onChange={()=>toggleTodo(todo.id)}
            
            >{todo.text}</Checkbox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
    )
}