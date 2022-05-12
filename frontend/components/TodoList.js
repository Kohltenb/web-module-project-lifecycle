import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
          <h1> Todos: </h1>
          <div id='error'>Error: {this.props.error}</div>
          {
            this.props.todos.reduce((acc, todo) => {
              if (this.props.displayCompleted || !todo.completed) return acc.concat(
                <Todo
                toggleCompleted={this.props.toggleCompleted}
                todo={todo}
                key={todo.id}
                />
              )
              return acc
            },[])
          }
          
        </div>
    )
  }
}
