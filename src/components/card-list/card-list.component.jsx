import { Component } from 'react';
import Card from '../card/card.component'

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list grid grid-rows-3 grid-flow-col gap-4 p-[25px] '>
                {batches.map((batch) => {
                    return <Card batch={batch} />;
                })}
            </div>
        );
    }
}

export default CardList;