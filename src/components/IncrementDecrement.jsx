import React, { useState } from "react";

const IncrementDecrement = () => {
  const [num, setNum] = useState(1);
  //   const increase = () => setNum(num + 1);
  //   const decrease = () => setNum(num - 1);

  return (
    <>
      <h2>{num}</h2>
      {/* <button className="btn btn-primary" onClick={increase}>
        +
      </button> */}
      {num < 10 && (
        <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
          +
        </button>
      )}
      &nbsp; &nbsp;&nbsp;
      {/* <button className="btn btn-primary" onClick={decrease}>
        -
      </button> */}
      {num > 1 && (
        <button className="btn btn-danger" onClick={() => setNum(num - 1)}>
          -
        </button>
      )}
    </>
  );
};

export default IncrementDecrement;
