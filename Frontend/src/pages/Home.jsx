import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container my-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Todo App</h1>
        <p className="lead">
          This is a simple todo application to help you manage your tasks efficiently.
        </p>
        <hr className="my-4" />
        <p>
          Get started by adding your first todo or check your existing todos.
        </p>
        <Link to="/todos" className="btn btn-primary btn-lg">
          View My Todos
        </Link>
      </div>
    </div>
  );
}