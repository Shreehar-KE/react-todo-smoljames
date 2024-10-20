import React from 'react'

export function Header(props) {
  const { todos } = props
  const todosLength = todos.length
  const taskOrTasks = todosLength != 1 ? 'tasks' : 'task'
  return (
    <header>
      <h1 className='text-gradient'>You have {todosLength} Open {taskOrTasks}.</h1>
    </header>
  )
}
