import React, { useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Row, Col } from 'react-bootstrap'

import './index.scss'
import reactLogo from '../assets/react.svg'
import motokoLogo from '../assets/motoko.svg'
import icLogo from '../assets/logo2.svg'

import { motoko_react_backend as backend } from '../../declarations/motoko_react_backend'

const App = () => {
  const [greeting, setGreeting] = useState('')
  const name = useRef(null)

  const btnHandler = async () => {
    const greet = await backend.greet(name.current.value)
    setGreeting(greet)
  }

  return (
    <div>
      <Row className='mt-5'>
        <Col className='col d-flex justify-content-center'>
          <a href='https://internetcomputer.org/' target='_blank' rel='noreferrer'>
            <img src={icLogo} alt='Internet Comuter Logo' />
          </a>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col className='col d-flex justify-content-center'>
          <a href='https://internetcomputer.org/docs/current/motoko/main/motoko' target='_blank' rel='noreferrer'>
            <img src={motokoLogo} alt='Motoko Logo' className='logo' />
          </a>
          <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
            <img src={reactLogo} alt='React Logo' className='logo' />
          </a>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col className='col-4'>
          <div className='input-group mb-3'>
            <input type='text' className='form-control' placeholder='Enter your name' aria-label="Recipient's username" aria-describedby='button-addon2' ref={name} />
            <div className='input-group-append'>
              <button className='btn btn-outline-secondary' type='button' id='button-addon2' onClick={btnHandler}>Submit</button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col className='col-6 text-center'>
          <h3>
            {greeting}
          </h3>
        </Col>
      </Row>
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
