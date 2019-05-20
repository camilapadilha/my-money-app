import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create } from './vendaActions'

import List from './vendaList'
import Form from './vendaForm'

class Venda extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
               <ContentHeader title='Movimento de Venda' small='Movimento' />
                    <Content>
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Listar' icon='bars' target='tabList' />
                                <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            </TabsHeader>
                            <TabsContent>
                                <TabContent id='tabList'>
                                    <List />
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <Form onSubmit={ this.props.create }
                                    submitLabel='Incluir' submitClass='primary' />
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ init, create }, dispatch)
export default connect(null, mapDispatchToProps)(Venda)