import React from 'react'
import '../styling/proficiency.css'

const ProficiencySet = ({desc, value, list, typeFilter}) => {
  console.log(list)

  return (
    <div className="proficiency-set">
      <h1 className="proficiency-header">{desc}</h1>
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