import React, { useState, useEffect } from 'react'
import Arr from '../components/Arr'
import Graph from '../components/Graph'
import styles from '../styles/Home.module.css'


export default function Home() {
    const [farm, setFarm] = useState('Convex')
    const [asset, setAsset] = useState('steth')
    const [tvl, setTvl] = useState ([])
    const [formatted, setFormatted] = useState ()

    useEffect (()=> {
      const fetchData = async () => {
        const response = await fetch ('https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_asset_details/ETH_Convex_steth')
        const data = await response.json()
        setFarm(data.farm)
        setAsset(data.asset)
        setTvl (data.tvlStakedHistory)
        setFormatted(data.tvlStakedHistory.value)
      }
      fetchData ()
      
    }, [])
    console.log (tvl)
  return (
    <div className={styles.container}>
      {farm && asset && <p style={{color:'blue'}}>{farm}<span style={{color:'#fff'}}>: {asset}</span></p>}
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
      <Graph tvl={tvl}/>
      </div>
      <div><Arr /></div>
    </div>
  )
}
