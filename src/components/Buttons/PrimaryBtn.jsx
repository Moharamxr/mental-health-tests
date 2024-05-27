import React from 'react'

const PrimaryBtn = ({text}) => {
  return (
<button className={`bg-blue-800 hover:bg-white text-white hover:text-blue-800 transition-colors ease-in p-4 rounded-3xl px-12 font-bold`}>
{text}
</button>  )
}

export default PrimaryBtn