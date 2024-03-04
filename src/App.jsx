import { useState } from "react";
import "./App.css"
import {motion} from 'framer-motion'

function App() {
  const [card,setcard]=useState(false);
  return (
    <>

      <div className="bg-black-300  border p-4 m-4 rounded hover:border-green-500 cursor-pointer select-none">
        Upcoming......
      </div>
    </>
  );
}



export default App;



