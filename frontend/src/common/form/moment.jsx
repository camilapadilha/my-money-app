import React from 'react'
import  Moment  from 'react-moment'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <Moment format={props.formato} className='form-control'>{props.date}</Moment >
        </div>
    </Grid>
)
