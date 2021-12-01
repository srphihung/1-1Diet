import Logo from '../../images/logodiet.svg'
import { IonIcon } from '@ionic/react';
import '../styles/TopNav.css'
import { homeOutline, newspaperOutline, calendarOutline, restaurantOutline, personOutline, calculatorOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNav() {
    return (
        <div className="topNavigation">
            <div className="navigationInfo">
                <img className="logo" src={Logo} />
            </div>
            <div className="iconBtn">
                <NavLink to="/home" className="navIcon" activeClassName="navIconActive"><IonIcon icon={homeOutline} /></NavLink>
                <NavLink to="/news" className="navIcon" activeClassName="navIconActive" ><IonIcon icon={newspaperOutline} /></NavLink>
                <NavLink to="/calendar" className="navIcon" activeClassName="navIconActive" ><IonIcon icon={calendarOutline} /></NavLink>
                <NavLink to="/recipes" className="navIcon" activeClassName="navIconActive"><IonIcon icon={restaurantOutline}  /></NavLink>
                <NavLink to="/profile" className="navIcon" activeClassName="navIconActive" ><IonIcon icon={personOutline} /></NavLink>
            </div>
        </div> 
    )
}

export default TopNav

