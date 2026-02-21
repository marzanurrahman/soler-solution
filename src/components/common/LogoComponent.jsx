import React, { useEffect, useState, useRef } from 'react'
import Logo from './Logo'
import { Menu } from 'lucide-react'
import MobileSideBar from './MobileSideBar';
  
  const LogoComponent = () => {
    const [toggle, setToggle] = useState(false)
    const menuRef = useRef();

    useEffect(() => {
      document.addEventListener("click", (e)=>{
        menuRef.current.contains(e.target) ? setToggle(true) : setToggle(false);
      });
    }, [])

    return (
      <div className='w-full lg:w-auto flex items-center justify-between' >
        <Logo/>
        <button ref={menuRef} onClick={()=> setToggle(true)}>
          <Menu className='text-white lg:hidden'/>
        </button>
        <MobileSideBar toggle={toggle} setToggle={setToggle}/>
      </div>
    )
  }
  
  export default LogoComponent