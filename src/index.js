import React from 'react';
import ReactDOM from 'react-dom';
import { yt_api_key as api_key } from '../yt_api_key';
// imports the `React` object from ../node_modules/react

import SearchBar from './components/search_bar'
// Imports the `SearchBar` component/object from ./components/search_bar
// (`src` is the directory this file is in)

// Create a new component.
// This component produces HTML.

// var func = () => {...}
// equivalent to
// var func = function() {...}

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    ); // I guess this is the HTML inside the JSX? Or just JSX?
}
// Take this component's HTML and shove it into the DOM/put it on the page

ReactDOM.render(<App />,
                document.querySelector('.container'));
// ... dang this is ugly.
// document.querySelector('.container') => returns a DOM element with
// class `container`
