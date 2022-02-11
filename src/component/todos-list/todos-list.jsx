import TodosItem from "./todos-item"

const TodosList = (props) => {

    // La liste des tâche (en objet JS) est passée en paramètre
    // Ainsi que les 2 callback permetant de faire transiter l'info de l'ID de la tâche
    // à ajouter ou supprimer vers TodoApp (onTaskFinish, onTaskDelete)
    const { todos, onTaskFinish, onTaskDelete } = props

    // On transforme notre liste de todo en composant react TodosItem
    const todosJSX = todos.map(
        todo => <TodosItem key={todo.id} {...todo}
                    onFinish={(id) => onTaskFinish(id)}
                    onDelete={(id) => onTaskDelete(id)} />
    )

    return (
        <>
            <div>
                {todosJSX}
            </div>
        </>
    )

}

export default TodosList