import ToDo from "../ToDo/ToDo";
import "./ToDoList.scss";

function ToDoList({ toDoList, updateTodo }) {
  let todoListItems = toDoList.map((eachToDo, index) => {
    return (
      <ToDo
        text={eachToDo.text}
        id={eachToDo.id}
        key={Date.now() + index}
        updateTodo={updateTodo}
      />
    );
  });

  return <div className="to-do-list-container">{todoListItems}</div>;
}

export default ToDoList;
