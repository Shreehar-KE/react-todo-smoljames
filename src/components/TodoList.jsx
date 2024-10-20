import React from 'react'
import { TodoCard } from './TodoCard'

export function TodoList(props) {
  const { selectedTab, todos } = props

  const filterTodoList = selectedTab === 'All' ? todos :
    selectedTab === 'Completed' ? todos.filter(val => val.complete) :
      todos.filter(val => !val.complete)
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex(val => val.input === todo.input)}
            {...props}
            todo={todo} />
        )
      })}
    </>
  )
}
