import React from 'react';
import './Navbar.css';
import Logo from './Assets/gamecontroller.png'


const Navbar = (props) => {
    return(
    
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Navbar</title>
        </head>
        <body>
            <header>
                <img src={Logo} alt='logo' className='logo'/>
                <nav>
                    <ul className='nav_links'>
                        <li><a href='#search'>Search Games</a></li>
                        <li><a href='#graphs'>View Graphs</a></li>
                        <li><a href='#nav'>Home</a></li>
                    </ul>
                </nav>
            </header>
        </body>
        </html>
    )
}
export default Navbar;