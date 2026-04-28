import TodoItemEmpty from "./TodoItemEmpty.jsx"
import TodoItem from "./TodoItem.jsx"
export default function TodoList({todos, toggleTodo, deleteTodo, editTodo}){ // todos는 여기서 사용하기에 냅둔 상태
    return( 
        <ul className="todo__list">
            {/*todos가 비어있으면 TodoItemEmpty 보여주고, 아니면 TodoItem 보여주기 */}
            {todos?.length === 0 && <TodoItemEmpty/>}
            {
                todos?.length > 0 &&
                //todos에서 하나씩 꺼내서 todo -> <TodoItem todo={todo}/>로 보내기
                todos?.map(
                    (todo) => (
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            toggleTodo={toggleTodo} 
                            deleteTodo={deleteTodo} 
                            editTodo={editTodo}/>
                    )
                )  //Each child in a list should have a unique "key" prop.-> 리스트의 각 아이는 key 속성을 갖고 있어야 한다.
            }
        </ul>
    )
}