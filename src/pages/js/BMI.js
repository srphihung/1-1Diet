import React, { useState, useEffect } from 'react'
import { IonContent, IonRange } from '@ionic/react';
import TopNav from '../js/TopNav'
import '../styles/BMI.css'

function BMI() {
    const [height, setHeight] = useState(140)
    const [weight, setWeight] = useState(50)
    const [bmi, setBMI] = useState(25.5)
    const [bmiMessage, setBMIMessage] = useState("Overgewicht of neiging tot overgewicht. Nog geen verhoogd risico, maar de gevarenzone komt in beeld. Let op je voeding en ga meer bewegen.")
    const [advice, setAdvice] = useState(false)
    const [color, setColor] = useState("#F09923")

    const handleBmi = () => {
        let val = (
          [Number(weight) / Number(height) / Number(height)] * 10000
        ).toFixed(1);
        setBMI(val);
        if (val < 18.5) {
          setBMIMessage("Je hebt ondergewicht. Dit kan schadelijk zijn voor je gezondheid. Probeer aan te komen door regelmatig te eten.");
          setAdvice(false);
          setColor("#F09923");
        } else if (val > 18.5 && val <= 24.9) {
          setBMIMessage("Je hebt een gezond gewicht. Probeer je gewicht op peil te houden door gezonde voeding en voldoende beweging.");
          setAdvice(true);
          setColor("#2B2E6B");
        } else if (val > 24.9 && val < 30) {
          setBMIMessage("Overgewicht of neiging tot overgewicht. Nog geen verhoogd risico, maar de gevarenzone komt in beeld. Let op je voeding en ga meer bewegen.");
          setAdvice(true);
          setColor("#F09923");
        } else {
          setBMIMessage("Ernstig overgewicht (obesitas). Dit levert risico's op voor je gezondheid. The 1:1 Diet consulent kan je helpen bij het afvallen.");
          setAdvice(true);
          setColor("#D53947")
        }
      };

    return (
        <IonContent>
            <div className="bmiTab" >
                <TopNav />
                <h1>BMI</h1>
                <p>Check hier of je een gezond gewicht hebt.</p>
                <div className="sliderContainer">
                    <div className="heightInput">
                        <p>Lengte in centimeter</p>
                        <p>{height}</p>
                    </div>
                    <IonRange type="number" min={140} max={220} step={1} value={height} onIonChange={e => setHeight(e.target.value)} onClick={handleBmi}></IonRange>
                    <div className="weightInput">
                        <p>Gewicht in kilogram</p>
                        <p>{weight}</p>
                    </div>
                    <IonRange type="number" min={50} max={200} step={1} value={weight} onIonChange={e => setWeight(e.target.value)} onClick={handleBmi} >
                    </IonRange>
                </div>
                <div className="resultContainer" key="resultContainer" style={{background:color}}>
                    <h1 value={bmi}>{bmi}</h1>
                    <p>BMI</p>
                    <hr />
                    <p>{bmiMessage}</p>
                </div>
                {advice ? 
                <div className="advies">
                    <h1>Handige tips nodig?</h1>
                    <input placeholder="Voornaam" />
                    <input placeholder="Achternaam" />
                    <input placeholder="E-mail" />
                </div> : null}
                <div className="consulentSearch">
                    <h1>Zoek een consulent</h1>
                    <input placeholder="Zoek op een postcode of plaats" />
                    <button className="consulentSearchBtn">Zoeken</button>
                </div>
            </div>
        </IonContent>
    )
}

export default BMI
