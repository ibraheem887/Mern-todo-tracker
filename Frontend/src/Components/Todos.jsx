import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="container">
      <h3 className='text-center my-3'>Todo list</h3>
      {props.todos.length === 0 ? (
        <div className="text-center">No tasks to display</div>
      ) : (
        props.todos.map((todo) => (
          <Todo 
            key={todo._id} 
            todo={todo} 
            del={props.del} 
            toggleComplete={props.toggleComplete}
          />
        ))
      )}
    </div>
  )
}
