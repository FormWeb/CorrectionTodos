const TodosItem = (props) => {
    // Tous nos paramètre concernant la tâche à afficher
    const {id, name, description, priority, isDone} = props;

    // Les deux callback permettant de faire transiter l'info de l'ID vers TodoApp
    const {onFinish, onDelete} = props

    return (
        <div>
            <div>
                <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <p>{priority}</p>
                    <p>{isDone.toString()}</p>
                </div>

                <div>
                    {/* Le clique du couton appele la fonction mis en paramètre (onFinish, onDelete)
                    pour faire transiter l'infos de l'ID */}
                    <button onClick={() => onFinish(id)} disabled={isDone}>Terminer</button>
                    <button onClick={() => onDelete(id)}>Supprimer</button>
                </div>
            </div>
        </div>
    )
}

export default TodosItem