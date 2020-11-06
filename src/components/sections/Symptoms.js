import React, { Component } from 'react'

import './Symptoms.css'
import SymptomsImage from '../../assets/Group_15444.svg'

class Symptoms extends Component {
    render() {
        return <div className="containerSymptoms">
            <div className="sympText">
                <a name="Symptoms"></a>
                <h2>Covid-19</h2>
                <h3>Symptoms</h3>
                <p>corona viruses are a type of virus. there are many different kinds, and some cause disease. a newly identified types has caused a recent outbreak of respiratory</p>
            </div>
            <div className="sympImage">
                <img src={SymptomsImage} alt="Symptoms" />
            </div>
        </div>
    }
}
export default Symptoms;