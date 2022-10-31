import React, { useState, useEffect } from 'react'
import Graph from '../components/Graph'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [farm, setFarm] = useState('Convex')
    const [asset, setAsset] = useState('steth')
  return (
    <div className={styles.container}>
      <p style={{color:'blue'}}>{farm}<span style={{color:'#fff'}}>: {asset}</span></p>
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
      <Graph />
      </div>
    </div>
  )
}
