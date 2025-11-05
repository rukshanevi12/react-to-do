import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";

function App() {
  return (
    <div className="container-fluid fs-5">
      <Header />

      <div className="d-flex justify-content-center align-items-center my-5">
        <Form />
      </div>

      <div className="d-flex justify-content-center align-items-center my-5">
        <List />
      </div>
    </div>
  );
}

export default App;
