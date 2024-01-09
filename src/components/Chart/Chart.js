import React from 'react'
import ChartBar from './ChartBar'

const Chart = (props) => {

    // gets the value of chartDataPoints 
    // And transform a data point object to just the number
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    // find the maximum value
    // pull out all array elements
    // and add them as standalone arguments
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => 
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />)}
        </div> 
    )
}

export default Chart
