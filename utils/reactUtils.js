import React from 'react'

function filhosComProps(children, props) {
  return React.Children.map(props.children,
        child => React.cloneElement(child, {...props}) )  
}

export { filhosComProps }