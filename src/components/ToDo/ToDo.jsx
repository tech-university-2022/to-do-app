import "./ToDo.scss";

function ToDo({ text }) {
  return (
    <div className="to-do-container">
      {text}
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
}

export default ToDo;
