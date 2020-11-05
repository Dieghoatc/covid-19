import React, {Component} from 'react'

class SecondItem extends Component{
    render (){
        return <div className="itemContainer">
            <div className="itemImage">
                <img src={this.props.image} alt="" />
            </div>
            <div className="itemText">
                <div className="icon">{this.props.id}</div>
                <h3>{this.props.text}</h3>
                <p>{this.props.description}</p>
            </div>            
        </div>
    }
}
export default SecondItem;