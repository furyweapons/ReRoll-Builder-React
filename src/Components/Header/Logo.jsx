import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <div className="pl-4 flex items-center">
                <Link to='/' className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    ReRoll JSON Builder
                </Link>
            </div>
        );
    }
}

export default Logo;