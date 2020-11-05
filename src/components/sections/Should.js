import React, { Component } from 'react'

import FirstItem from '../items/FirstItem'
import SecondtItem from '../items/SecondItem'
import './Should.css'

import MaskGirl from '../../assets/MaskGirl1.svg'
import MaskGirl2 from '../../assets/Mask_girl.svg'
import MaskGirl3 from '../../assets/Group_15454.svg'
import MaskGirl4 from '../../assets/Mask.svg'


class Should extends Component {
    render() {
        return <div className="containerShould">
            <div className="shouldText">
                <h2>Covid-19</h2>
                <h3>What Should We Do</h3>
                <p>Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And Some Cause Disease. A Newly Identified Type Has Caused</p>
            </div>
            <div className="item1">
                <FirstItem
                    id="01"
                    text="Wear Masks"
                    description="Continually Seize Impactful Vortals Rather Than Future-Proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-Services. Competently Pursure Standards Compliant Leadership Skills Vis-A-Vis Pandemic 'Outside' The Box Thinking Objectively"
                    image={MaskGirl}
                />
            </div>
            <div className="item2">
                <SecondtItem
                    id="02"
                    text="Wash Your Hands"
                    description="Continually Seize Impactful Voltals Rather Than Future-Proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tasted Meta-Services. Competently Pursue Standards Compliant Leadership Skills Vis-A-Vis Pandemic 'Outside The Box' Thinking. Objectively Continually Seize Impacful Voltars"
                    image={MaskGirl2}
                />
            </div>
            <div className="item1">
                <FirstItem
                    id="03"
                    text="Wear Masks"
                    description="Continually Seize Impactful Vortals Rather Than Future-Proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tested Meta-Services. Competently Pursure Standards Compliant Leadership Skills Vis-A-Vis Pandemic 'Outside' The Box Thinking Objectively"
                    image= {MaskGirl3}
                />
            </div>
            <div className="item2">
                <SecondtItem
                    id="04"
                    text="Wash Your Hands"
                    description="Continually Seize Impactful Voltals Rather Than Future-Proof Supply Chains. Uniquely Exploit Emerging Niches Via Fully Tasted Meta-Services. Competently Pursue Standards Compliant Leadership Skills Vis-A-Vis Pandemic 'Outside The Box' Thinking. Objectively Continually Seize Impacful Voltars"
                    image={MaskGirl4}
                />
            </div>
        </div>
    }
}
export default Should