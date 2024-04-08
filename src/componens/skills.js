import { MdOutlineLocalMovies,MdArrowDropDown} from "react-icons/md";
import { LuSendToBack} from "react-icons/lu";
import { useState } from 'react'
export default function Skills(){
    const [skillToggel,setToggle]=useState(false);
    const [backToggle,setBackToggle]=useState(false);
    const config={
        line1:'HTML',
        line2:'CSS',
        line3:'JAVASCRIPT',
        line4:'REACJ JS',
        line5:'NODE JS',
        line6:'EXPRESS',
        line7:'MONGODB',
    }

    return <section  id="skills" className="bg-primary flex flex-col justify-center py-20 text-center">
             <h2 className="text-6xl text-b font-pro-font font-bold ">Skills</h2><span className="text-slate-400 pb-10">My technical level</span>
            <div className=" block md:flex  justify-center text-center gap-10">
           <div>
           <div className="flex justify-center py-5">
           <MdOutlineLocalMovies className="text-3xl text-fuchsia-600 mx-3"/>
           <h1 className="font-hero-font font-bold text-3xl text-white  ">Frontent developer</h1> <MdArrowDropDown className="text-3xl text-fuchsia-600"  onClick={()=>setToggle(!skillToggel)} />
           </div>

            {skillToggel && <nav className="p-10" >
                            <ul className="flex flex-col font-pro-font text-left ">
                                <li className="text-white text-2xl ">{config.line1} <br /><input type="range" min="0" max="10" value={9} className="w-full"></input></li>
                                <li className="text-white text-2xl">{config.line2} <br /><input type="range" min="0" max="10" value={7} className="w-full"></input></li>
                                <li className="text-white text-2xl">{config.line3} <br /><input type="range" min="0" max="10" value={7} className="w-full"></input></li>
                                <li className="text-white text-2xl">{config.line4} <br /><input type="range" min="0" max="10" value={6} className="w-full"></input></li>
                               
                            </ul>
            </nav>}
            </div>
            <div className="margin-left">
            <div className="flex justify-center py-5">
           <LuSendToBack className="text-3xl   text-fuchsia-600 mx-3 " />
           <h1 className="font-hero-font font-bold text-3xl text-white p-0 ">Backend developer</h1>
            <MdArrowDropDown className="text-3xl text-fuchsia-600 "  onClick={()=>setBackToggle(!backToggle)} />
            </div>
            {backToggle && <nav className="p-10">
                            <ul className="flex flex-col font-pro-font text-left">
                            <li className="text-white text-2xl ">{config.line5} <br /><input type="range" min="0" max="10" value={7} className="w-full"></input></li>
                                <li className="text-white text-2xl"> {config.line6}<br /><input type="range" min="0" max="10" value={7} className="w-full"></input></li>
                                <li className="text-white text-2xl">{config.line7} <br /><input type="range" min="0" max="10" value={8} className="w-full"></input></li>
                                
                               
                            </ul>
            </nav>}
            </div>
            </div>        
        </section>
       
        
    
}