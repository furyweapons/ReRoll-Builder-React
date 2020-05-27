import React, {Component} from 'react';

class FooterButton extends Component {
    // Props are the attributes, like src is an attribute in <img src="bla" />
    constructor(props) {
        super(props);
        // We need to bind 'this' to it, otherwise it would have another 'this' context
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        window.open(this.props.url, '_blank');
    }

    // !Very important! Do not forget to close unary tags like <img ... />, otherwise it will throw an error
    render() {
        return (
            <button className="inline-block px-4 focus:outline-none" onClick={this.handleClick}>
                <img alt="" className="h-10 pr-2 fill-current inline 1em rounded-full" src={this.props.img} />
                {this.props.text}
            </button>
        );
    }
}

export default FooterButton;