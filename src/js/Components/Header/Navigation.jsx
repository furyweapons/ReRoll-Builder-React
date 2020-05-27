import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    handleClick(e) {
        let elm = document.querySelector('a.border-black');
        if (elm) elm.classList.remove("border-2", "border-solid", "border-black", "rounded-full");
        e.target.classList.add("border-2", "border-solid", "border-black", "rounded-full");
    }

    render() {
        return (
            <nav className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20 hidd">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    <li className="mr-3"><Link to="/Classes" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Classes</Link></li>
                    <li className="mr-3"><Link to="/Subclasses" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Subclasses</Link></li>
                    <li className="mr-3"><Link to="/Races" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Races</Link></li>
                    <li className="mr-3"><Link to="/Spells" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Spells</Link></li>
                    <li className="mr-3"><Link to="/Feats" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Feats</Link></li>
                    <li className="mr-3"><Link to="/Backgrounds" className="inline-block py-2 px-4 text-black font-bold text-lg hover:underline py-2 px-4" onClick={this.handleClick}>Backgrounds</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;