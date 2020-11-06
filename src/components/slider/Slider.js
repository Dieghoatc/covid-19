import React, {Component} from 'react';

import './Slider.css';
import SliderImage from '../../assets/Group_18568.svg';

class Slider extends Component {
    render(){
        return <div className="containerSlider">
            <div className="slider-text">
                <h1>COVID-19 Alert</h1>
                <h2>Stay At Home Quarantine To Stop Corona Virus</h2>
                <p>There Is No Specific Medicine To Prevent Or Treat Coronavirus Disease (COVID-19). People May Need Supportive Care To</p>
                <a href="/" className="btn btn-red"><strong>Let Us Help</strong></a>
            </div>
            <div className="slider-image">
                <img src={SliderImage} alt="Image1"/>
            </div>
        </div>
    }        
}
export default Slider