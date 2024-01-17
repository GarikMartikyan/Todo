import {useState} from "react";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";
import TodoFooter from "./TodoFooter.jsx";

function App() {
    const [todos, setTodos] = useState([
        {id: 0, text: 'Learn js', isCompleted: false},
        {id: 1, text: 'Learn React', isCompleted: false},
        {id: 2, text: 'Create Chat', isCompleted: false},
        {id: 3, text: 'Create ToDo', isCompleted: false},
    ])

    return (
        <>
            <TodoForm/>
            <TodoList todos={todos}/>
            <TodoFooter/>
        </>
    )
}

export default App
