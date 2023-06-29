// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails

  const deleteButton = () => {
    deleteUser(id)
  }
  return (
    <li className="listContainer">
      <h1 className="each-head"> {title} </h1>
      <button type="button" className="button" onClick={deleteButton}>
        {' '}
        Delete{' '}
      </button>
    </li>
  )
}

export default TodoItem
