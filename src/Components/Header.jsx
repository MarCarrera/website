import React from 'react';
import Navbar from './Navbar';
import Service from './Service';

function Header(){
    return(
        <div id='main'>
        
            <Navbar/>
            <div className='name'>
                <h1>¿Qué es lo que buscas?</h1>
            </div>
            <Service/>
            
        </div>
        
    )
}

export default Header;