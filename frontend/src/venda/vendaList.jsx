import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './vendaActions'
import  Moment  from 'react-moment'

class VendaList extends Component {
    
    componentWillMount() {
        this.props.getList()
        
    }

    renderRows() {
        const list = this.props.list || []

        return list.map(v => (
            <tr key={ v._id }>
                <td><Moment format="DD/MM/YYYY">{v.data}</ Moment ></td>
                <td>{ v.client }</td>
                <td>{ v.total }</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Cliente</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.venda.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VendaList) 