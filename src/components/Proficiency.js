import React from 'react'
import {BiStar} from 'react-icons/bi'
import '../styling/proficiency.css'

const ProficiencySet = ({desc, value, list, typeFilter}) => {
  console.log(list)

  const getStars = () => {
    let stars = []
    for(var i = 0; i < value; i++)
      stars.push(<BiStar/>)
    return stars
  }

  return (
    <div className="proficiency-set">
      <div className="proficiency-header">
        <h1 className="proficiency-header">{desc}</h1>
        {getStars()}
      </div>
      <ol className="proficiency-list">
        {list.map((item, index) => <Proficiency key={index} title={item.title}
        type={item.type} typeFilter={typeFilter}/>)}
      </ol>
    </div>
  )
}
export default ProficiencySet

const Proficiency = ({title, type, typeFilter}) => {
    console.log(typeFilter)

  return typeFilter === 'none' || type === typeFilter?
    <p className="proficiency">{title}</p>
    :<></>
}