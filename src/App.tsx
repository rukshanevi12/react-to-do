import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface todo {
  taskname: string;
  state: boolean;
}

function App() {
  const [task, setTask] = useState("");
  const [todoListWithState, settodoListWithState] = useState<todo[]>([]);

  const setInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim() === "") return;
    settodoListWithState((prev) => [...prev, { taskname: task, state: false }]);
    setTask("");
  };

  const removeTodo = (index: number) => {
    settodoListWithState((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleState = (index: number) => {
    settodoListWithState((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, state: !item.state } : item
      )
    );
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
          <List
            removeTask={removeTodo}
            list={todoListWithState}
            toggleState={toggleState}
          />
        </div>
      </div>
      <Footer
        totalTodos={todoListWithState.length}
        completedTodos={
          todoListWithState.filter((todo) => todo.state === true).length
        }
      />
    </div>
  );
}

export default App;
