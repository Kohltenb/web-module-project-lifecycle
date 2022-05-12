import React from 'react'
import axios from 'axios'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {

  state = {
    todos: [],
    error: '',
    todoNameInput: '',
  }
  onTodoNameChange = evt => {
    const { value } = evt.target
    this.setState({...this.state, todoNameInput: value})
  }

  resetForm = () => this.setState({...this.state, todoNameInput: ''})

  setAxiosResponseError = err => this.setState({ ...this.state, error: err.response.data.message })
  
  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
    .then(res => {
     this.fetchAllTodos()
     this.resetForm()
    }) 
    .catch(this.setAxiosResponseError)
  }

  onTodoFormSubmit = evt => {
    evt.preventDefault()
    this.postNewTodo()
  }

  fetchAllTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({ ...this.state, todos: res.data.data })
      })
      .catch(this.setAxiosResponseError)
  }
  
  componentDidMount() {
    this.fetchAllTodos()
  }

  render() {
    return (
      <div>
        <div>
          <h1> Todos: </h1>
          <div id='error'>Error: {this.state.error}</div>
          {
            this.state.todos.map(todo => {
              return <div key={todo.id}> {todo.name} </div>
            })
          }
        </div>
          <form id='todoForm' onSubmit={this.onTodoFormSubmit}>
        <input value={this.state.todoNameInput} onChange={this.onTodoNameChange}type='text' placeholder='todo'/>
        <input type='submit'></input>
        <button>clear</button>
        </form>
      </div>
    )
  }
}
