import React, { useState } from "react"
import './hourpicker.css'


export default function HourPicker() {
    const types = ['Mañana', 'Tarde', 'Noche'];
    let early =["7hs", "8hs", "9hs", "10hs", "11hs"];
    let late = ["12hs", "13hs", "14hs", "15hs", "16hs"];
    let night = ["17hs", "18hs", "19hs", "20hs", "21hs"]

    const [active, setActive] = useState(types[0])

    function shiftSelected(){
        if (active === "Mañana") {
            return early;
          } else if (active === "Tarde") {
            return late;
          }  else {
            return night;
          }
    }

    return(
        <>
            <div className="tab-selector mt2">
                {types.map(type => (
                <div 
                    className={active === type ? "selected" : "tab"}
                    key={type}
                    active={active === type}
                    onClick={() => setActive(type)}
                >
                    {type}
                </div>
                ))}
            </div>
            <div>
                <div className="hour-picker">
                    {shiftSelected().map((hour)=>{
                        return(
                            <>
                            <form className="hour">
                                <input type="checkbox" id={hour} name={hour} value={hour}/>{hour}
                            </form>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}