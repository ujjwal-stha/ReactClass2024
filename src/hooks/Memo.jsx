import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(5);
  const [data, setData] = useState(1);

  const squareFunc = useMemo(() => {
    return count * count;
  }, [count]);

  const Increase = useMemo(() => {
    return data + 2;
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col-md-5 p-3">
            <h1>
              {count} and its square is {squareFunc}
            </h1>
            <button
              className="btn btn-secondary"
              onClick={() => setCount(count + 1)}
            >
              Add
            </button>
            <h1>
              {data} and its increment by 2 is {Increase}
            </h1>
            <button
              className="btn btn-success"
              onClick={() => setData(data + 2)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memo;
