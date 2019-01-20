import React from 'react';
import { Col, Grid, Row,  } from 'react-bootstrap';
import NavMenu from './NavMenu';
import './Layout.css';

export default props => (
  <Grid fluid className="LayoutGrid">
    <Row>
      <Col>
        <NavMenu />
        
      </Col>
      </Row>
      <Row>
      <Col>
        {props.children}
      </Col>
    </Row>
  </Grid>
);
