import "./CreateNew.scss";
import Profile from "../../components/Profile/Profile";
import { useState } from "react";

function CreateNew(props) {
  const { createNewToDo } = props;
  const { setPage } = props;
  const [newTodo, setNewTodo] = useState("");

  let onTextChange = (event) => {
    let changedValue = event.target.value;
    setNewTodo(changedValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createNewToDo(newTodo);
    setPage("all to-dos");
  };

  return (
    <div className="createnew-container">
      <div className="profile-column">
        <Profile name="Aditi" />
      </div>
      <div className="create-new-todo">
        <form onSubmit={onSubmit}>
          <input
            type="textarea"
            placeholder="Create/Update todo.."
            onChange={onTextChange}
          />
          <button className="button-group">Save & Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
