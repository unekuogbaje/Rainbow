import { Component } from 'react';
import Card from '../card/card.component'

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list mt-12 grid grid-rows-3 grid-flow-col gap-4 p-10'>
                {batches.map((batch) => {
                    return <Card batch={batch} />;
                })}
            </div>
        );
    }
}

export default CardList;