import React from 'react';
import './MovieRow.css';

const Rows = ({title, items}) => {
    return (
        <div className='cardRow'>
            <h2>{title}</h2>
            <div className='cardRow-listarea'>
                <div className='cardRow-list'>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className='cardRow-item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                        
                            

                    ))}

                </div>
                
            </div>
        </div>
    );
};

export default Rows;
