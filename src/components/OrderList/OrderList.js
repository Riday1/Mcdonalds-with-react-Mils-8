import React from 'react';
import './OrderList.css';





const OrderList = ({ ordersList, setOrdersList }) => {
    const handleRemoveItemFromList = (selectedMeal) => {
        const rest = ordersList.filter(meal => meal.idMeal !== selectedMeal.idMeal);
        setOrdersList(rest);
    }
    return (
        <div className='order-list'>
            <h3>Order Summary</h3>
            {
                ordersList.map(meal => <p key={meal.idMeal} onClick={() => handleRemoveItemFromList(meal)}>{meal.strMeal}</p>)
            }
        </div>
    );
};

export default OrderList;