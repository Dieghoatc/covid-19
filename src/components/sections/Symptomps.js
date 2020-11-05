import React, {Component} from 'react'

import './Symptomps.css'
import SymptompsImage from '../../assets/Group_15444.svg'

class Symptomps extends Component{
    render(){
        return <div className="containerSymptomps">
            <div className="sympText">
                <h2>Covid-19</h2>
                <h3>Symptomps</h3>
                <p>corona viruses are a type of virus. there are many different kinds, and some cause disease. a newly identified types has caused a recent outbreak of respiratory</p>
            </div>
            <div className="sympImage">
                <img src={SymptompsImage} alt="Symptomps"/>
            </div>            
        </div>
    }
}
export default Symptomps;