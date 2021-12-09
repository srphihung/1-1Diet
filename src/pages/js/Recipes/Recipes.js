import { IonButton, IonInput, IonContent } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import TopNav from '../TopNav'
import '../../styles/Recipes/Recipes.css'
import RecipeStyle from './Recipestyle'

function Recipes() {
    const [recipes, setRecipes] = useState([])
    const [searchFilter, setSearchFilter] = useState("")

    const filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchFilter.toLowerCase())
    })

    // useEffect(async () => {
    //     const api_url = 'http://31.14.96.253/recipes'
    //     var response = await fetch(api_url)
    //     var data = await response.json()
    //     setRecipes(data)
    // }, [setRecipes])

    return (
        <IonContent>
            <div className="recipes">
                <TopNav />
                <div className="recipeContent">
                    <h1 onClick={() => {console.log(recipes)}}>Recepten</h1>
                    <IonInput placeholder="Zoeken..." className="recipeSearch" onIonChange={(e) => setSearchFilter(e.target.value)}></IonInput>
                    <div className="buttonSlider">
                        <div color="none" className="buttonContainer">
                            <IonButton className="recipeFilter">Alles</IonButton>
                            <IonButton className="recipeFilter">Stap 1</IonButton>
                            <IonButton className="recipeFilter">Stap 2</IonButton>
                            <IonButton className="recipeFilter">Stap 3</IonButton>
                            <IonButton className="recipeFilter">Stap 4</IonButton>
                            <IonButton className="recipeFilter">Stap 5</IonButton>
                            <IonButton className="recipeFilter">Stap 6</IonButton>
                            <IonButton className="recipeFilter">Stap 7</IonButton>
                        </div>
                    </div>
                    <div className="results">
                        {filteredRecipes.map((recipedetail, index) => {
                            return <RecipeStyle key={index} documentId={recipedetail.recipe_id} titel={recipedetail.title} stap={recipedetail.step} omschrijving={recipedetail.description} img={recipedetail.banner_image} recept={recipedetail.preparation} />
                        })}
                    </div>
                </div>
            </div>
        </IonContent>
    )
}

export default Recipes
