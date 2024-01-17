import TodoItem from "./TodoItem.jsx";

export default function TodoList({todos}) {

    return(
        <div>
            {todos.map((item) => <TodoItem key={item.id} {...item}/>)}
        </div>
    )
}