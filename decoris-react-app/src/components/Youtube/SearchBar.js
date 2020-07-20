import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchText: ''
    }


    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({ searchText: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchText)
    }



    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchText} onChange={this.handleOnChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar