import { type ChangeEvent, type FormEvent } from "react";

interface Props {
  task: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setInputValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ task, handleSubmit, setInputValue }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="d-flex justify-content-center align-items-center gap-3 w-50 mx-auto"
    >
      <input
        onChange={setInputValue}
        value={task}
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
