import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid fs-5 d-flex flex-column min-vh-100">
      <div className="flex-grow-1">
        <Header />

        <div className="d-flex justify-content-center align-items-center my-5">
          <Form />
        </div>

        <div className="d-flex justify-content-center align-items-center my-5">
          <List />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
