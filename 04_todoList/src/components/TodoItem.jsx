import CheckBox from "./CheckBox.jsx"
import Button from "./Button.jsx"

export default function TodoItem({todos}){
    return(
    <li>
        <CheckBox type="checkbox" className="todo__check" id="1"/>
        {todos}
        <Button className="todo__button todo__button--edit">수정해</Button>
        <Button className="todo__button todo__button--edit">삭제해</Button>
    </li>
    )
}