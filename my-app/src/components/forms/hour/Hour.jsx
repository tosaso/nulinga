import React from 'react'
import HourPicker from './HourPicker'
import './hour.css'
import '../forms.css'

export default function Hour() {
    const TimeZone = ["(UTC-03:00) Buenos Aires -"];

    return(
        <>
        <div className="mt2">
            <h4 className="tittle-form">Horario</h4>
            <p className="form-help">Te sugerimos indicar la mayor cantidad de horarios posibles, recuerda que indicás el horario de inicio de tu curso. </p>
            <div>
                <p className="tz-tittle mt2">Huso Horario</p>
                <p className="timezone">{TimeZone}
                    <span className="edit-timezone"> Editar</span>
                </p>
            </div>
            <HourPicker />
        </div>
        </>
    )
}