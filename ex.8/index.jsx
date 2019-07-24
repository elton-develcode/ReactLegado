import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

ReactDOM.render(
  <ClassComponent label='Contador' inicial={20} />
  , document.getElementById('app'))