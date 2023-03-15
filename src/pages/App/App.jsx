import "./App.scss";
import AllToDos from "../AllToDos/AllToDos";
import { useState } from "react";
import CreateNew from "../CreateNew/CreateNew";

function App() {
  const [page, setPage] = useState("all to-dos");
  const initialTodoList = [
    {
      id: 1,
      text: "Do exercise",
    },
    {
      id: 2,
      text: "Do cycling",
    },
    {
      id: 3,
      text: "Sleep Early",
    },
  ];
  const [toDoList, setToDoList] = useState(initialTodoList);
  const createNewToDo = (text) => {
    const newToDo = {
      text: text,
      id: Date.now(),
    };
    let newToDoList = [...toDoList, newToDo];
    setToDoList(newToDoList);
  };

  const updateToDo = (id, text) => {
    setPage("create to do");

    let newTodoList = toDoList.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }

      return todo;
    });
    setToDoList(newTodoList);
  };

  return (
    <div className="app-container">
      {page === "all to-dos" ? (
        <AllToDos
          setPage={setPage}
          updateToDo={updateToDo}
          toDoList={toDoList}
        />
      ) : (
        <CreateNew setPage={setPage} createNewToDo={createNewToDo} />
      )}
    </div>
  );
}

export default App;
