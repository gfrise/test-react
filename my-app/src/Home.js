import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export function Home() {
    const [input, setInput] = useState([])
    const [meals, setMeals] = useState([])
    
    function handleChange(event) {
        setInput(event.target.value)
    }

    async function fetcher() {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        const data = await res.json()
        console.log(data)
        setMeals([...data.meals])
    }   

    return (
        <>
        <input value={input} onChange={handleChange}></input>
            <button onClick={fetcher}>Prendi</button>
                <div>
                {meals.map((meal, id) => {
                    <Link to={`/MealsDetails/${meal.idMeal}`}><li key={id}> {meal.strMeal} </li></Link>
                })}
                </div>
          
        </>
    )
}
