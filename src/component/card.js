import React from 'react'

const Card = (props) => {
    const card = props.card;
    return (
        <div className='card'>
            <h5>{card.title}</h5>
            <div className='ntbd'>
                {card.body}
            </div>
        </div>
    )
}

export default Card
