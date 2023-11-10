import React from 'react'

function MyTodos({ Todos, deleteTask }) {
    const myTasks = Todos.length ? (
        Todos.map(Todo => {
            return (
                <div className="collection-item" key={Todo.id}>
                    <span>{Todo.content}
                        <button className="button float-right mr-40" onClick={() => { deleteTask(Todo.id) }} >Delete</button>
                    </span>
                </div>
            )
        })

    ) : (
        <p className="center">No Tasks Today</p>
    )
    return (
        <div className='container ml-40'>
            {myTasks}
        </div>
    )
}

export default MyTodos