import { useState } from "react";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoFooter from "./TodoFooter.jsx";

function App() {
    const [todos, setTodos] = useState([
        { id: 0, text: 'Learn JS', isCompleted: false },
        { id: 1, text: 'Learn React', isCompleted: true },
        { id: 2, text: 'Create Chat', isCompleted: false },
        { id: 3, text: 'Create ToDo', isCompleted: false },
    ]);

    console.log(todos);

    const handleAddTodo = (text) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Math.random(), text: text, isCompleted: false },
        ]);
    };

    const handleToggleTodo = (updatedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === updatedTodo.id
                    ? { ...todo, isCompleted: updatedTodo.isCompleted }
                    : todo
            )
        );
    };

    const handleDeleteTodo = (deletedTodo) => {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== deletedTodo.id)
        );
    };

    const handleClearCompleted = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isCompleted));
    };

    return (
        <>
            <TodoForm onAdd={handleAddTodo} />
            <TodoList
                todos={todos}
                onChange={handleToggleTodo}
                onDelete={handleDeleteTodo}
            />
            <TodoFooter todos={todos} clear={handleClearCompleted} />
        </>
    );
}

export default App;
