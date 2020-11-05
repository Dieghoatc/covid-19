import React, { Component } from 'react'

import './Item.css'
class FirstItem extends Component {
    render() {
        return <div className="itemContainer">
            <div className="itemText">
                <div className="icon">{this.props.id}</div>
                <h3>{this.props.text}</h3>
                <p>{this.props.description}</p>
            </div>
            <div className="itemImage">
                <img src={this.props.image} alt="" />
            </div>
        </div>
    }
}
export default FirstItem;