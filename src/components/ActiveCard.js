import React from 'react'
import Card from './Card'

export default function ActiveCard(props) {
  return (
    <React.Fragment>
      <Card character={props.character} id='active-card'/>
    </React.Fragment>
  )
}