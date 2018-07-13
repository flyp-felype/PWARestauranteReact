import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './../Style/style.css';
import image from './../Images/DSC_0370.JPG';
class App extends Component {
    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={image} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                   <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={image} />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>


            </Carousel>
        );
    }
}

export default App;
