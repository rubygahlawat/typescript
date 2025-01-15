import { useState } from "react"
import { useTodos } from "../store/todos"


const AddToDo = () => {
    const [todo, setToDo] = useState("")
    const { handleAddToDo } = useTodos()

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setToDo("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="" value={todo} onChange={(e) => setToDo(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddToDo