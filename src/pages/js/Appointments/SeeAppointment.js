import { IonButton, IonCard, IonCardContent, IonText, IonIcon, IonItem, IonItemGroup, IonImg } from '@ionic/react'
import { callOutline, laptopOutline, chevronForwardOutline, scaleOutline, walkOutline } from 'ionicons/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../../../images/344.jpg'

function SeeAppointment({ name, date, consulent, time, email, number, comment, location, type}) {
    console.log(type);
    var dateDay = date.slice(0,2)
        if (dateDay < 19) {
            if (type == "Call") {
                return (
                        <IonCard className="AppointmentCardOutdated" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={callOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                {/* <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon> */}
                            </IonCardContent>
                        </IonCard>
                )
            }

            else if (type == "Online") {
                return (
                        <IonCard className="AppointmentCardOutdated" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={laptopOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                {/* <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon> */}
                            </IonCardContent>
                        </IonCard>
                )
            }

            else if (type == "Weighing") {
                return (
                        <IonCard className="AppointmentCardOutdated" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={scaleOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                {/* <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon> */}
                            </IonCardContent>
                        </IonCard>
                )
            }

            else if (type == "Pickup") {
                return (
                        <IonCard className="AppointmentCardOutdated" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={walkOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                {/* <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon> */}
                            </IonCardContent>
                        </IonCard>
                )
            }

            else {
                return (
                <h1>Invalid appointment</h1>
                )
            }
        }
        else if (dateDay > 0) {
            if (type == "Call") {
                return (
                    <Link to={`/afspraak/${date}`}>
                        <IonCard className="AppointmentCard" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={callOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
                            </IonCardContent>
                        </IonCard>
                    </Link>
                )
            }

            else if (type == "Online") {
                return (
                    <Link to={`/afspraak/${date}`}>
                        <IonCard className="AppointmentCard" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={laptopOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
                            </IonCardContent>
                        </IonCard>
                    </Link>
                )
            }

            else if (type == "Weighing") {
                return (
                    <Link to={`/afspraak/${date}`}>
                        <IonCard className="AppointmentCard" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={scaleOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
                            </IonCardContent>
                        </IonCard>
                    </Link>
                )
            }

            else if (type == "Pickup") {
                return (
                    <Link to={`/afspraak/${date}`}>
                        <IonCard className="AppointmentCard" lines="none" key={name}>
                            <IonCardContent className="AppointmentCardContent">
                                <IonItem className="BlueBorderAppointment" lines="none">
                                    <IonIcon icon={walkOutline} className="AppointmentCalendarIcon"></IonIcon>
                                </IonItem>
                                <IonItemGroup className="appointmentInfo">
                                    <IonText className="appointmentText"><strong>Locatie: </strong>{location}</IonText>
                                    <IonText className="appointmentText"><strong>Afspraak: </strong>{date} {time}</IonText>
                                </IonItemGroup>
                                <IonIcon icon={chevronForwardOutline} className="AppointmentChevronIcon"></IonIcon>
                            </IonCardContent>
                        </IonCard>
                    </Link>
                )
            }

            else {
                return (
                <h1>Invalid appointment</h1>
                )
            }
        }
        else {
            console.log("fail");
        }
}

export default SeeAppointment
