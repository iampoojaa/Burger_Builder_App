import React from 'react'
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, ele) => {
        return arr.concat(ele)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients!</p>
    }
    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger
