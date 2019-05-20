import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
            <MenuItem path='#clients'
                label='Clientes' icon='usd' />
            <MenuItem path='#products'
                label='Produtos' icon='usd' />
        </MenuTree>
        <MenuTree label='Movimento' icon='edit'>
            <MenuItem path='#vendas'
                label='Vendas' icon='usd' />
        </MenuTree>
    </ul>
)