import { useState } from 'react';

export default function ToAdd(props) {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description cannot be blank");
      return;
    }
    props.addTodo(title, desc);
    setdesc("");
    settitle("");
  }

  return (
    <div className='container'>
      <h3>Add Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            value={title} 
            className="form-control" 
            id="title" 
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input 
            type="text" 
            value={desc} 
            className="form-control" 
            id="desc" 
            onChange={(e) => setdesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
