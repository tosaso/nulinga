import React from 'react'
import Day from './day/Day';
import Hour from './hour/Hour';
import './forms.css'

export default function Forms() {
    return (
        <>
        <div className="column-dk">
            <Day />
            <Hour/>
            <button className="next">Continuar</button>
        </div>
        </>
    );
}