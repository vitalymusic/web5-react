import {useState } from "react";
import Element1 from "./Element1";
import Element2 from "./Element2";

function Rendering() {
    let [window,setWindow] = useState(false)

    return ( 
    <>
        <div>
             <input type="checkbox" name="" id="" value="1" onChange={()=>{
            setWindow(!window)
        }}/>
        </div>
       
        <div>
            {window == true?<Element1 />:<Element2 />}
        </div>

    </> );
}

export default Rendering;