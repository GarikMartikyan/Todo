import {useState} from "react";

export default function TodoForm({onAdd, onChange, onDelete}) {
    const [text, setText] = useState('')

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text)
            setText('')
        }}>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value)
            }}/>
            <button>Add</button>
        </form>
    )
}