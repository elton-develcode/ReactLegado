import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './Familia'
import Membro from './Membro'


/** Aula 272 */
ReactDOM.render(
  <Familia lastName='Veiga'>
    <Membro name='Elton' />
    <Membro name='Joao' />
    <Membro name='José' />
  </Familia>
  , document.getElementById('app'))