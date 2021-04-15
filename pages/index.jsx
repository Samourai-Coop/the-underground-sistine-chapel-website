import React from 'react'
import styles from '../styles/Home.module.css'
import Header from './Header'
import SamHead from './SamHead'
import ipfsPins from '../helpers/ipfs-pins'

export const Footer = () => (
  <div style={{
    display: 'flex', justifyContent: 'center', marginTop: '2rem', zIndex: 10,
  }}
  >
    <div style={{
      width: '15vw',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    }}
    >
      <a href="https://www.instagram.com/samourai.tv/" target="Instagram">
        <img src={ipfsPins.insta} alt="insta" width="15" height="15" />
      </a>
      <a href="https://twitter.com/samouraicoop" target="Twitter">
        <img src={ipfsPins.twitter} alt="twitter" width="15" height="15" />
      </a>
      <a href="https://www.facebook.com/samouraicoop/" target="Facebook">
        <img src={ipfsPins.facebook} alt="facebook" width="15" height="15" />
      </a>
    </div>
  </div>
)

export const SeparateBar = () => (
  <div style={{
    height: '7rem', backgroundColor: '#979797', width: '0.5px',
  }}
  />
)

export const Section = ({
// eslint-disable-next-line react/prop-types
  title, eta, platform, description, logo, href,
}) => (
  <div style={{
    flex: 1, display: 'flex',
  }}
  >
    <div className={styles.section}>
      <text className={styles.title}>{title}</text>
      <text className={styles.eta}>{eta}</text>
      <text className={styles.platform}>{platform}</text>
      {typeof description !== 'string' ? (<div>{description}</div>) : (<text className={styles.description}>{description}</text>)}
      <text style={{
        color: 'white', display: 'flex', alignItems: 'center',
      }}
      >
        {href ? (
          <a href={href} target={href}>
            {logo || null}
          </a>
        ) : (
          <div>
            {logo || null}
          </div>
        )}
      </text>
    </div>
  </div>
)

const Home = () => (
  <div className={styles.container}>
    <SamHead />

    <Header />
    <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          marginTop: '5rem',
          marginLeft: '4rem',
          marginRight: '4rem',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <img src={ipfsPins.homeBackground} width="80%" height="90%" alt="background" style={{ position: 'absolute', bottom: -50, right: 50 }} />
        <div style={{
          width: '40vw',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 10,
          marginTop: '10vh',
        }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: '1rem',
          }}
          >
            <a href="/">
              <img src={ipfsPins.playButton} height="60" alt="play-button" />
            </a>
            <text style={{
              color: '#FFDA00', marginLeft: '2rem', fontSize: '1rem', fontWeight: '900', fontFamily: 'Avenir Heavy',
            }}
            >
              WATCH TRAILER
            </text>
          </div>
          <p className={styles.trailer}>
            <div>
              <text style={{ fontWeight: '900' }}>The Underground Sistine Chapel</text>
              <text>{' is a documentary film that follows the'}</text>
            </div>
            <text>construction of a modern Sistine Chapel, in the heart of a former gold</text>
            <text>foundry in an impoverished corner of the suburbs of Paris.</text>
          </p>
          <p className={styles.trailer}>
            <text>Directed by Yohann Grignou & Antoine Breuil, founder of Samouraï Coop,</text>
            <text>this movie has been funded with cryptocurrencies, and will be released on</text>
            <text>censorship-resistant networks and available for free on decentralized web.</text>
          </p>
          <p className={styles.trailer}>
            <text>This independent movie is giving birth to 200 original NFTs,</text>
            <text>prodiving exclusive contents from the movie production.</text>
          </p>
        </div>

      </div>
      <div style={{ flex: 1, zIndex: 10 }}>
        <div style={{
          flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '7%',

        }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src={ipfsPins.ticket} width="70%" alt="ticket" />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
            zIndex: 10,
          }}
          >
            <text style={{
              fontWeight: 900,
              color: 'white',
              fontSize: '1.1rem',
              fontFamily: 'Avenir Heavy',
            }}
            >
              A FIRST WEB3 FUNDED ART MOVIE
            </text>
            <text style={{
              color: '#FFDA00', fontWeight: 500, fontSize: '0.75rem',
            }}
            >
              Delivered on Web3 by Samouraï Coop
            </text>
          </div>
          <div style={{ flex: 1 }} />
        </div>

        <div style={{
          display: 'flex', zIndex: 10, flexDirection: 'row', marginTop: '2rem',
        }}
        >

          <Section
            title="NFTs PRE-SALE"
            eta="Monday, May 31, 2021"
            platform="Available exclusively on Minty-Art"
            description={(
              <div style={{
                display: 'flex', alignItems: 'center', flexDirection: 'column',
              }}
              >
                <text className={styles.description}>3 phases of rare pre-sales :</text>
                <text className={styles.description}>from Monday, May 31, 2021</text>
                <text className={styles.description}>to Friday, June 25, 2021</text>
              </div>
            )}
            logo={(
              <div style={{
                display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '1.5rem',
              }}
              >
                <img src={ipfsPins.minty} alt="Minty" height="60" />
              </div>
            )}
            href="https://www.minty.art"
          />
          <SeparateBar />
          <Section
            title="MOVIE OFFICIAL RELEASE"
            eta="SUMMER 2021"
            platform="Available for free on the internets"
            description="on IPFS & Youtube"
            logo={(
              <div style={{
                display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '2.2rem',
              }}
              >
                <img src={ipfsPins.samourai} height="60" alt="sam" />
                <text style={{
                  fontWeight: '900', fontSize: '0.8rem', marginTop: '0.5rem',
                }}
                >
                  SAMOURAÏ COOP
                </text>
                <text className={styles.details}>decentralize production</text>
              </div>
            )}
          />
          <SeparateBar />

          <div style={{ display: 'flex', flex: 1 }}>
            <div style={{
              flexDirection: 'column', display: 'flex', flex: 1,
            }}
            >
              <div className={styles.section} style={{ marginBottom: '2rem' }}>
                <text className={styles.title}>PRIVATE AVANT-PREMIÈRE</text>
                <text className={styles.eta}>Friday, June 18, 2021</text>
                <text className={styles.platform}>Decentralized Private Screening Session</text>
                <text className={styles.description}>Limited to 50 NFTs holders</text>
              </div>
              <div className={styles.section}>
                <text className={styles.title}>CINEMA AVANT-PREMIÈRE</text>
                <text className={styles.eta}>Saturday, June 26, 2021</text>
                <text className={styles.platform}>Private projection in Paris</text>
                <text className={styles.description}>Limited to 50 NFTs holders</text>
              </div>
            </div>

          </div>

        </div>
        <Footer />
      </div>
    </div>
  </div>
)

export default Home
