import React from 'react'
import './Section.css'

export const Section = ({ children, title }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
