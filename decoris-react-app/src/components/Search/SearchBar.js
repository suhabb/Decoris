import React from 'react';


class SearchBar extends React.Component {

    state = {
        term: ''
    }

    onInputClicked() {
      
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Form submit");
        this.props.onSubmit(this.state.term);

    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label> Image Search</label>
                        <input type="text" value={this.state.term} onChange={event => this.setState({ term: event.target.value })}
                            onClick={this.onInputClicked} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar