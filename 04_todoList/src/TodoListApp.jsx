import "./todolist.css"

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">Todo List App</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일 목록을 입력하세요." className="todo__input"/>
                <button type="submit" className="todo__button todo__button--add">추가</button>
            </form>
            <ul className="todo__list">
                <li className="todo__item todo__item--completed">
                    <input type="checkbox" className="todo__check" name="" id="chk-1" />
                    <label htmlFor="chk-1" className="todo__label"> 옷싸기</label>
                    <button className="todo__button todo__button--edit">✏️</button>
                    <button className="todo__button todo__button--delete">❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp;