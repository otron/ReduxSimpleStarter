import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// imports the `React` object from ../node_modules/react
import YTSearch from 'youtube-api-search';

import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar'
// Imports the `SearchBar` component/object from ./components/search_bar
// (`src` is the directory this file is in)

import { yt_api_key as api_key } from '../yt_api_key';
// What you'd think I'd just include the API key directly in the source?
// Who am I, myself eight years ago?
// Well yes I guess the me-of-now encapsulates the me-of-then like how
// the set {1, 2, 3} is a superset of {1, 3}.

// Create a new component.
// This component produces HTML.

// var func = () => {...}
// equivalent to
// var func = function() {...}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('such butt wow amaze');

      // resolves to this.setState({videos: videos}) because it's ES6 magic that
      // happens when the JSON entry's name is the same as the variable we want to set it to.
  }

  videoSearch(term) {
    YTSearch({ key: api_key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    ); // I guess this is the HTML inside the JSX? Or just JSX?
    // It's all JSX. JSX is JS extended with XML-like stuff. Like HTML.
    // stuff inside {}-brackets in JSX is straight up JS code.
    // So it's JS with freeform XML and then {JS} in that. lol.
  }

}
// Take this component's HTML and shove it into the DOM/put it on the page

ReactDOM.render(<App />,
                document.querySelector('.container'));
// ... dang this is ugly.
// document.querySelector('.container') => returns a DOM element with
// class `container`
