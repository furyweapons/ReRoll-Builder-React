import React, {Component} from 'react';

class InputField extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label htmlFor={this.props.propname} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue-400">{this.props.label}</label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     type="text" placeholder={this.props.placeholder}/>
                </div>
            </div>
        );
    }
}

export default InputField;