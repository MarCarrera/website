import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" >Welcome</a>  
          <ul className='menu'>
            <li><a href='#'>Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar 