import React from 'react'
import { filhosComProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h4>Familia {props.lastName}</h4>
    { filhosComProps(props.children, props) }
  </div>
)