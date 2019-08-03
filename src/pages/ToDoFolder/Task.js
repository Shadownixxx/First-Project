import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - zrobić do:
          <span> {date}</span>
          <button style={{ marginLeft: 20 }} onClick={() => props.change(id)}>
            Wykonane!
          </button>
          <button style={{ marginLeft: 20 }} onClick={() => props.delete(id)}>
            Usuń
          </button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong> - <span>(zrobić do: {date})</span> <br />
          -potwierdzenie wykonania: <span>{finish}</span>
          <button style={{ marginLeft: 20 }} onClick={() => props.delete(id)}>
            Usuń
          </button>
        </p>
      </div>
    );
  }
};

export default Task;
