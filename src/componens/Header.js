import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header(){
    const [toggleMenu,setToggle]=useState(false)
    return <header className="flex justify-between px-7 py-4 bg-primary">
        <a  className="font-bold text-black" href="#">VS Hari</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="/">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden ">
        <ul onClick={()=>setToggle(!toggleMenu)} className="flex flex-col text-white mobile-nav">
            <li><a href="/">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
       <button  onClick={()=>setToggle(!toggleMenu)} className='block md:hidden'><Bars3Icon  className='text-white h-5'/></button>
    </header>
   
}