// To make importing classes cleaner, I use index files that import all classes from the different files, and then bundle those and deliver as one export
// Also give every main component of each folder a css file titled after itself, to make custom css a bit easier to find, and it gives more structure
import React, {Component} from 'react';
import {Header, Footer, Home, Classes, Subclasses, Races, Spells, Feats, Backgrounds, NotFound} from './ComponentIndex';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './app.css';

// Every class has to extend Component!
class App extends Component {
    render() {
        return (
            // There can only be one main element, everything has to be wrapped in it, so you cannot return two p without wrapping it in a div
            // The router makes for, well, routing. All pages are rendered on loading, and the router switches between them based on the path
            <Router>
                <Header />
                <main className="h-screen">
                    <Route exact path='/' component={Home} />
                    <Route exact path='/Classes' component={Classes} />
                    <Route exact path='/Subclasses' component={Subclasses} />
                    <Route exact path='/Races' component={Races} />
                    <Route exact path='/Spells' component={Spells} />
                    <Route exact path='/Feats' component={Feats} />
                    <Route exact path='/Backgrounds' component={Backgrounds} />
                    <Route exact path='/404' component={NotFound} />
                    <Redirect to="/404" />
                </main>
                <Footer />
            </Router>
        );
    };
}

export default App;