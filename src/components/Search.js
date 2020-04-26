import React, { Component } from 'react'

class Search extends Component {
    submit(event) {
        event.preventDefault();
        let value = this.refs.username.value;
        this.props.searchProfile(value);
        this.refs.username.value = '';

    }

    render() {
        return (
            <div className="search-box">
                <form  onSubmit={this.submit.bind(this)}>
                    <label>
                        <input type="search" ref="username" className="form-control" placeholder="search user" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Search;