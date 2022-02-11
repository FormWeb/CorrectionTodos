import { useState } from "react"
import Form from "../../component/form/form";

const TodoApp = () => {

    const [todos, setTodos] = useState([])

    const onSubmitTodo = (todo) => {
        setTodos(previous => [todo, ...previous]);
    }

    return (
        <>
            <h1>Todo App</h1>
            <Form onSubmitTodo={onSubmitTodo} />
        </>
    )

}

export default TodoApp