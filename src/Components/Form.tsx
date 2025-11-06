const Form = () => {
  return (
    <form className="d-flex justify-content-center align-items-center gap-3 w-50 mx-auto">
      <input
        type="text"
        className="form-control form-control-lg flex-grow-1"
        placeholder="Type task here"
      />
      <button type="submit" className="btn btn-info btn-lg px-4">
        Add
      </button>
    </form>
  );
};

export default Form;
