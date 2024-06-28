// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosList, deleteTodo} = props
  const {title, id} = todosList
  console.log(title)
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <p className="para">{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
