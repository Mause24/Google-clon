import React from 'react'

const IconText = ({Icon, text, active=false}) => {
  return (
    <div className={`iconText ${active && 'active'}`}>
        <Icon />
        <p>{text}</p>
    </div>
  )
}

export default IconText