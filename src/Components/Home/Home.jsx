import React, {Component} from 'react';
import {Welcome, Github} from './Index';
import './home.css';

class Home extends Component {
    componentDidMount() {
        let elm = document.querySelector("a.border-black");
        if (elm) elm.classList.remove("border-2", "border-solid", "border-black", "rounded-full");
    }

    render() {
        return(
            <div className="pt-20 container px-3 mx-auto flex flex-wrap flex-col md:flex-row justify-center">
                <div className="justify-center items-center">
                    <Welcome />
                    <Github />
                </div>
            </div>
        )
    };
}

export default Home;