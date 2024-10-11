import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({message}) => {
  return (
    <div>
        <Spinner animation='border' />
        <Spinner animation='grow' />
        <div>Loading</div>
    </div>
  )
}


export default Loader