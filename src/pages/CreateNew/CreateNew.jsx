import "./CreateNew.scss";
import Profile from "../../components/Profile/Profile";
import { useState } from "react";

function CreateNew(props) {
  const { createNewAndUpdateToDo } = props;
  const { setPage } = props;
  const { selectedTodo } = props;
  console.log(">>>>", selectedTodo);
  // new
  const [newTodo, setNewTodo] = useState(
    selectedTodo === null ? "" : selectedTodo.text
  );

  let onTextChange = (event) => {
    let changedValue = event.target.value;
    setNewTodo(changedValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (selectedTodo === null) {
      // new todo
      createNewAndUpdateToDo(newTodo, null);
    } else {
      // update todo
      createNewAndUpdateToDo(newTodo, selectedTodo.id);
    }

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
            value={newTodo}
          />
          <button className="button-group">Save & Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNew;
