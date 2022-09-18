import { Component } from 'react' ;

class Card extends Component {
    render() {
        const {id, name, email} = this.props.batch;
        return (
            <div className='card-container bg-[#F8F0E3] p-6 gap-1 border-2 shadow-2xl w-60 h-72 rounded-lg cursor-pointer transform duration-200 hover:scale-110'
            key={id}>
                <img 
                alt={`batch ${name}`}
                src={`https://robohash.org/&${id}/?set=set3&size=180x180`}
                 />
                <h2 className='font-bold text-2xl'>{name}</h2>
                <p className='font-bold text-xl'>{email}</p>
             </div>
        )
    }
}

export default Card;