import "./App.scss";
import AllToDos from "../AllToDos/AllToDos";
import { useState } from "react";
import CreateNew from "../CreateNew/CreateNew";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [page, setPage] = useState("all to-dos");
  console.log(page);
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
  const [selectedTodo, setSelectedTodo] = useState(null);

  const createNewAndUpdateToDo = (text, id) => {
    if (id === null) {
      const newToDo = {
        text: text,
        id: Date.now(),
      };
      let newToDoList = [...toDoList, newToDo];
      setToDoList(newToDoList);
    } else {
      const localSelectedTodoIndex = toDoList.findIndex(
        (todo) => todo.id === id
      );
      toDoList[localSelectedTodoIndex].text = text;
      setToDoList(toDoList);

      // const newTodoList = toDoList.map((eachTodo, index) => {
      //   if (id === eachTodo.id) {
      //     // return eachTodo.text = text
      //     return {
      //       text: text,
      //       id: id,
      //     };
      //   }
      //   return eachTodo;
      // });
      // setToDoList(newTodoList);
    }
  };
  const deleteTodo = (id) => {
    setPage("all to-dos");
    const newToDoList = toDoList.filter((todo) => todo.id !== id);
    setToDoList(newToDoList);
  };

  const updateTodo = (id) => {
    setPage("create to do");
    const localSelectedTodo = toDoList.find((todo) => todo.id === id);
    console.log("selectedtodo", localSelectedTodo);
    setSelectedTodo(localSelectedTodo);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AllToDos
          setPage={setPage}
          toDoList={toDoList}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ),
    },
    {
      path: "create",
      element: (
        <CreateNew
          setPage={setPage}
          createNewAndUpdateToDo={createNewAndUpdateToDo}
          selectedTodo={selectedTodo}
        />
      ),
    },
  ]);

  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
