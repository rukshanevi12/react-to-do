import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { useState, type ChangeEvent, type FormEvent } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setDollist] = useState<string[]>([]);

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setDollist((todoList) => [...todoList, task]);
    setTask("");
  };
  const removeTodo = (index: number) => {
    setDollist((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <div className="container-fluid fs-5 d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Header />

        <div className="d-flex justify-content-center align-items-center my-5">
          <Form
            task={task}
            handleSubmit={handleSubmit}
            setInputValue={setInputValue}
          />
        </div>

        <div className="d-flex justify-content-center align-items-center my-5">
          <List removeTask={removeTodo} list={todoList} />
        </div>
      </div>

      <Footer totalTodos={todoList.length} />
    </div>
  );
}

export default App;
