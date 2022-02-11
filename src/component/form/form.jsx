import { useState } from "react"
import { nanoid } from "nanoid"

const Form = (props) => {

    const {onSubmitTodo} = props

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("2")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitTodo({
            id: nanoid(),
            name: name,
            description: description,
            priority: priority,
            isDone: false
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom</label>
                    <input type="text" name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                    <label>Priorité</label>
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="1">Basse</option>
                        <option value="2">Normale</option>
                        <option value="3">Haute</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Ajouter</button>
                </div>
            </form>
        </div>
    )

}

export default Form