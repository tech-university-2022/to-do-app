import "./ToDo.scss";

function ToDo({ text, id, updateTodo }) {
  return (
    <div className="to-do-container">
      {text}
      <button onClick={() => updateTodo(id)}>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default ToDo;
