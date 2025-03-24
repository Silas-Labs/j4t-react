import React from "react";
import { useCount } from "../store/count";

const Count = () => {
  const { count, add, decrease, reset } = useCount();
  return (
    <div className="w-full h-full flex flex-col items-center">
      <span className="titles">Count</span>
      <div className="flex flex-col items-center justify-center mt-auto mb-auto">
        <span>Count: {count}</span>
        <div className="flex flex-row gap-2 justify-center">
          <button className="btn bg-primary p-1 text-white" onClick={add}>
            Increment
          </button>
          <button className="btn bg-error p-1 text-white" onClick={reset}>
            Reset
          </button>
          <button
            className="btn bg-secondary p-1 text-white"
            onClick={decrease}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
