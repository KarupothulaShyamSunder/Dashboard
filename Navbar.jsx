import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsJustifyLeft}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustifyLeft className='icon-1' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
           <div className="heading">
            <h1>Hey Siri,</h1>
           </div>
        </div>
        <div className='header-right'>
        <div className="search">
        <BsSearch color='red' />
        <input type="text" placeholder="Search" />
        </div>
           
        </div>
    </header>
  )
}

export default Header