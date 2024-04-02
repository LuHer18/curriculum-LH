import React from 'react'
import { Section } from '../Layout/Section'
import {basics} from '../../cv.json'

export const AboutMe = () => {
  const {summary} = basics
  return (
    <Section title='Sobre mi'>
      <p>{summary}</p>
    </Section>
  )
}
