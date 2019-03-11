import React from 'react';
import './Gallery.css';
import Clearfix from 'react-clearfix';
import image1 from './image1.jpg';
import image2 from './image2.jpg';

const round = (price) => {
    return Number.parseFloat(price).toFixed(2);
  }


const Gallery = (props) => {
    return (
        <section className="gallery">
            <ul>
                {props.userResults.map(result => {
                    return (
                        <li key={result.id} onClick={() => {props.handleClick(result.id)}}>
                            {(result.id === 1043) ? (<img src={image1} alt={result.name} />)
                            : (result.id === 1042) ? <img src={image2} alt={result.name} />
                            : <img src={result.image_link} alt={result.name}/>}
                            <h2 className="title">{result.name}</h2>
                            {result.price > 0 ? (<p className="price">${result.price}</p>) : (<p className="none">Price is unavailable</p>)}
                        </li> 
                    )
                })}
                <Clearfix />
            </ul>
        </section>
    )
}

export default Gallery;

