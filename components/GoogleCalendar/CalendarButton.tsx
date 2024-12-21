"use client"
import React, { useEffect, useRef } from 'react'

interface CalendarButtonProps {
    targetId: string;
    className?: string;
}

const CalendarButton = ({ targetId, className }: CalendarButtonProps) => {
    const calendarButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const buttonContainer = document.getElementById(targetId);
        if (window.calendar?.schedulingButton && buttonContainer) {
            buttonContainer.innerHTML = '';
            window.calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ32XUZRQqtjgLVzKK7t3VmmnAztipNzfl8QCf6bjZkeopfKntXanuYO-nBDQ0_00Y_gDFPyvyGv?gv=true',
                color: '#A58964',
                label: 'Request a Consultation',
                target: buttonContainer,
            });
        }
    }, []);

    const handleConsultClick = () => {
        const calendarButton = calendarButtonRef.current?.querySelector('button');
        if (calendarButton) {
            calendarButton.click();
        }
    };

    return (
        <>
            <div ref={calendarButtonRef} className="hidden">
                <span id={targetId} />
            </div>
            <button 
                onClick={handleConsultClick}
                className={className}
            >
                Request a Consultation
            </button>
        </>
    )
}

export default CalendarButton 