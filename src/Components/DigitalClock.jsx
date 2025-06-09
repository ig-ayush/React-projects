import { useEffect, useState } from "react";

function DigitalClock() {

    const [time,setTime] = useState(new Date);
    let isPm = false;
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date);
        },1000);
    },[]);

    function DisplayTime() {
        let hour = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        isPm = hour >= 12;
        hour = hour % 12 || 12;

        const FormateTime = (time) => (time < 10 ? `0${time}` : time);

        return(
            `${FormateTime(hour)}:${FormateTime(minutes)}:${FormateTime(seconds)}`
        )
    }
    return(
        <>
            <main id="clock" className="w-screen h-auto m-2 flex justify-center items-center">
                <div id="cloc-con" className="xl:w-1/3 lg:w-1/2 w-[90%] border lg:h-[30vh] h-[20vh] flex justify-center items-center rounded-xl">
                    <h1 id="time" className="font-[Orbitron] lg:text-8xl text-7xl" >
                        {DisplayTime()} <span className="text-2xl">{isPm ? `PM` : `AM`}</span>
                    </h1>
                </div>
            </main>
        </>
    )
}

export default DigitalClock;