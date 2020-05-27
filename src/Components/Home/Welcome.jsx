import React, {Component} from 'react';

class Welcome extends Component {
    render() {
        return(
            <div>
                <h1 className="my-4 text-5xl text-center font-bold">Welcome!</h1>
                <span className="text-center text-2xl mb-8">This site was made by CF8 to help people using the ReRoll JSON format to add their own content.</span>
                <p className="text-center text-2xl mb-8">To get started just navigate with the nav bar to start building!</p>
            </div>
        );
    }
}

export default Welcome;