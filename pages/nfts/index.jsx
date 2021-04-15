import React from 'react'
import styles from '../../styles/Home.module.css'
import Header from '../Header'
import SamHead from '../SamHead'

const Nfts = () => (
  <div className={styles.container}>
    <SamHead />

    <Header />
    <div style={{
      padding: '25% 0',
      textAlign: 'center',
      color: 'white',
    }}
    >
      <h3>COMING SOON</h3>
    </div>
  </div>
)

export default Nfts
