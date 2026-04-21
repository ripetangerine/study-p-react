import CheckBox from "./CheckBox.jsx"
import Button from "./Button.jsx"

export default function TodoItem({todo}){
    return(
        // todo.isCompleted가 true면 " todo__item--complete" 넣긔, false ""
    <li className={`todo__item ${todo.isCompleted ? "todo__item--complete":""}`}>
        <CheckBox type="checkbox" className="todo__check" id={todo.id}>{todo.text}</CheckBox>
        
        <Button className="todo__button todo__button--edit">🔮</Button>
        <Button className="todo__button todo__button--delete">🗑️</Button>
    </li>
    )
}