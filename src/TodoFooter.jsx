export default function TodoFooter({todos, clear}) {
    let completed = todos.filter(item => item.isCompleted)
    return(
        <div>
            <span>{completed.length}/{todos.length} completed</span>
            <button onClick={() => {
                clear()
            }}>Clear Completed</button>
        </div>
    )
}