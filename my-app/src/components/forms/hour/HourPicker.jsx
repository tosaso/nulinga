import React from 'react'
import './hourpicker.css'


export default function HourPicker() {
    let early =["7hs", "8hs", "9hs", "10hs", "11hs"];
    let late = ["12hs", "13hs", "14hs", "15hs", "16hs"];
    let night = ["17hs", "18hs", "19hs", "20hs", "21hs"]

    return(
        <>
        <div className="tab-selector mt2">
            <div className="tab">Mañana</div>
            <div className=" selected">Tarde</div>
            <div className="tab">Noche</div>
        </div>
        <div>
            <form action="" className="hour-picker">
                {late.map((hour)=>{
                    return(
                        <>
                        <div className="hour">
                            <input type="radio" id={hour} name="hour-picker" value={hour}></input>
                            <label for={hour}>{hour}</label>
                        </div>
                        </>
                    )
                })}
            </form>
        </div>
        </>
    )
}