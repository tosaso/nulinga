import React from 'react'
import './day.css'
import '../forms.css'

export default function Day() {
    let days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return(
        <>
        <h4 className="tittle-form">Día de cursado</h4>
        <select className="select-form" name="day-selected" id="day-selected">
            <option selected="true" disabled="disabled">Selecciona el día que te quede más cómodo</option>
            {days.map((day)=>{
                return(
                    <option value={day}>{day}</option>
                )
            })}
        </select>
        </>
    )
}