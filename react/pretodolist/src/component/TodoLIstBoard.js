import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({todoList}) => {
    return (
        <div>
            <h1>Today ToDo List</h1>
            {
                todoList.map(item => {
                    return (
                        <TodoItem item={item}/>
                    );
                })
            }
        </div>
    )
}

export default TodoBoard;