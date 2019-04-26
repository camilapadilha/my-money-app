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
                    <div>
                        <label>Tipo de Cliente</label>
                        <div>
                            <label><Field name="tipoPessoa" component="input" 
                            type="radio" value="fisica"/> Física</label>
                            <label><Field name="tipoPessoa" component="input" 
                            type="radio" value="juridica"/> Jurídica</label>
                        </div>
                    </div>
                    
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o Nome'/>
                    <Field name='rg' component={LabelAndInput} readOnly={readOnly}
                    label='RG' cols='12 4' placeholder='Informe o RG' />
                    <Field name='cpf' component={LabelAndInput}  readOnly={readOnly}
                    label='CPF' cols='12 4' placeholder='Informe o CPF' />
                    <Field name='endereco' component={LabelAndInput}  readOnly={readOnly}
                    label='Endereço' cols='12 4' placeholder='Informe seu Endereço' />
                    <Field name='bairro' component={LabelAndInput}  readOnly={readOnly}
                    label='Bairro' cols='12 4' placeholder='Informe seu Bairro' />
                    <Field name='numero' component={LabelAndInput}  readOnly={readOnly}
                    label='Número' cols='12 4' placeholder='Informe o Número' />
                    <Field name='celular' component={LabelAndInput}  readOnly={readOnly}
                    label='Celular' cols='12 4' placeholder='Informe o Celular' />
                    <Field name='telefone' component={LabelAndInput}  readOnly={readOnly}
                    label='Telefone' cols='12 4' placeholder='Informe o Telefone' />
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
ClientForm = reduxForm({ form: 'clientForm', destroyOnUnmount: false}) (ClientForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(ClientForm)