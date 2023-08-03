import React from 'react';
import './Header.css'

const Header = () => {

    const listMenu = [
    {   "name": "Original",
        "mode": "",
        "id": 1,
 
    },
    {   "name": "Dark",
        "mode": "dark",
        "id": 2,
 
    },
    {   "name": "Elegant",
        "mode": "elegant",
        "id": 3,

    },
    ]

    function handleClick (e) {
        document.body.className = e.target.getAttribute('data-id');
    }

  return (
    <header className='menu'>
        <nav className='menuNav'>
            <ul className='menuList'>
                {listMenu.map((item) => <li onClick={handleClick} className='menuItem' key={item.id} data-id={item.mode}>{item.name}</li>)}
            </ul>
        </nav>
    </header>
  )
}

export default Header