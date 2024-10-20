export function TodoCard(props) {
  const { todo, todoIndex, handleDeleteTodo, handleCompleteTodo } = props
  const doneOrUndone = todo.complete ? 'Re-Open' : 'Done'
  return (
    <div className='card todo-item'>
      <p className={
        todo.complete ? 'striked' : ''
      }>{todo.input}</p>
      <div className='todo-buttons'>
        <button onClick={() => {
          handleCompleteTodo(todoIndex)
        }}>
          <h6>{doneOrUndone}</h6>
        </button>
        <button onClick={() => {
          handleDeleteTodo(todoIndex)
        }}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  )
}
