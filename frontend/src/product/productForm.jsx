import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './productActions'
import LabelAndInput from '../common/form/labelAndInput'

class ProductForm extends Component {
    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={LabelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome do produto' />
                    <Field name='valorCompra' component={LabelAndInput} readOnly={readOnly}
                    label='Preço de Compra' cols='12 4' placeholder='Informe o preço de Compra' />
                    <Field name='valorVenda' component={LabelAndInput} readOnly={readOnly}
                    label='Preço de Venda' cols='12 4' placeholder='Informe o preço de Venda' />
                    <Field name='estoque' component={LabelAndInput} readOnly={readOnly}
                    label='Estoque' cols='12 4' placeholder='Informe o estoque' />
                    <Field name='descricao' component={LabelAndInput} readOnly={readOnly}
                    label='Descrição' cols='12 4' placeholder='Informe uma descrição' />
                
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

ProductForm = reduxForm({ form: 'productForm', destroyOnUnmount: false}) (ProductForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps) (ProductForm)