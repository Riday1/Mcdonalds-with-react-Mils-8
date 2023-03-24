import React from 'react';
import './SingleMeal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



const SingleMeal = ({ meal, handleAddToOrderList }) => {
    const { strMeal, strMealThumb, strArea, strCategory, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = meal;



    return (
        <div className='single-meal'>
            <img src={strMealThumb} alt="" />
            <div className='meal-info'>
                <p className='meal-name'>{strMeal}</p>
                <p>Origin : {strArea}</p>
                <p>Category : {strCategory}</p>
                <p><small>{strIngredient1} , {strIngredient2}, {strIngredient3},{strIngredient4}</small></p>

            </div>

            <button onClick={() => handleAddToOrderList(meal)} className='btn-order'>
                <p>Add To Order</p>
                <FontAwesomeIcon icon={faCheck} />
            </button>
        </div>
    );
};

export default SingleMeal;