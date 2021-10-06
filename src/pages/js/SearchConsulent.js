import React, { useState } from 'react'
import '../styles/SearchConsulents.css'
import TopNav from './TopNav'
import { IonContent, IonRange } from '@ionic/react';
import { useGoogleMaps } from "react-hook-google-maps";

function SearchConsulent() {
    const [range, setRange] = useState(15)
    const [male, setMale] = useState(true)
    const [female, setFemale] = useState(true)
    const { ref, map, google } = useGoogleMaps(
        "",
        {
            center: { lat: 52.092876, lng: 5.104480 },
            zoom: 3,
        }
    );

    return (
        <IonContent className="consulentPageContent">
            <div className="consulentPage">
                <TopNav />
                <div className="consulentContent">
                    <div ref={ref} className="map"></div>
                    <div className="consulentFilters">
                        <h1>Zoek een consulent</h1>
                        <input placeholder="Zoeken op naam, plaats of postcode" className="consulentInput"></input>
                    </div>
                    <div className="consulentRange">
                        <h3>Afstand</h3>
                        <p>{range} km</p>
                    </div>
                    <IonRange type="number" min={5} max={30} step={1} className="rangeSlider" value={range} onIonChange={e => setRange(e.detail.value)}></IonRange>
                    <h3>Geslacht</h3>
                    <div className="genderFilter">
                        <button className={male ? "genderFilterBtnActive" : "genderFilterBtn"} onClick={() => setMale(current => !current)}>Man</button>
                        <button className={female ? "genderFilterBtnActive" : "genderFilterBtn"} onClick={() => setFemale(current => !current)}>Vrouw</button>
                    </div>
                    <h3>Specialisatie</h3>
                    <a><input type="checkbox"></input>The 1:1 Diet consultant</a>
                    <a><input type="checkbox"></input>Onwards coach</a>
                    <a><input type="checkbox"></input>Online begeleiding</a>
                    <hr />
                    <button>Zoeken</button>
                </div>
                <a className="borderBottom"></a>
            </div>
        </IonContent>
    )
}

export default SearchConsulent
