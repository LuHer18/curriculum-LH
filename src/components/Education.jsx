import React from 'react'
import { Section } from '../Layout/Section'
import { education } from '../../cv.json'
import './Styles/Education.css'

export const Education = () => {

  return (
    <Section title='Educación'>
      <ul >
        {
          education.map(({studyType, institution, area, startDate, endDate}) => {
            const starYear = new Date(startDate).getFullYear()
            const endYear = endDate!== null? new Date(endDate).getFullYear(): 'Actual'
            const years = `${starYear} - ${endYear}`
            return(

            <li key={studyType}>
              <article>
                <div>
                  <h3>{institution}</h3>
                  <h4>{studyType}: {area}</h4>
                </div>
                <time>{years}</time>
              </article>
              
              
              
            </li>


          )
        })
        }
      </ul>
    </Section>
  )
}
