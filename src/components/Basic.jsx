import React from 'react'
import { GitHub } from "../assets/icons/GitHub"
import { LinkedIn } from "../assets/icons/LinkedIn"
import { basics } from '../../cv.json'
import { Mail } from '../assets/icons/Mail'
import { Section } from '../Layout/Section'
import { Phone } from '../assets/icons/Phone'
import './Styles/Basic.css'
import { WorldMap } from '../assets/icons/WorldMap'

export const Basic = () => {
    const { name, label, location, image, profiles, phone, email } = basics
    const { city, region } = location
    const socialIcon = { GitHub, LinkedIn }
    return (
        <>
            <Section>
                <div className='container'>
                    <div className='info'>
                        <h1>{name}</h1>
                        <h2 className='label'>{label}</h2>
                        <span>
                            <WorldMap/>
                            {city}, {region}
                        </span>
                        <footer>
                            {
                                email && (
                                    <a
                                        href={`mailto:${email}`}
                                        title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    ><Mail /></a>
                                )
                            }
                            {
                                phone && (
                                    <a
                                        href={`tel:${phone}`}
                                        title={`Llamar por telefono a ${name} al numero ${phone}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    ><Phone /></a>
                                )
                            }
                            {
                                profiles.map(({ network, url, username }) => {
                                    const Icon = socialIcon[network]
                                    return (
                                        <a
                                            key={network}
                                            href={url}
                                            title={`Visitar el perfil de ${name} en ${network}`}
                                            target='_blank'
                                            rel='noopener noreferrer'

                                        >
                                            <Icon />
                                        </a>
                                    )

                                })
                            }
                        </footer>
                    </div>
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </div>
            </Section>
        </>
    )
}
