import { Component } from 'react';

class SearchBox extends Component {

    render() {
        return(
            <input 
                className={`search-box text-3xl rounded-lg font-extrabold text-center bg-[#F8F0E3] relative mt-6 ml-[800px] p-2 w-1/5 leading-7 ${this.props.className}`}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
             />
        );
    }
}

export default SearchBox;