import "./ToDo.scss";

function ToDo({ text, id, updateTodo, deleteTodo }) {
  return (
    <div className="to-do-container">
      {text}
      <button onClick={() => updateTodo(id)}>Update</button>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}

export default ToDo;
