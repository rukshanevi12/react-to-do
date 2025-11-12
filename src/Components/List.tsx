interface Task {
  taskname: string;
  state: boolean;
}

interface Props {
  list: Task[];
  toggleState: (index: number) => void;
  removeTask: (index: number) => void;
}

const List = ({ list, removeTask, toggleState }: Props) => {
  const sortedWithIndices = list
    .map((task, originalIndex) => ({ task, originalIndex }))
    .sort((a, b) => {
      if (a.task.state === b.task.state) return 0;
      return a.task.state ? 1 : -1;
    });

  if (list.length === 0) {
    return (
      <div className="w-50 text-center p-5 text-muted">
        <h5>No tasks yet!</h5>
        <p>Add a task above to get started.</p>
      </div>
    );
  }

  return (
    <div className="w-50">
      {sortedWithIndices.map(({ task, originalIndex }) => (
        <div
          key={originalIndex}
          className="d-flex justify-content-between align-items-center p-3 bg-light-subtle text-dark rounded shadow-sm mb-3"
        >
          <div
            onClick={() => toggleState(originalIndex)}
            className="flex-grow-1"
            role="button"
            tabIndex={0}
            style={{ cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleState(originalIndex);
              }
            }}
            aria-label={`Mark "${task.taskname}" as ${
              task.state ? "incomplete" : "complete"
            }`}
          >
            <h5
              className={`mb-0 ${
                task.state ? "text-decoration-line-through text-muted" : ""
              }`}
            >
              {task.taskname}
            </h5>
          </div>

          <div className="d-flex align-items-center gap-3">
            {task.state && <h6 className="mb-0 text-success">Completed</h6>}
            <button
              onClick={() => removeTask(originalIndex)}
              type="button"
              className="btn-close"
              aria-label={`Delete ${task.taskname}`}
            ></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
