// export default function TodoAdder(props){
//     const {addTodo} = props.addTodo; // 혹은 매개변수 자체에 {addTodo} 로 깔 수 있음
//     const [inputTodo, setInputTodo] = useState('');
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         addTodo(inputTodo);
//     }

//     return(
//         <form className="todo__form" onSubmit={handleSubmit}>
//             <input type="text" className="todo__input"
//                 placeholder="할 일을 입력하세요"
//                 value={inputTodo}
//                 onChange={(e)=> setInputTodo(e.target.value)}
//             />
//             <Button type="submit" className="todo__button"/>
//         </form>
//     );
// }


// export default function TodoAdder({addTodo}) { //const {addTodo} = props; //props에서 addTodo만 꺼내서 사용하겠다. -> 구조분해할당\
//     const [inputTodo, setInputTodo] = useState("");
//     const handleSubmit=(event)=>{
//         event.preventDefault(); //기본 동작 막기
//         if(!inputTodo.trim()) return; //input이 빈 문자열이거나 공백만 있는 경우 제출 막기
//         addTodo(...inputTodo); //input에 있는 text value를 할일 내용으로 추가
//         setInputTodo(""); //input 초기화
//     }
//     return (
//         <form className="todo__form" onSubmit={handleSubmit}>
//             <input type="text" placeholder="할 일 목록을 입력하세요." className="todo__input" 
//             value={inputTodo}
//             onChange={(event) => setInputTodo(event.target.value)}
//             />
//             <Button type="submit" className="todo__button todo__button--add">추가</Button> {/* Button은 컴포넌트라서 import 필요! */}
//         </form>
//     )
// }


import { useState } from "react";
import Button from "./Button.jsx" //import 추가 안했어서 오류 났었음!! 근데 폴더까지 써서 또 다른 ㅇ에러가,,ㅋ
export default function TodoAdder({addTodo}) { //const {addTodo} = props; //props에서 addTodo만 꺼내서 사용하겠다. -> 구조분해할당\
    const [inputTodo, setInputTodo] = useState("");
    const handleSubmit=(event)=>{
        event.preventDefault(); //기본 동작 막기
        if(!inputTodo.trim()) return; //input이 빈 문자열이거나 공백만 있는 경우 제출 막기
        addTodo(inputTodo); //input에 있는 text value를 할일 내용으로 추가
        setInputTodo(""); //input 초기화
    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input type="text" placeholder="할 일 목록을 입력하세요." className="todo__input" 
            value={inputTodo}
            onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className="todo__button todo__button--add">추가</Button> {/* Button은 컴포넌트라서 import 필요! */}
        </form>
    )
}