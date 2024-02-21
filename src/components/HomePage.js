

import { useState } from 'react';
import React from 'react';


export default function Home(props) {
    
    const [text, setText] = useState('');

    let uc = function upperCase() {
       
        setText(text.toUpperCase());
  
      }

    let hc =   function handleChange(e) {
        setText(e.target.value);
      }

     

    let lc = function lowerCase(){
        setText(text.toLowerCase())
    }
    
    let ct = function clearText(){
        setText('')
    }




    
    
  

   
    
    

    return(
        <>
        <div className="home h-auto max-sm:h-auto flex flex-col items-center justify-center gap-[2vw] max-sm:gap-[3vh] mt-[2vw]">
           
    <div className="inputfield flex flex-column items-middle justify-center" >
        <textarea onChange={hc} value={text} className=" outline-none  w-[80vw] h-[57vh] rounded-[10px] text-left text-blue p-[1.5vw] text-[1.2vw] drop-shadow-2xl  border-t-[4px] border-grey-200 max-sm:w-[90vw] max-sm:h-[40vh] max-sm:text-[2vh] max-sm:p-3 max-lg:w-[85vw] max-lg:h-[40vh] max-lg:text-[1.5vh] max-lg:p-5" />
    </div>
    
    <div className="buttons flex align-middle justify-left w-[80vw] h-[10vh] mt-0 gap-6 ml-[0vw] max-sm:w-auto max-sm:h-auto items-center max-sm:gap-[2vh]  max-lg:w-[85vw]">
        <button  onClick={uc}  className=" h-[3vw] w-[14vw] rounded-[10px] text-[1.2vw]  bg-black text-white max-sm:w-[27vw] max-sm:h-[6vh] max-sm:text-[1.7vh] max-sm:rounded-[5px] max-lg:h-[4vh] max-lg:text-[1.4vh] max-lg:w-[22vw] max-lg:rounded-[5px]">Convert to UpperCase</button>
        <button onClick={lc} className=" h-[3vw] w-[14vw] rounded-[10px] text-[1.2vw]  bg-black text-white max-sm:w-[27vw] max-sm:h-[6vh] max-sm:text-[1.7vh] max-sm:rounded-[5px] max-lg:h-[4vh] max-lg:text-[1.4vh] max-lg:w-[22vw] max-lg:rounded-[5px]">Convert to LowerCase</button>
        <button onClick={ct} className=" h-[3vw] w-[14vw] rounded-[10px] text-[1.2vw]   bg-black text-white max-sm:w-[27vw] max-sm:h-[6vh] max-sm:text-[1.7vh] max-sm:rounded-[5px] max-lg:h-[4vh] max-lg:text-[1.4vh] max-lg:w-[22vw] max-lg:rounded-[5px]">Clear Text</button>
    </div>

        <div className="textpreview  w-[79vw] h-[20vh] p-[1.5vw] max-sm:w-[89vw] max-sm:text-[2vh] max-sm:h-[15vh]  max-lg:h-[10vh] max-lg:w-[85vw]">
            <h1 className='font-bold text-[2vw] max-sm:text-[2.5vh] max-lg:text-[2vh]'>Text Summery</h1>
            <span>Words: {(text.split(' ')).length}</span>
            <span className='ml-6'>Characters: {text.length}</span>
            <span className='ml-5'>Read Words: {(text.split(' ').length)*0.008} minutes</span>
        </div>
    <div className="textpreview  w-[79vw] h-[20vh] p-[1.5vw] max-sm:w-[89vw] max-sm:text-[2vh] max-sm:h-auto  max-lg:h-[auto] max-lg:w-[85vw]">
        <h1 className='font-bold text-[2vw] max-sm:text-[2.5vh] max-lg:text-[2vh]'>Text Preview</h1>
        <p className="border-2px border-solid border-black">{text}</p>
    </div>
    

    </div>
    </>
    );
}