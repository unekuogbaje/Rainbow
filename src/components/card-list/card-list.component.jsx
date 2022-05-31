import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log(this.props.batches);
        console.log('render from Cardlist');
        const { batches } = this.props;

        return(
            <div>
                {batches.map(batch => (
                    <h1 key={batch.id}>{batch.name}</h1>
                ))}
            </div>
        );
    }
}

export default CardList;