import React, { Component } from 'react';

import '../sections/Coronavirus.css';
import covidImage from '../../assets/Group_18557.svg'

class Coronavirus extends Component {
    render() {
        return <div className="containerCoronavirus">
            <div className="covid-image">
                <img src={covidImage} alt="covid-19" />
            </div>
            <div className="covid-text">
                <h2>What Is  Covid-19</h2>
                <h3>Coronavirus</h3>
                <p>Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And Some Cause Disease. A Newly Identified Type Has Caused A Recent Outbreak Of Respiratory Illnes Now Called COVID-19. Lauren Sauer, M.S., The Director Of Operations With The Johns Hopkins Office Of Critical Event Preparedness And Response</p>
                <a href="" className="btn btn-rose"><strong>Learn More</strong></a>
            </div>
        </div>
    }
}
export default Coronavirus