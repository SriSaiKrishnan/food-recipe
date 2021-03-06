import React  from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, key}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient) => (
                   <li key={key}>{ingredient.text}</li> 
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <img className={style.image} src={image} alt="imgtext" />
        </div>
    )
}

export default Recipe;