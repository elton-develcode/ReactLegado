import React from 'react'

export default props => (
  <div>
    <h4>Familia {props.lastName}</h4>
    {React.cloneElement(props.children, { ...props }) }
  </div>
)