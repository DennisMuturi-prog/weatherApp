import { useState } from 'react'
import './Navbar.css'
const NavBar = ({changeChosenNav}) => {
    const [activeOne,setActiveOne]=useState([1,0,0]);
  return (
    <nav>
        <ul>
        <li className={activeOne[0] &&'active'} onClick={()=>{setActiveOne([1,0,0]);
        changeChosenNav('today')}}>Today</li>
        <li className={activeOne[1] &&'active'} onClick={()=>{setActiveOne([0,1,0]);
        changeChosenNav('tomorrow')}}>Tomorrow</li>
        <li className={activeOne[2] &&'active'} onClick={()=>{setActiveOne([0,0,1]);
        changeChosenNav('next 3 days')}}>next 3 days</li>
        </ul></nav>
  )
}

export default NavBar