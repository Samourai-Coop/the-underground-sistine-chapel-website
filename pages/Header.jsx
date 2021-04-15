/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useAppContext } from '../store/index'
import ipfsPins from '../helpers/ipfs-pins'

const SelectedBar = () => (
  <div style={{
    width: '20px', height: '2px', backgroundColor: '#FFDA00', marginTop: '0.3rem',
  }}
  />
)

const Header = () => {
  const ctx = useAppContext()

  const setSelectedTab = (value) => {
    ctx.dispatch({
      type: 'SET_SELECTED_TAB',
      payload: { selectedTab: value },
    })
  }

  return (
    <div className={styles.header}>
      <a style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }} href="/">
        <div className={styles.titleContainer}>
          <img src={ipfsPins.logoFilm} alt="logo-film" width="400" height="200" style={{ top: -70, left: -20, position: 'absolute' }} />
        </div>
      </a>
      <div className={styles.tabs}>
        <div className={styles.tab}>
          <Link href="/">
            <a
              className={ctx.selectedTab === 'home' ? styles.selected : styles.tab}
              href="/"
              onClick={() => setSelectedTab('home')}
            >
              The Film
            </a>
          </Link>
          {ctx.selectedTab === 'home' ? <SelectedBar /> : <div style={{ height: '2px' }} />}
        </div>
        <div className={styles.tab}>
          <Link href="/nfts">
            <a
              href="/nfts"
              className={ctx.selectedTab === 'nfts' ? styles.selected : styles.tab}
              onClick={() => setSelectedTab('nfts')}
            >
              NFTs
            </a>
          </Link>
          {ctx.selectedTab === 'nfts' ? <SelectedBar /> : <div style={{ height: '2px' }} />}
        </div>
        <div className={styles.tab}>
          <Link href="about">
            <a
              href="about"
              className={ctx.selectedTab === 'about' ? styles.selected : styles.tab}
              onClick={() => setSelectedTab('about')}
            >
              About
            </a>
          </Link>
          {ctx.selectedTab === 'about' ? <SelectedBar /> : <div style={{ height: '2px' }} />}
        </div>
        <div className={styles.tab}>
          <Link href="press">
            <a
              href="press"
              className={ctx.selectedTab === 'press' ? styles.selected : styles.tab}
              onClick={() => setSelectedTab('press')}
            >
              Press
            </a>
          </Link>
          {ctx.selectedTab === 'press' ? <SelectedBar /> : <div style={{ height: '2px' }} />}
        </div>
        <div className={styles.tab}>
          <a
            href="https://discord.samourai.tv/"
            target="Discord"
            className={ctx.selectedTab === 'community' ? styles.selected : styles.tab}
            onClick={() => setSelectedTab('community')}
          >
            Community
          </a>
          {ctx.selectedTab === 'community' ? <SelectedBar /> : <div style={{ height: '2px' }} />}
        </div>
        <div className={styles.tab}>
          <a
            href="https://www.samourai.coop "
            target="Samourai"
            onClick={() => setSelectedTab('home')}
          >
            <img src={ipfsPins.samourai} height="30" alt="sam" />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header
