import React from 'react';

class SearchBar extends React.Component {
    whenInput = (event) => {
        var value = event.target.value
        this.props.onSearch(value)
    }
    render () {
        return (
            <div className="search-bar">
                <input type="text"
                    onChange={this.whenInput} />
            </div>
        )
    }
}

export default SearchBar