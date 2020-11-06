import React, { Component } from 'react'

import Analytics from '../analytics/Analytic'

import './Pagination.css'

function Table(props) {
    return (
        <Analytics
            start={props.start}
            end={props.end}
        />
    )

}

class Pagination extends Component {
    state = {
        start: 0,
        end: 8,
        show: true
    }
    handleClick(start, end) {
        this.setState({
            start: start,
            end: end
        })
    }
    render() {
        return (
            <div className="paginationContainer">
                <div className="paginationContent">
                    <Table start= {this.state.start} end={this.state.end} />
                </div>
                
            </div>
        )
    }
}
export default Pagination