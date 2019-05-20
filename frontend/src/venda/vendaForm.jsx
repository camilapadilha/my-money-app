import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './vendaActions'
import LabelAndInput from '../common/form/labelAndInput'
import Data from '../common/form/moment'

class VendaForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        
        return (
            
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='data' component={Data} cols='12 4' label='Data' formato='DD/MM/YYYY'/>
                  
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-default'
                    onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

VendaForm = reduxForm({ form: 'vendaForm', destroyOnUnmount: false}) (VendaForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps) (VendaForm)