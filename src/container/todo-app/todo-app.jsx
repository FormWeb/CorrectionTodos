import { useState } from "react"
import Form from "../../component/form/form";
import TodosList from "../../component/todos-list/todos-list";

const TodoApp = () => {

    // State avec les différentes taches
    // Le composant reçoit les infos des tâches du formulaire
    // Et il envoit l'info de la liste des tâches au composant Liste (TodosList)
    const [todos, setTodos] = useState([])

    // La callback appelée lorsqu'on ajoute une tâche (via le composant Form)
    // On ajoute le todo à notre liste
    const onSubmitTodo = (todo) => {
        setTodos(previous => [todo, ...previous]);
    }

    // La callback appelée lorsqu'on delete un todo
    const onDeleteTodo = (id) => {
        setTodos(previous => previous.filter(
            todo => todo.id !== id
        ))
    }

    // La callback appelée lorsqu'on finit un todo
    const onFinishTodo = (id) => {
        setTodos(previous => previous.map(
            todo => (todo.id !== id) ? todo : {...todo, isDone: true}
        ))
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form onSubmitTodo={onSubmitTodo} />
            <TodosList todos={todos}
                onTaskFinish={onFinishTodo} onTaskDelete={onDeleteTodo}/>
        </>
    )

}

export default TodoApp