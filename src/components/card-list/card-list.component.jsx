import { Component } from 'react';

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list'>
                {batches.map((batch) => (
                    <div className='card-container' key={batch.id}>
                        <img alt={`batch ${batch.name}`} />

                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;