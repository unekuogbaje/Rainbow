import { Component } from 'react';

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list'>
                {batches.map((batch) => (
                    <div className='card-container' key={batch.id}>
                        <img alt={`batch ${batch.name}`} src={`https://robohash.org/${batch.id}/?set=set2&size=180x180`}/>
                        <h2>{batch.name}</h2>
                        <p>{batch.email}</p>

                    </div>
                ))}
            </div>
        );
    }
}

export default CardList;