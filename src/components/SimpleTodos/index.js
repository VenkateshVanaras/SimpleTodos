import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {
    resultTodos: initialTodosList,
  }

  deleteTodo = uniqueId => {
    const {resultTodos} = this.state
    const newTodos = resultTodos.filter(each => each.id !== uniqueId)
    this.setState({resultTodos: newTodos})
  }

  render() {
    const {resultTodos} = this.state
    return (
      <div className="bg-container">
        <div className="simple-todos-card">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {resultTodos.map(each => (
              <TodoItem
                todosList={each}
                deleteTodo={this.deleteTodo}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
