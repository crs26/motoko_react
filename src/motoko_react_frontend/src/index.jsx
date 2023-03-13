import React from 'react'
import { render } from 'react-dom'

import { Row, Col } from 'react-bootstrap'


const Portfolio = () => {
  return (
    <Row>
      <Col md={2} className='bg-dark text-light py-3'>

      </Col>
      <Col md={10}>
        <div>
          Main Content
        </div>
      </Col>
    </Row>
  )
}

render(<Portfolio />, document.getElementById('app'))
