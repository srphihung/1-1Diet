import { IonCard, IonContent, IonImg, IonItem, IonPage, IonText } from '@ionic/react'
import '../../styles/Recipes/RecipeStyle.css'
import React from 'react'
import { Link } from 'react-router-dom';

function Recipestyle({ titel, stap, omschrijving, recept, calories, img, documentId }) {
    return (
        <Link to={`/recipe/${titel}`} ><div className="recipeCard">
            <IonImg src={img} alt="bannerImg" className="bannerImg"></IonImg>
            <div lines="none" className="recipeCardInfo">
                <p>{titel}</p>
                <p>Stap: {stap}</p>
            </div>
        </div></Link>
    )
}

export default Recipestyle
