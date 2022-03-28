import React, { useEffect, useState } from 'react'
import Logo from '../../../images/logodiet.svg'
import TopNav from '../TopNav'
import '../../styles/Appointments/Appointments.css'
import { IonButton, IonCard, IonCol, IonContent, IonDatetime, IonIcon, IonInput, IonItem, IonItemOption, IonLabel, IonModal, IonSelect, IonSelectOption, IonTab, IonText, IonTextarea, IonTitle } from '@ionic/react'
import { calendar, chevronBackOutline, close } from 'ionicons/icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import CurrentUser from '../../../Data/CurrentUser.json'
import SeeAppointment from './SeeAppointment'



function Appointments() {
    // const jsonData= require('../../../Data/AppointmentsData.json'); 
    const [currentUser, setCurrentUser] = useState(CurrentUser[0])
    const [showCalendar, setShowCalendar] = useState(false)
    const [value, onChange] = useState(new Date())
    const [modalController, setModalController] = useState(false)
    const [selectConsulent, setSelectConsulent] = useState([])
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [comment, setComment] = useState("")
    const [confirmModal, setConfirmModal] = useState({ isOpen: false })
    const [appointment, setAppointment] = useState([])
    

    var json = `[
        {
            "id": 1,
            "date": "27-03-2022",
            "name": "Test 1",
            "consulent": "Coent 1",
            "time": "13:00",
            "email": "Test1@mail.com",
            "number": "0611111111",
            "comment": "Dit is een testafspraak om de pagina te testen, dit is nog dummy data.",
            "location": "Teststraat 1",
            "type": "Call"
        },
        {
            "id": 2,
            "date": "30-03-2022",
            "name": "Test 2",
            "consulent": "Coent 2",
            "time": "23:00",
            "email": "Test2@mail.com",
            "number": "0622222222",
            "comment": "Dit is een testafspraak om de pagina te testen, dit is nog dummy data.",
            "location": "Testlaan 2",
            "type": "Online"
        },
        {
            "id": 3,
            "date": "29-03-2022",
            "name": "Test 3",
            "consulent": "Coent 3",
            "time": "3:00",
            "email": "Test3@mail.com",
            "number": "0633333333",
            "comment": "Dit is een testafspraak om de pagina te testen, dit is nog dummy data.",
            "location": "Testavenue 3",
            "type": "Weighing"
        },
        {
            "id": 4,
            "date": "18-03-2022",
            "name": "Test 4",
            "consulent": "Coent 4",
            "time": "6:00",
            "email": "Test4@mail.com",
            "number": "0644444444",
            "comment": "Dit is een testafspraak om de pagina te testen, dit is nog dummy data.",
            "location": "Testgracht 4",
            "type": "Pickup"
        }
      ]`;

        const obj = JSON.parse(json);   

        function sortByKey(obj, date) {
            return obj.sort(function(a, b) {
            var x = a[date]; var y = b[date];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
        }
        
        json = sortByKey(obj, 'date');
        
        console.log(json);  

    // useEffect(async () => {
    //     const api_url = 'http://31.14.96.253/appointments'
    //     var response = await fetch(api_url)
    //     var data = await response.json()
    //     setAppointment(data)
    // }, [setAppointment])

    // Get current month name
    var d = new Date()
    const monthNames = ["Januari", "Februari", "Maart", "April", "Mei", "Juni",
        "Juli", "Augustus", "September", "Oktober", "November", "December"
    ];

    const month = (monthNames[d.getMonth()]);

    // Get current week of year
    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        // Return array of year and week number
        return [weekNo];
    }

    var result = getWeekNumber(new Date());

    return (
        <IonContent className="calendarPage">
            <TopNav />
            <div className="calendarContent">
                {currentUser ? (
                    <div className="calendarContainer">
                        <div className="datePicker">
                            <button className={showCalendar ? "currentWeek" : "currentWeekActive"} onClick={() => setShowCalendar(false)}><h3>Week {result}</h3></button>
                            <button className={showCalendar ? "openCalendarActive" : "openCalendar"} onClick={() => setShowCalendar(current => !current)}><h3>{month}</h3></button>
                            {/* <IonIcon icon={calendar} className="toCurrentDate"></IonIcon> */}
                        </div>
                        {/* <div className="events">
                            <button className="makeAppointment" onClick={() => setModalController(current => !current)}>Afspraak inplannen</button>
                        </div> */}
                        <div className="appointmentContainer">
                        <IonTitle className="Title"><h2>Mijn afspraken</h2></IonTitle>
                            {obj.map((obj) => {
                                const type = obj.type
                                const date = obj.date
                                return <SeeAppointment type={type} key={obj.consulent} consulent={obj.consulent} date={date} time={obj.time} name={obj.name} email={obj.email} number={obj.number} comment={obj.comment} location={obj.location}/>
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="noUserWarning">
                        <p>Het lijkt er op dat u nog geen account heeft, log in om een afspraak te maken bij een van onze consulenten!</p>
                        <button className="toLogin">Inloggen</button>
                    </div>
                )}
            </div>
            {/* { modalController ? (
                <div className="Modal">
                    <div className="navigationInfo">
                        <IonIcon icon={chevronBackOutline} className="goBack" onClick={() => setModalController(false)}></IonIcon>
                        <img className="logo" src={Logo} onClick={() => console.log(name)}></img>
                    </div>
                    <form>
                        <div className="appointment">
                            <h2>Uw gegevens</h2>
                            <IonSelect placeholder="Kies je consulent" className="selectConsulent" onIonChange={(e) => setSelectConsulent(e.detail.value)}>
                                <IonSelectOption>{currentUser.consulent[0].consulent_name}</IonSelectOption>
                            </IonSelect>
                            <IonItem className="flexitem" lines="none">
                                <IonDatetime onIonChange={(e) => setDate(e.detail.value)} className="selectDate" min="2021-05-27" max="2023-12-31" displayTimezone="utc" placeholder="Kies Datum" displayFormat="DD/MM/YYYY"></IonDatetime>
                                <IonDatetime onIonChange={(e) => setTime(e.detail.value)} className="selectDate" displayTimezone="utc" placeholder="Kies Tijd" displayFormat="HH:mm"></IonDatetime>
                            </IonItem>
                            <IonItem className="obj" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setName(e.target.value)} inputMode="name" name="naam" type="name" placeholder="Naam" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setEmail(e.target.value)} inputMode="email" autocomplete="email" minlength="5" name="email" type="email" placeholder="E-mail" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonInput className="inputIon" onIonChange={(e) => setNumber(e.target.value)} inputMode="tel" autocomplete="tel" name="telefoonnummer" minlength="10" maxlength="10" type="tel" placeholder="Telefoonnummer" required="true"></IonInput>
                            </IonItem>
                            <IonItem className="item" lines="none">
                                <IonTextarea onIonChange={(e) => setComment(e.target.value)} className="comment" name="comment" spellcheck="true" auto-grow="true" placeholder="Zet hier je opmerking"></IonTextarea>
                            </IonItem>
                            <IonButton color="none" className="submit" onClick={() => setConfirmModal({ isOpen: true })}>Bevestigen</IonButton>
                        </div>
                        <IonModal isOpen={confirmModal.isOpen} className="confirmModal">
                            <div className="navigationInfo">
                                <IonIcon icon={close} className="goBack" onClick={() => setConfirmModal({ isOpen: false })}></IonIcon>
                                <img className="logo" src={Logo} onClick={() => console.log(name)}></img>
                            </div>
                            <IonCol className="modalContent">
                                <h2 onClick={() => console.log(appointment)}>Bevestig afspraak</h2>
                                <p><strong>Naam:</strong> {name}</p>
                                <p><strong>Email:</strong> {email}</p>
                                <p><strong>Tel. nummer:</strong> {number}</p>
                                <p><strong>Consulent:</strong> {selectConsulent}</p>
                                <p><strong>Datum:</strong> {date}</p>
                                <p><strong>Tijd:</strong> {time}</p>
                                <p className="comment"><strong>Bericht:</strong> {comment}</p>
                                <IonButton className="submit" color="none" onClick={() => { setModalController(false); setConfirmModal({ isOpen: false }) }}>Afspraak opslaan</IonButton>
                                <a className="borderBottom"></a>
                            </IonCol>
                        </IonModal>
                        <a className="borderBottom"></a>
                    </form>
                </div>
            ) : (
                null
            )
            } */}
        </IonContent >
    )
}

export default Appointments