import { useState } from "react"
import { nanoid } from "nanoid"
import "./form.css"

const Form = (props) => {

    // Le composant Form doit faire remonter l'information de la tâche encodé
    // au composant TodoApp, donc il lui faut une callback (onSubmitTodo)
    const {onSubmitTodo} = props

    // Les states qui sont synchronisé avec les différents inputs
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("2")

    // La fonction appelée lorsqu'on clique sur le bouton appele la callback mis en paramètre
    // (onSubmitTodo) pour pouvoir faire remonter l'information de la tâche à ajouter dans la 
    // liste des tâches
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
        <div className="main">
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>Nom</label>
                    <input type="text" name="name"
                        value={name}
                        // Permet de synchroniser les states avec les valeurs des inputs
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