import React, {Component} from "react";
import { Logo, Hamburger, Navigation } from "./Index";
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="w-full z-30 top-0 text-white transition duration-500 ease-in-out">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-1">
                    <Logo />
                    <Hamburger />
                    <Navigation />
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0"></hr>
            </header>
        );
    }
}

export default Header;