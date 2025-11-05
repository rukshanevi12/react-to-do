const Form = () => {
  return (
    <form className="d-flex justify-content-center align-items-center gap-3 col-6 flex-wrap">
      <input
        type="text"
        className="form-control w-auto flex-grow-1"
        placeholder="Type task here"
      />
      <button type="submit" className="btn btn-info">
        Add Task
      </button>
    </form>
  );
};

export default Form;
