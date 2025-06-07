  import { useState } from "react";
  import ColorPicker from "./Components/ColorPicker";

  function App() {

    const [borderB,setBordeB] = useState("");
    const [project,setProject] = useState("");

    const colorPicker = (project)=>{
      setBordeB("btn-1");
      setProject(project);
    }

    const digitalClock = ()=>{
      setBordeB("btn-2");
    }

    const stopWatch = ()=>{
      setBordeB("btn-3");
    }

    function projectDisplay() {

      switch (project) {
        case "color-picker" : 
        return (
          <ColorPicker />
        );
        
        default : null
      }
    }

    return(
      <>
        <nav id="Heading" className="p-10 flex justify-center w-screen h-auto items-center">
          <h1 className="text-3xl border-b pt-5 ">Practice React Projects</h1>
        </nav>

      {/* Select Project  */}

        <main className="w-screen flex justify-center mt-5  p-5">
          <div id="projects" 
            className="w-screen flex justify-evenly text-lg">
              
            <button id="btn-1" 
              className =  {`cursor-pointer ${borderB == 'btn-1' ? 'border-b' : 'border-none'} p-1`} 
              onClick={() => colorPicker("color-picker")}
              >Color Picker
            </button>

            <button id="btn-2" 
              className={`cursor-pointer ${borderB == 'btn-2' ? 'border-b' : `border-none`} p-1`}
              onClick={() => digitalClock()}
                >Digital Clock
            </button>

            <button id="btn-3"
               className={`cursor-pointer ${borderB == 'btn-3' ? 'border-b' : `border-none`} p-1`} 
               onClick={() => stopWatch()}
                >Stop Watch
            </button>

          </div>
        </main>

      {/* Projects */}

        <main className="w-screen h-auto">
          <div id="display-project" className="flex justify-center items-center mt-5">
            {projectDisplay()}
          </div>
        </main>
      </>
    )
  };

  export default App;