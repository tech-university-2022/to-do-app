import ToDo from "../ToDo/ToDo";
import "./ToDoList.scss";

function ToDoList({ toDoList }) {
  let todoListItems = toDoList.map((eachToDo, index) => {
    return <ToDo text={eachToDo.text} key={Date.now() + index} />;
  });

  return <div className="to-do-list-container">{todoListItems}</div>;
}

export default ToDoList;
