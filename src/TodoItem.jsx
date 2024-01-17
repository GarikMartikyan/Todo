export default function TodoItem({text}) {

    return(
        <div>
            <label>
                <input type="checkbox" name="" id=""/>
                {text}
                <button>x</button>
            </label>
        </div>
    )
}