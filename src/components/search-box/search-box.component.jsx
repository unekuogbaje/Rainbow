import { Component } from 'react';

// import './search-box.styles.css';

class SearchBox extends Component {

    render() {
        return(
            <input 
                className={`search-box text-3xl rounded-lg font-extrabold text-center bg-[#F8F0E3] relative ml-60 p-2 w-2/4 leading-7 ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
             />
        );
    }
}

export default SearchBox;