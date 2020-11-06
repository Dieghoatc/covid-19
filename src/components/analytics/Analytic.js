import React, { Component } from 'react'

import Table from './Table'
import './Analytic.css'

class Analytic extends Component {
    state = {
        databases: [],
        start: 0,
        end: 8
    }
    
    showTable = (id, param) => {
        var data = this.state.databases.map(d => {
            return (
                <div key={d.Country}>
                    <Table data={d.TotalRecovered} />
                </div>
            )
        })
        return data
    }
    
    componentDidMount() {
        this.fetchCharacters();
    }
    fetchCharacters = async () => {
        const res = await fetch('https://api.covid19api.com/summary')
        const data = await res.json()
        this.setState({
            count: data.Countries.length,
            databases: data.Countries.slice(this.state.start, this.state.end)
        }) 
    }
    updateTable (start, end) {
        console.log("Estoy mostrando")
        this.setState({
            start: start,
            end: end
        })
        this.fetchCharacters();
    }

    render() { 
        console.log(this.state.start)
        console.log(this.state.end)
        return <div className="containerAnalytic">
            <div className="analyticHead">
                <h2>Analytics By Country</h2>
                <p>Data From Our Api</p>
            </div>
            <div className="analyticCountry">
                <h3>Country</h3>
                {
                    this.state.databases.map(d => {
                        return (
                            <div key={d.Country}>
                                <Table data={d.Country} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="analyticRecovered">
                <h3>Recovered</h3>
                {this.showTable(this.state.Country, this.state.TotalRecovered)}
            </div>
            <div className="analyticDeaths">
                <h3>Deaths</h3>
                {
                    this.state.databases.map(d => {
                        return (
                            <div key={d.Country}>
                                <Table data={d.TotalDeaths} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagination">
                    <span onClick={() => this.updateTable(0, 8)}>&laquo;</span>
                    <span onClick={() => this.updateTable(0, 8)} >1</span>
                    <span className="active" onClick={() => this.updateTable(9, 16)}>2</span>
                    <span onClick={() => this.updateTable(16, 24)}>3</span>
                    <span onClick={() => this.updateTable(25, 32)}>4</span>
                    <span onClick={() => this.updateTable(33, 42)}>5</span>
                    <span onClick={() => this.updateTable(43, 40)}>6</span>
                    <span onClick={() => this.updateTable(41, 48)}>7</span>
                    <span onClick={() => this.updateTable(49, 56)}>8</span>
                    <span>&raquo;</span>
                </div>
        </div>
    }
}
export default Analytic;