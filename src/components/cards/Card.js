import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return <div className="card">
            <img src={this.props.image} alt="" />
            <div className="cardBody">
                <h4><b>{this.props.textSubtitle}</b></h4>
                <p>{this.props.textDescription}</p>
                <div className="underlined"></div>
            </div>
        </div>
    }
}
export default Card;