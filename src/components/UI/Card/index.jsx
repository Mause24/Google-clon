import React from 'react'

const Card = ({link, title,description, tags=[], img}) => {
  return (
    <section className='card'>
        <div className='card__info'>
            <a href="#">{link}</a>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {
                    tags.map(item=><li>{item}</li>)
                }
            </ul>
        </div>
        <div className='card__image'>
            <img src={img} alt="image__card" />
        </div>
    </section>
  )
}

export default Card