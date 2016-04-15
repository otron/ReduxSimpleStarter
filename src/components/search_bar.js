import React, { Component } from 'react'
// need to do this import stuff because the transpiler doesn't add it

// Generates an input field.
class SearchBar extends Component {

    constructor(props) {
        super(props)

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) } />
            </div>
        );
                        // this.setState({ term: event.target.value })} />
        // such html/js mix & match, very confuz.
        // use `this.setState` when altering the state of a component/object
        // `setState` accepts a JSON string I guess.
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar;
// "now, any file that imports `SearchBar` will get this here thing.
