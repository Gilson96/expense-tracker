import React from 'react'

const ChartBar = (props) => {
    let barFillHeight = '0%';

    // check if maxValue greater than zero
    // fill bar with value
    // This give the % between 0-100 by which bar should be filled
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barFillHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar
