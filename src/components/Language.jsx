import React from 'react'
import { Section } from '../Layout/Section'
import { languages } from '../../cv.json'
import './Styles/Language.css'

export const Language = () => {
    return (
        <Section title='Idiomas'>
            <ul className='card-language'>
                {
                    languages.map(({ language, fluency }) => {

                        return (
                            <li key={language}>
                                <article className='container-language'>
                                    <h3>{language}</h3>
                                    <p>{fluency}</p>
                                </article>
                            </li>
                        )
                    })
                }
            </ul>
        </Section>
    )
}
