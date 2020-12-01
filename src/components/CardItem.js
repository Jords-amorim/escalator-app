import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <div>

    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='categories foto'
              src={props.src}
            />
             <h2 className='cards__item__text'>{props.text}</h2>
          </figure>
          
        </Link>
      </li>
    </>
            
        </div>
    )
}

export default CardItem



