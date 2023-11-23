import { FC, useEffect } from 'react';
import { Todo } from "../../types/Todo"
import { PatchCompleteTodo } from "../../requests/TodoService"

interface IProps {
    todo: Todo,
    toggleTodo: (todoId:number,isCompleted:boolean) => void
}

export const TodoTile: FC<IProps> = props => {

    const handleTodoToggle = () => {
        let complited: Todo = {
            id: props.todo.id,
            userId: props.todo.userId,
            title: props.todo.title,
            complited: !props.todo.complited
        }
        PatchCompleteTodo(complited)
        .then((todo) => props.toggleTodo(todo.id, todo.complited))
    }
    
    return (
        <>
            <div className={`${props.todo.complited ? "bg-cyan-400" : "bg-red-400"} flex justify-center items-center  h-52 w-52 border-2 rounded-md border-black`}>
                <p>{props.todo.title}</p>
                <button onClick={handleTodoToggle}>Complete</button>
            </div>
        </>
    )
} 
