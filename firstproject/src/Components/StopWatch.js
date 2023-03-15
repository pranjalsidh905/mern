import { useEffect, useState } from "react";

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };
  const reset = () => {
    setTimer(0);
    setIsActive(false);
  };

  useEffect(() => {
    let intervel = null;
    if (isActive) {
      intervel = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(intervel);
    }
    return () => clearInterval(intervel);
  }, [isActive, timer]);

  return (
    <div className="StopWatch">
      <h2>StopWatch</h2>
      <span className="StopWatch-timer">{timer}</span>
      <div className="row">
        <button onClick={toggle} className="button button-primary">
          {isActive === true ? "Pause" : "start"}
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};
export default StopWatch;
