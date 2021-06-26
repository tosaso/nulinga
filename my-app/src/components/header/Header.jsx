import React from 'react';
import './header.css';
import logo from '../../logo.png'

export default function Header() {
    return(
        <>
        <section className="bg-header">
            <nav>
                <img src={logo} alt="Nulinga"/>
            </nav>
            <div className="text-container">
                <h2>Elige tu ritmo de cursado</h2>
                <p>Recuerda que puedes cambiar estas preferencias desde tu perfil en cualquier momento</p>
            </div>
        </section>
        </>
    )
}