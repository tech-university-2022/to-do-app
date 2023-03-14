function AllToDos({ setPage }) {
  return (
    <div className="alltodos-container">
      All To Dos
      <button onClick={() => setPage("create new")}>Create new</button>
    </div>
  );
}

export default AllToDos;
