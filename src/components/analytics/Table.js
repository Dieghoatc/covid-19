import React from 'react'
import './Table.css'

class Table extends React.Component {
    render(){
        return <div>
            <p>{this.props.data}</p>
        </div>
    }
}
export default Table
