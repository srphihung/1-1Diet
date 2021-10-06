import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Eventcalendar, getJson, toast, localeNl } from '@mobiscroll/react-lite'

function Planner() {
    const [myEvents, setEvents] = useState([]);

    useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const onEventClick = useCallback((event) => {
        toast({
            message: event.event.title
        })
    }, []);

    const view = useMemo(() => {
        return {
            calendar: { type: 'week' },
            agenda: { type: 'day' }
        }
    } ,[]);

    return (
        <Eventcalendar 
            theme="ios"
            themVariant="light"
            locale={localeNl}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            />
    )
}

export default Planner