import Button from "./Button.jsx"
import Checkbox from "./Checkbox.jsx"
import { useState } from "react";

export default function TodoItem({todo, toggleTodo, deleteTodo, editTodo}){ // 현 컴포넌트에서 사용하기에 rest로 안받음
    const [isEditing, setIsEditing] = useState(false); // 수정중인지 아닌지
    const [editText, setEditText] = useState(todo.text); // 수정중인 텍스트

    const handleEditClick = () =>{
        if(!isEditing){ // 수정 시작
            setIsEditing(true);
            setEditText(todo.text);
        } else {        // edit 끝
            const trimmedText = editText.trim();
            if(trimmedText !== "" && trimmedText !== todo.text){ 
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);
        }
    }

    return(
        //todo.iscompleted가 treu면 "todo__item--complete" false ""
        <li className={`todo__item ${todo.isCompleted ? "todo__item--complete" : ""}`}>
            {!isEditing && 
                <Checkbox  // 수정중이 아닐때 체크박스와 레이블이 보이도록
                    id={todo.id} 
                    checked={todo.isCompleted}
                    onChange={()=>toggleTodo(todo.id)}
                >{todo.text}</Checkbox>
            }
            {isEditing &&
                <input 
                    type="text" 
                    className="todo__input--edit"
                    value={editText}
                    onChange={(e)=>setEditText(e.target.value)}
                    onKeyDown={(e)=>e.key==="Enter"?handleEditClick():null}
                    autoFocus
                />
            }
            <Button 
                className="todo__button todo__button--edit"
                onClick={handleEditClick}

            > {isEditing?"✨":"✏️"} </Button>
            <Button 
                className="todo__button todo__button--delete"
                onClick={()=>deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}