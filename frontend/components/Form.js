import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.props.onTodoFormSubmit}>
          <input
            value={this.props.todoNameInput}
            onChange={this.props.onTodoNameChange}
            type='text'
            placeholder='todo' />
          <input type='submit'></input>
        </form>
      </>
    )
  }
}
