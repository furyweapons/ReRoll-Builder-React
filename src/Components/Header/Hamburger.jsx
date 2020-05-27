import React, {Component} from 'react';

class Hamburger extends Component {
    handleClick(e) {
        e.preventDefault();
        let elm = document.querySelector('nav');
        elm.classList.toggle("hidden");
    }

    render() {
        return (
            <div className="block lg:hidden pr-4" onClick={this.handleClick}>
                <button className="flex items-center p-1 text-orange-800 hover:text-gray-900" id="nav-toggle">
                    <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </button>
            </div>
        );
    }
}

export default Hamburger;