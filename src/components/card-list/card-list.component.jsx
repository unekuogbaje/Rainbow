import { Component } from 'react';

import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list'>
                {batches.map((batch) => {
                    const { name, email, id } = batch;
                    return (
                    <div className='card-container' key={id}>
                        
                        <h2>{name}</h2>
                        <p>{email}</p>

                    </div>
                )})}
            </div>
        );
    }
}

export default CardList;