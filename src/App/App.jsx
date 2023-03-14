import "./App.scss";
import AllToDos from "../AllToDos/AllToDos";
import { useState } from "react";
import CreateNew from "../CreateNew/CreateNew";

function App() {
  const [page, setPage] = useState("all to-dos");

  console.log(page);
  return (
    <div className="app-container">
      State of page::::{page}
      {page === "all to-dos" ? <AllToDos setPage={setPage} /> : <CreateNew />}
    </div>
  );
}

export default App;
