import React from 'react'

const TechStackCard = ({tech,className}) => {
  return (
    <>
<h1 className={`${className} rounded-md px-2 py-1 mx-auto sm:text-xs lg:text-md`}>{tech}</h1>
    </>
  )
}

export default TechStackCard