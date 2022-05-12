import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
          <h1> Todos: </h1>
          <div id='error'>Error: {this.props.error}</div>
          {
            this.props.todos.reduce((acc, todo) => {
              if (this.props.displayCompleted || !todo.completed) return acc.concat(<div onClick={this.props.toggleCompleted(todo.id)} key={todo.id}> {todo.name} {todo.completed ? '✔' : ''}</div>)
              return acc
            },[])
          }
          
        </div>
    )
  }
}
