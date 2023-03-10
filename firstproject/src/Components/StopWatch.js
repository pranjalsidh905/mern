import {useEffect, useState  } from "react";
const StopWatch = () =>{
    const [timer,setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(!isActive);

    };
    const reset = () =>{
        setTimer(0);
        setIsActive(false);

    };

    useEffect(() =>{
        let intervel = null;
        if (isActive){
            intervel= setIsActive(() => {
                setTimer((timer) => timer + 1);

            }, 1000);

        } else if (!isActive && timer !== 0) {
            clearInterval(intervel);    
        } 
        return () => clearInterval(intervel);
    }, [isActive, timer]);

    return(
        <div class="StopWatch">
            <h2>StopWatch</h2>
            <span class="StopWatch-timer">{timer}</span>
            <div class="row">
                <button onclick={toggle} class="button button-primary">
                {isActive ? "Pause" : "start"}
                </button>
                <button onclick={reset} class="button">
                Reset
                </button>


            </div>
        </div>
    )

}
export default StopWatch;