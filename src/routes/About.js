import React from 'react'
import ProficiencySet from '../components/Proficiency'
import {BiStar} from 'react-icons/bi'
import proficiencies from '../data/proficiencies'
import '../styling/about.css'

const About = () => {
  console.log(proficiencies.filter((x) => x.value === 3))

  return (
    <div className="about">
      <p className="about-header">
        This is a section all about me and the things I can do, and some that I can kinda do, but not really very well.
      </p>
      <h1 className="about-title">Proficiencies:</h1>
      <div className="about-prof-box">
        {
          ['confident', 'adept', 'aquainted'].map((label, index)=>
            <ProficiencySet desc={label} typeFilter='none' value={3-index}
              list={proficiencies.filter((x) => x.value === (3-index))}/>
          )
        }
      </div>
    </div>
  )
}

export default About