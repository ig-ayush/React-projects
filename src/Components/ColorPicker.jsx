import { useRef, useState } from "react";

function ColorPicker() {

    const [color,setColor] = useState("");
    const outputColor = useRef("");
    const notice = useRef(""); 
    const updateColor = (event)=>{
        setColor(event.target.value);
    };

    const copyColor = ()=>{
        outputColor.current.select();
        navigator.clipboard.writeText(outputColor.current.value);
    };

    return(
        <>
            <main id="container" className="w-screen h-auto flex justify-center items-center">
                <div id="color-picker" className="w-1/3 border p-5 flex flex-col justify-center items-center gap-5">
                    <div id="display-color" className=" w-[80%] h-[30vh] border rounded-lg flex justify-center items-center" style={{backgroundColor: color}}>
                        <h1 className="text-3xl " ref={notice}>{notice.current == "" ? "Pick the Color" : color}</h1>
                    </div>
                    <div id="get-color" className="flex">
                        <input type="text" className="border outline-none text-center text-lg" value={color}  readOnly ref={outputColor}/>
                        <button id="copy" className={`p-1 border w-20 font-bold bg-black`} onClick={copyColor}>Copy</button>
                    </div>
                    <div id="select-color" className="group flex flex-col  items-center">
                        <input type="color" className="w-28 h-10 cursor-pointer" value={color} onChange={updateColor} />
                        <p className="text-center group-hover:border-b w-max">Pick Color</p>
                    </div>
                    <label htmlFor="Choose color" id="choose-color" className="">

                    </label>
                </div>
            </main>
        </>
    )
}

export default ColorPicker;