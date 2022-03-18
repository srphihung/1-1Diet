import { IonCard, IonCardContent, IonText, IonIcon, IonItem, IonItemGroup, IonImg } from '@ionic/react'
import { calendarClearOutline, chevronForwardOutline } from 'ionicons/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../../images/344.jpg'

function SeeAppointment({ name, date, consulent, time, email, number, comment, location}) {
    return (
        <Link to={`/afspraak/${date}`}><IonCard className="AppointmentCard" lines="none" key={name}>
            <IonCardContent className="AppointmentCardContent">
                <IonItem className="BlueBorderAppointment" lines="none">
                    {/* <IonIcon icon={calendarClearOutline} className="AppointmentCalendarIcon"></IonIcon> */}
                    <IonImg src={profileImg}></IonImg>
                </IonItem>
                <IonItemGroup className="appointmentInfo">
                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                </IonItemGroup>
                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
            </IonCardContent>
        </IonCard></Link>
    )
}

export default SeeAppointment
