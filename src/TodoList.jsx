import TodoItem from "./TodoItem.jsx";

export default function TodoList({todos, onChange, onDelete}) {

    return (
        <div>
            {todos.map((item) => (<TodoItem key={item.id}
                                            todo={item}
                                            onChange={a => { onChange(a) }}
                                            onDelete={a => { onDelete(a) }}/>))}
        </div>
    )
}