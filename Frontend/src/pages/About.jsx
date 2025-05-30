export default function About() {
  return (
    <div className="container my-5">
      <h1>About This App</h1>
      <p className="lead">
        This is a Todo List application built with React.
      </p>
      <div className="my-4">
        <h2>Features</h2>
        <ul className="list-group">
          <li className="list-group-item">Add new tasks</li>
          <li className="list-group-item">Mark tasks as complete</li>
          <li className="list-group-item">Delete tasks</li>
          <li className="list-group-item">Persistent storage with MongoDB</li>
        </ul>
      </div>
      <div className="my-4">
        <h2>Technologies Used</h2>
        <ul className="list-group">
          <li className="list-group-item">React for the frontend</li>
          <li className="list-group-item">Express.js for the backend</li>
          <li className="list-group-item">MongoDB for the database</li>
          <li className="list-group-item">React Router for navigation</li>
          <li className="list-group-item">Bootstrap for styling</li>
        </ul>
      </div>
    </div>
  );
}
