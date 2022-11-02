import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export function MealDetails() {
    const [meal, setMeal] = useState({})
    const {id} = useParams()

    async function fetcher() {
        const res = await fetch(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await res.json()
        console.log(data.meals[0])
        setMeal(data)
    }
    useEffect(() => {
        fetcher(id)
    }, [id])

    return (
        <>
            <p>{meal.strInstruction}</p>
            <img src={meal.strMealThumb} />
        </>
    )
}