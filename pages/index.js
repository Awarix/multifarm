import React, { useState, useEffect } from 'react'
import Graph from '../components/Graph'
import styles from '../styles/Home.module.css'


export default function Home() {
    const [farm, setFarm] = useState('')
    const [asset, setAsset] = useState('')
    const [tvl, setTvl] = useState ([])

    useEffect (()=> {
      const fetchData = async () => {
        const response = await fetch ('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth')
        const data = await response.json()
        setFarm(data.farm)
        setAsset(data.asset)
        setTvl(data.tvlStakedHistory)
      }
      fetchData ()
      
    }, [])
    console.log (tvl)
    
    const output = tvl.map((entry) => {
      const date = new Date(entry.date);
      return {
        date: `${date.getUTCDate().toString().padStart(2, '0')}.${(date.getUTCMonth() + 1).toString().padStart(2, '0')}`,
        value: Math.round(entry.value / 10000000) / 100, 
      };
    });
    
    console.log(output);

    output.reverse()
    
  return (
    <div className={styles.container}>
      {farm && asset && <p className={styles.containerTitle}>{farm}<span style={{color:'#fff'}}>: {asset}</span></p>}
      <div className={styles.containerMain}>
      <div className={styles.graphTitleHolder}>
      <h2 className={styles.graphTitle}>
        Asset TVL
      </h2>
      <div className={styles.graphTime}>
      <span>1h</span>
      <span>4h</span>
      <span className={styles.timeActive}>1d</span>
      <span>1w</span>
      <span>1m</span>
      </div>
      </div>
      <Graph tvl={output}/>
      </div>
      
    </div>
  )
}
