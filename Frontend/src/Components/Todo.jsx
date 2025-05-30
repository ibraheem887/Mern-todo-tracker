export default function Todo({todo, del, toggleComplete}) {
  return (
    <div className={`card my-3 ${todo.completed ? 'bg-light' : ''}`}>
      <div className="card-body">
        <div className="d-flex align-items-center">
          <input 
            type="checkbox" 
            className="form-check-input me-3" 
            checked={todo.completed || false} 
            onChange={() => toggleComplete(todo)}
          />
          <div>
            <h2 className={`card-title ${todo.completed ? 'text-decoration-line-through' : ''}`}>
              {todo.title}
            </h2>
            <p className={`card-text ${todo.completed ? 'text-decoration-line-through' : ''}`}>
              {todo.desc}
            </p>
            {todo.date && (
              <small className="text-muted">
                {new Date(todo.date).toLocaleString()}
              </small>
            )}
          </div>
        </div>
        <button className="btn btn-danger mt-2" onClick={() => del(todo)}>
          Delete
        </button>
      </div>
    </div>
  )
}
