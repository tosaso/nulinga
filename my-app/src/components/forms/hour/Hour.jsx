import React from 'react'
import './hour.css'
import '../forms.css'

export default function Hour() {
    const TimeZone = ["(UTC-03:00) Buenos Aires -"];

    return(
        <>
        <div className="mt2">
            <h4 className="tittle-form">Horario</h4>
            <p className="form-help">Recuerda que indicás el horario de inicio de tu curso</p>
            <div>
                <p className="tz-tittle">Huso Horario</p>
                <p className="timezone">{TimeZone}
                    <span className="edit-timezone"> Editar</span>
                </p>
            </div>
        </div>
        </>
    )
}