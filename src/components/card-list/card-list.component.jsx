import { Component } from 'react';

class CardList extends Component {
    render() {
        const { batches } = this.props;

        return(
            <div className='card-list'>
                {batches.map((batch) => {
                    const { name, email, id } = batch;
                    return (
                    <div className='card-container' key={id}>
                        <img 
                            alt={`batch ${name}`} 
                            src={`https://robohash.org/${id}/?set=set2&size=180x180`}
                        />
                        <h2>{name}</h2>
                        <p>{email}</p>

                    </div>
                )})}
            </div>
        );
    }
}

export default CardList;