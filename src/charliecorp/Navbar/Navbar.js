import React, { Component } from 'react';
import {MenuItems} from "./MenuItems"
import "./Navbar.css"

class Navbar extends Component {
    
    state= { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render()
    
    {
        return(
            <nav className="navbar-items">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a className="text-deco" href="/homee"><h2 className='navbar-logo'>Charlie<span className='font_weight_light'>Corp</span></h2></a>
                <a href='/'><button className='botton_logout'>Log out</button></a>
            </nav>
        )
    }
}

export default Navbar