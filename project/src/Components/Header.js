import React, { Component } from 'react';
import logo from './../logo.svg';   
import { Grid, Row, Col } from 'react-bootstrap';
import './../Style/style.css';

class App extends Component {
    render() {
        return (
            <Grid>
                <Row className="header">
                    <Col xs={1} className="hamburguer">
                          <div className="line-hamburguer"></div>
                          <div className="line-hamburguer-middle"></div>
                          <div className="line-hamburguer"></div>
                    </Col>
                    <Col xs={11}>
                          <img src={logo} alt="logo" className="logo" />
                    </Col>
                    {/* <Col xs={2}>
                          <img src={logo} alt="logo" />
                    </Col> */}
                </Row>
            </Grid>
        );
    }
}

export default App;
