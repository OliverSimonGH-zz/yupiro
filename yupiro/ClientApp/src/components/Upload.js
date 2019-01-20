import React from 'react';
import { Col, Grid, Row,  } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/Counter';

const Upload = props => (
    <div>
    <h1>Hello, world!</h1>
    
  </div>
);

export default connect(
    state => state.upload,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Upload);
