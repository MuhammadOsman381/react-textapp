import Home from "./HomePage.js"
import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Nav() {

    const c = {
      color:'white',
    //   backgroundColor: '#4d4855',
    // backgroundImage: 'linear-gradient(147deg, #4d4855 0%, #000000 74%)'
    backgroundColor:'black'
    }

    let nav = () =>{
          let ham = document.querySelector('.ham');
          let bar = document.querySelector('.bar');

          if(bar.classList.contains('fa-bars'))
          {
            ham.style.display = "flex";
            bar.classList.remove('fa-bars');
            bar.classList.add('fa-xmark');
          }
          else
          {
            ham.style.display = 'none';
            bar.classList.remove('fa-xmark');
            bar.classList.add('fa-bars');
          }
          
    }

    let box = () =>
    {
      let ham = document.querySelector('.ham');
        let list = document.querySelector('.list');
        let bar = document.querySelector('.bar');
        // if(ham.style.color === 'black')
        // {
        //   ham.style.display = "none";
        //   bar.classList.remove('fa-xmark');
        //   bar.classList.add('fa-bars');
        // }
        // else if(ham.style.color === 'white')
        // {
        //   ham.style.display = "flex";
        // }
    }


    return (
      <div className="nav flex flex-row  flex-wrap items-center justify-between h-[10vh] p-4 font-bold bg-zinc-300 text-[1.2vw] max-sm:p-0 max-sm:text-[2vh] max-sm:justify-center max-sm:items-center max-sm:h-[7vh] max-sm:gap-[0vh] max-lg:h-[6vh] max-lg:text-[1.4vh]" style={c} >

        <div className="appname max-sm:flex max-sm:items-center max-sm:justify-between max-sm:mt-[0vh] max-sm:w-[95vw] max-sm:h-[7vh]">
        <h1 className="ml-[0vh] mt-[0vw]">myTextApp</h1>
        <i className="bar fa-solid fa-bars fa-xl text-[5vw] hidden max-sm:flex  " onClick={nav}></i>
        </div>

        <div className="ham  text-white list-none flex flex-row gap-[2vw] max-lg:gap-[2vh] max-sm:flex-col  max-sm:h-[15vh] max-sm:w-[100vw] items-center justify-center max-sm:hidden max-sm:bg-zinc-100 bg-black relative z-10">
        <li className="max-sm:text-black" onClick={box}><Link to="home">Home</Link></li>
        <li onClick={box} className="max-sm:text-black"><Link to="about" >About myTextApp</Link></li>
        </div>

        <Outlet />
      </div>
    )
  };