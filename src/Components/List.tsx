interface Props {
  list: string[];
  removeTask: (index: number) => void;
}

const List = ({ list, removeTask }: Props) => {
  return (
    <>
      <div className="w-50">
        {list.map((task, index) => (
          <div
            key={index}
            className="row p-3 bg-light-subtle text-dark rounded shadow-sm mb-3 mx-0 align-items-center"
          >
            <div className="col-11">
              <h5 className="mb-0">{task}</h5>
            </div>
            <div className="col-1 d-flex justify-content-center align-items-center">
              <button
                onClick={() => removeTask(index)}
                type="button"
                className="btn-close"
              ></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
