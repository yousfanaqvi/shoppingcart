import React,{useRef, useState} from 'react';
import "./menu.css"
import {AiOutlineMenu} from "react-icons/ai"
import SideMenu from '../sideMenu/sideMenu'

 export default function TemporaryDrawer () {

  const [hidden, setHidden] = useState(true);
  
  
  return (     
        <aside>
        {!hidden ?  <div id="sidenav" className="sidenav">
            <SideMenu/> 
          </div> : null}
        <button className='btn-menu' onClick={() => setHidden(s => !s)}>
          <AiOutlineMenu/>
        </button> 
          
        </aside> 
        
          
  );
}
