import React, {Component} from 'react';

class Github extends Component {
    handleClick(e) {
        e.preventDefault();
        window.open('https://github.com/ChillFish8/ReRoll-Builder', '_blank');
    }

    render() {
        return(
            <div className="flex justify-center" id="github">
                <div className="flex content-start flex-wrap h-auto">
                    <div className="w-full p-2">
                        <div className="p-5 darker" id="github-box">
                            <div className="flex content-start">
                                <div className="inline-block px-5">
                                    <h1 className="align-top text-2xl font-semibold text-blue-500 hover:underline cursor-pointer" onClick={this.handleClick}>
                                        ChillFish8/ReRoll-Builder
                                    </h1>
                                    <p className="align-middle">A self contained webserver to build ReRoll JSON files</p>
                                </div>
                                <img alt="CF8" className="h-40 w-40 object-cover" src="https://avatars1.githubusercontent.com/u/57491488?s=400&amp;v=4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Github;