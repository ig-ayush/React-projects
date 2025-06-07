import { useEffect, useRef, useState } from "react";

function StopWatch() {

    const [bigTimer,setBigTimer] = useState(false);
    const timerRef = useRef(0);
    const [timer,SetTimer] = useState(0);
    const intervalSet = useRef(null);

    useEffect(()=>{
        if(bigTimer) {

            intervalSet.current = setInterval(()=>{
                SetTimer(Date.now() - timerRef.current);
            },10)
        }

            return () =>{
                clearInterval(intervalSet.current);
            }
    },[bigTimer])

    const startTimer = ()=>{
        setBigTimer(true);
        timerRef.current = (Date.now() - timer);
    };

    const stopTimer = ()=>{
        setBigTimer(false);
    };

    const resetTimer = ()=>{
        setBigTimer(false);
        SetTimer(0);
    };

    function DisplayTimer() {
        let hour = Math.floor((timer / (1000 * 60 * 60)));
        let min = Math.floor((timer / (1000 * 60) % 60));
        let sec = Math.floor((timer / (1000) % 60));
        let milSec = Math.floor(((timer % 1000) / 10));

        hour = String(hour).padStart(2,"0");
        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2,"0");
        milSec = String(milSec).padStart(2,"0");

        return (
            `${hour} : ${min} : ${sec} : ${milSec}`
        )

    }
    return (
          <>
            <main id="clock" className="w-screen h-auto m-2 flex  justify-center items-center">
                <div id="cloc-con" className="w-1/3 border h-[40vh] flex flex-col gap-5 justify-center items-center rounded-xl">
                    <h1 id="time" className="font-[Orbitron] text-6xl" >
                        {DisplayTimer()}
                    </h1>
                    <div id="oparation" className="flex gap-8 mt-5 text-xl">
                        <button id="start" 
                            className="border w-20 p-1 rounded-lg hover:bg-white hover:text-black transition-colors duration-400"
                            onClick={startTimer}
                        >Start</button>
                        <button id="stop" className="border w-20 p-1 rounded-lg hover:bg-white hover:text-black transition-colors duration-400" onClick={stopTimer}>Stop</button>
                        <button id="reset" className="border w-20 p-1 rounded-lg hover:bg-white hover:text-black transition-colors duration-400" onClick={resetTimer}>Reset</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default StopWatch;