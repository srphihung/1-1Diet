import { IonContent, IonImg, IonIcon, IonTitle, IonCard, IonCardContent, IonAvatar, IonText, IonButton } from '@ionic/react'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { close } from 'ionicons/icons'
import Logo from '../../../images/logodiet.svg'
import { chevronForwardOutline } from 'ionicons/icons'
import '../../styles/Appointments/AppointmentDetails.css'

function AppointmentInfo() {
    const { datum_tijd } = useParams();
    const [appointments, setAppointments] = useState([])

    const appointmentDetails = appointments.filter((appointment) => {
        return appointment.datum_tijd === datum_tijd
    })

    useEffect(async () => {
        const api_url = 'http://31.14.96.253/appointments'
        var response = await fetch(api_url)
        var data = await response.json()
        setAppointments(data)
    }, [setAppointments])

    return (
        <IonContent>
            <div className="appointmentDetailContent">
                <div className="navigationInfo">
                    <Link to="/calendar"><IonIcon icon={close} className="goBack"></IonIcon></Link>
                    <IonImg className="logo" src={Logo} onClick={() => console.log(appointmentDetails)}></IonImg>
                </div>
                <IonTitle className="AppointmentDetailTitle" onClick={() => console.log(appointments)}>Afspraak gegevens</IonTitle>
                {appointments.map((appointment) => {
                    return <div className="appointmentContent" key={appointment.datum_tijd}>
                        <IonCard className="consulentCard" key={appointment.datum_tijd} >
                            <IonCardContent className="consulentAppointmentContent">
                                <IonAvatar className="consulentAvatar"></IonAvatar>
                                <div className="consulentContent">
                                    <IonText className="consulentAppointmentText"><strong>Consulent: </strong>{appointment.consulent}</IonText>
                                    <IonText className="consulentAppointmentText"><strong>Datum: </strong>{appointment.datum_tijd}</IonText>
                                </div> 
                                <IonIcon icon={chevronForwardOutline} className="iconConsulent"></IonIcon>
                            </IonCardContent>
                        </IonCard>
                        <IonTitle className="appointmentDetailSubtitle" onClick={() => console.log(appointments)}>Opmerkingen</IonTitle>
                        {/* <IonButton className="addComment" type="round" color="none">Comment plaatsen</IonButton> */}
                        <IonCard className="commentCard">
                            <IonCardContent className="commentCardContent">
                                <div className="horizontalBlueBorder">
                                    <IonTitle className="commentCardTitle">Opmerking: {appointment.consulent}</IonTitle>
                                </div>
                                <IonText className="commentCardText">{appointment.opmerking}</IonText>
                            </IonCardContent>
                        </IonCard>
                    </div>
                })}
                <a className="borderBottom"></a>
            </div>  
        </IonContent>
    )
}

export default AppointmentInfo
