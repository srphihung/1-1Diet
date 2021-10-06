import { IonCard, IonContent, IonIcon, IonImg, IonItem, IonList } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { close } from 'ionicons/icons'
import { Link } from 'react-router-dom'
import Logo from '../../../images/logodiet.svg'
import '../../styles/Recipes/RecipeStyle.css'

function RecipeInfo() {
    const { title } = useParams();
    const [recipes, setRecipes] = useState([])

    const recipeDetails = recipes.filter((recipe) => {
        return recipe.title === title
    })

    useEffect(async () => {
        const api_url = 'http://31.14.96.253/recipes'
        var response = await fetch(api_url)
        var data = await response.json()
        setRecipes(data)
    }, [setRecipes])

    return (
        <IonContent className="recipeDetails">
            <div className="recipeDetailContent">
                <div className="navigationInfo">
                    <Link to="/recipes"><IonIcon icon={close} className="goBack"></IonIcon></Link>
                    <IonImg className="logo" src={Logo}></IonImg>
                </div>
                {recipeDetails.map((recipe, recipe_id) => {
                    return <div className="recipeDetails" key={recipe_id}>
                        <div className="stepCircle">{recipe.step}</div>
                        <IonImg src={recipe.banner_image} className="recipeImg"></IonImg>
                        <h2>{recipe.title}</h2>
                        <IonList className="ingredientList">
                            <h3>Dit recept bevat:</h3>
                            <IonItem lines="none" className="recipeItems">
                                {recipe.preparation}
                            </IonItem>
                            <h3>Ingredienten:</h3>
                            <IonItem lines="none" className="recipeItems">
                                {recipe.ingredients}
                            </IonItem>
                            <h3>Recept:</h3>
                            <IonItem lines="none" className="recipeItems">
                                {recipe.description}
                            </IonItem>
                        </IonList>
                    </div>
                })}
                <a className="borderBottom"></a>
            </div>
        </IonContent>
    )
}

export default RecipeInfo
