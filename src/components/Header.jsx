
export function Header(props) {
  const { todos } = props
  const todosLength = todos.length
  const openTodosLength = todos.filter(val => !val.complete).length

  const taskOrTasks = openTodosLength != 1 ? 'tasks' : 'task'
  return (
    <header>
      <h1 className='text-gradient'>You have {openTodosLength}/{todosLength} Open {taskOrTasks}.</h1>
    </header>
  )
}
