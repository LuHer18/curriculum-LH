import React from 'react'
import { Section } from '../Layout/Section'
import { projects } from '../../cv.json'
import './Styles/Projects.css'

export const Projects = () => {
  return (
    <Section title='Proyectos'>
      <ul className='card-project'>
        {
          projects.map(({ name, isActive, description, highlights, url }) => {
            return (
              <li key={name}>
                <article className='container-project'>
                  <header>
                    <h3>
                      <a href={url} title={`Ver el proyecto ${name}`} target='_blank'
                      >
                        {name}
                      </a>
                      {isActive && <span>&bull;</span>}
                    </h3>
                    <p>{description}</p>
                  </header>
                  <footer className='footer-card'>

                    {
                      highlights.map(highlight => (
                        <span key={highlight}>{highlight}</span>
                      ))
                    }

                  </footer>
                </article>
              </li>
            )
          })
        }
      </ul>
    </Section>

  )
}
