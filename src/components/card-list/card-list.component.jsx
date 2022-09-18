import { Component } from 'react';
import Card from '../card/card.component'

// import './card-list.styles.css';

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list mt-12  justify-between col col-rows-3 grid-flow-col gap-8 p-10'>
                {batches.map((batch) => {
                    return <Card batch={batch} />;
                })}
            </div>
        );
    }
}

export default CardList;