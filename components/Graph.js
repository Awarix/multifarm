import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'



const Graph = (props) => {
    
    const data = [
    { date: '15.10', value: (122 + Math.random()*100).toFixed(0) },
    { date: '16.10', value: (123 + Math.random()*100).toFixed(0) },
    { date: '17.10', value: (123 + Math.random()*100).toFixed(0) },
    { date: '18.10', value: (123 + Math.random()*100).toFixed(0) },
    { date: '19.10', value: (123 + Math.random()*100).toFixed(0) },
    { date: '20.10', value: (123 + Math.random()*100).toFixed(0) }
  ]
    return (
      <div style={{width:'100%', height:'300px'}}>
    <ResponsiveContainer >
    <AreaChart
      data={props.tvl}
      className='gradient-container'
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
        <defs>
            <linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='#d24ffa' stopOpacity={0.4} />
              <stop offset='33%' stopColor='#d24ffa' stopOpacity={0.2} />
              <stop offset='100%' stopColor='#6caefd' stopOpacity={0.4} />
            </linearGradient>
            <linearGradient id='color2' x1='0' y1='0' x2='1' y2='0'>
              <stop offset='0%' stopColor='#403667' stopOpacity={0.4} />
              <stop offset='33%' stopColor='#414376' stopOpacity={0.2} />
              <stop offset='100%' stopColor='#375c86' stopOpacity={0.4} />
            </linearGradient>
        </defs>
      <CartesianGrid stroke="#3b3f69" />
      <XAxis dataKey="date" stroke="#9099d4"  />
      <YAxis stroke="#9099d4"/>
      <Tooltip />
      <Area type="monotone" dataKey="value" stroke="#b34adb" fill='url(#color)' />
    </AreaChart>
    </ResponsiveContainer>
    </div>
    )
}

export default Graph