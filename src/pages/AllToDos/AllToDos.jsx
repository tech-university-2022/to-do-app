import "./AllToDos.scss";
import Profile from "../../components/Profile/Profile";
import ToDoList from "../../components/ToDoList/ToDoList";

function AllToDos({
  updateNewTodo,
  setPage,
  toDoList,
  updateTodo,
  deleteTodo,
}) {
  return (
    <div className="alltodos-container">
      <div className="profile-column">
        <Profile name="Aditi" />
      </div>
      <div className="all-to-dos-column">
        <ToDoList
          toDoList={toDoList}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <button onClick={() => setPage("create new")}>Create new</button>
      </div>
    </div>
  );
}

export default AllToDos;
