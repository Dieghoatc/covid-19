import React, { Component } from 'react'

import Card from '../cards/Card';
import './Contagion.css';
import TransmisionImage from '../../assets/Group_18544.svg';
import ContactsImage from '../../assets/Group_18542.svg';
import ObjectsImage from '../../assets/Group_18540.svg';

class Contagion extends Component {
    render() {
        return <div className="containerContagion">
            <div className="text-contagion">
                <h2>Covid-19</h2>
                <h3>Contagion</h3>
                <p>Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And Some Cause Disease. A Newly Identified Type</p>
            </div>
            <div className="transmision">
                <Card
                    image={TransmisionImage}
                    textSubtitle="Air Transmission"
                    textDescription="Ovjectively Evolve Tecnical Expertise Before Extensible Initiatives. Efficiently Symplify"
                />
            </div>
            <div className="contacts">
                <Card
                    image={ContactsImage}
                    textSubtitle="Human Contacts"
                    textDescription="Whashing Your Hands Is One Of Thesimplest Ways You Can Protect"
                />
            </div>
            <div className="objects">
                <Card
                    image={ObjectsImage}
                    textSubtitle="Containted Objects"
                    textDescription="Use The Tissue While Sneezing, In This Way, You Can Protect Your Droplets."
                />
            </div>
        </div>
    }
}
export default Contagion;