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

    useEffect(async () => {
        const api_url = 'http://31.14.96.253/appointments'
        var response = await fetch(api_url)
        var data = await response.json()
        setAppointment(data)
    }, [setAppointment])

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
                            <button className={showCalendar ? "currentWeek" : "currentWeekActive"} onClick={() => setShowCalendar(false)}>Week {result}</button>
                            <button className={showCalendar ? "openCalendarActive" : "openCalendar"} onClick={() => setShowCalendar(current => !current)}>{month}</button>
                            <IonIcon icon={calendar} className="toCurrentDate"></IonIcon>
                        </div>
                        <div className="events">
                            <button className="makeAppointment" onClick={() => setModalController(current => !current)}>Afspraak inplannen</button>
                        </div>
                        <div className="appointmentContainer">
                        <IonTitle className="Title">Mijn afspraken</IonTitle>
                            {appointment.map((appointment) => {
                                return <SeeAppointment key={appointment.consulent} consulent={appointment.consulent} date={appointment.datum_tijd} time={appointment.time} name={appointment.name} email={appointment.email} number={appointment.number} comment={appointment.comment} />
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
            { modalController ? (
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
                            <IonItem className="item" lines="none">
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
            }
            <a className="borderBottom"></a>
        </IonContent >
    )
}

export default Appointments
