import React from 'react'
import { Section } from '../Layout/Section'
import {skills} from '../../cv.json'
import './Styles/Skills.css'

export const Skills = () => {
  return (
    <Section title='Habilidades'>
      <ul className='list-skill'>
        {
          skills.map(({name}) =>(
            <li className='skill' key={name}>
              <p>{name}</p>
            </li>
          ))
        }
      </ul>
    </Section>
  )
}
