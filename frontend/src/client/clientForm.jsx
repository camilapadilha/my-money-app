import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './clientActions'
import LabelAndInput from '../common/form/labelAndInput'


class ClientForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o Nome'/>
                    <Field name='rg' component={LabelAndInput} readOnly={readOnly}
                    label='RG' cols='12 4' placeholder='Informe o RG' />
                    <Field name='cpf' component={LabelAndInput}  readOnly={readOnly}
                    label='CPF' cols='12 4' placeholder='Informe o CPF' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                </div>
            </form>

        )
    }   
}
ClientForm = reduxForm({ form: 'clientForm', destroyOnUnmount: false}) (ClientForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(ClientForm)