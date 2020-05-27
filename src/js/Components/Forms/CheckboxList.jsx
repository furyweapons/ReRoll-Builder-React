import React, {Component} from 'react';

class CheckboxList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label htmlFor={this.props.propname} className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-blue-400">{this.props.label}</label>
                    {this.props.items.map(elm => {
                        // Elements require a key attribute when iterated to be unique
                        return (<div key={elm} className="px-4 py-2 flex">
                                    <label htmlFor={elm} className="inline-block px-2 font-semibold">
                                        {elm}
                                    </label>
                                    <input type="checkbox" name={elm} id={elm} className="inline-block bg-white rounded-full px-4 my-2"/>
                                </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default CheckboxList;