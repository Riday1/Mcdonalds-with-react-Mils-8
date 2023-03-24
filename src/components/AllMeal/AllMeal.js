import React, { useEffect, useState } from 'react';
import OrderList from '../OrderList/OrderList';
import SingleMeal from '../SingleMeal/SingleMeal';
import './AllMeal.css';




const AllMeal = () => {
    const [meals, setMeals] = useState([])
    const [ordersList, setOrdersList] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    //before reload .
    const handleAddToOrderList = (selectedMeal) => {
        const newOrderList = [...ordersList, selectedMeal];
        setOrdersList(newOrderList);
    }



    return (
        <div className='allMeal-container'>
            <div className="meal-container">
                {
                    meals.map(meal =>
                        <SingleMeal
                            key={meal.idMeal}
                            meal={meal}
                            handleAddToOrderList={handleAddToOrderList}
                        ></SingleMeal>
                    )
                }
            </div>
            <div className="cart-container">
                <OrderList ordersList={ordersList} setOrdersList={setOrdersList}></OrderList>
            </div>
        </div>
    );
};

export default AllMeal;