import React from 'react'
import styles from '../../styles/Press.module.css'
import Header from '../Header'
import { Footer } from '../index'
import ipfsPins from '../../helpers/ipfs-pins'
import SamHead from '../SamHead'

const Press = () => (
  <div className={styles.container}>
    <SamHead />

    <Header />
    <div style={{ marginTop: '4rem' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
      }}
      >
        <text style={{
          fontWeight: 900,
          color: 'white',
          fontSize: '1.1rem',
          letterSpacing: '0.05rem',
          fontFamily: 'Avenir Heavy',
        }}
        >
          PRESS & MEDIAS
        </text>
        <text style={{
          color: '#FFDA00', fontSize: '0.75rem', marginTop: '0.5rem',
        }}
        >
          They're talking about the movie
        </text>
      </div>
    </div>
    <div style={{ marginTop: '2rem' }}>
      <img src={ipfsPins.pressBackground} width="100%" alt="press-page" />
    </div>
    <div style={{
      marginTop: '3rem', flexDirection: 'row', display: 'flex', flex: 1,
    }}
    >
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center',
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <img src={ipfsPins.pdf} width="60" alt="shape" />
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '1.5rem',
          }}
          >
            <text style={{
              fontWeight: '800', fontSize: '1rem', color: 'white', wordSpacing: '0.1rem', fontFamily: 'Avenir Heavy',
            }}
            >
              PRESS KIT
            </text>
            <a
              style={{
                fontWeight: '600', fontSize: '0.8rem', color: '#FFDA00', marginTop: '0.2rem',
              }}
              href="/"
            >
              Télécharger 🇫🇷
            </a>
            <text style={{
              fontWeight: '800', fontSize: '0.7rem', color: 'white', wordSpacing: '0.1rem', marginTop: '0.1rem',
            }}
            >
              Version française
            </text>
          </div>
        </div>

        <div style={{
          marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <text style={{
            fontWeight: '500', fontSize: '1rem', color: 'white', wordSpacing: '0.1rem',
          }}
          >
            PRODUCTION
          </text>
          <text style={{
            fontWeight: '400', fontSize: '0.9rem', color: '#B09500', marginTop: '0.2rem',
          }}
          >
            hello@samourai.coop
          </text>
        </div>

      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
      }}
      >
        <div style={{ marginTop: '3rem' }}>
          <img src={ipfsPins.samourai} width="130" alt="sam" />
        </div>
        <text style={{
          fontSize: '1rem', color: 'white', fontWeight: '100', marginTop: '1rem',
        }}
        >
          SAMOURAÏ COOP
        </text>
        <text style={{
          fontSize: '0.8rem', color: '#646668', fontWeight: '300',
        }}
        >
          decentralized production
        </text>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center',
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <img src={ipfsPins.pdf} width="60" alt="shape" />
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '1.5rem',
          }}
          >
            <text style={{
              fontWeight: '800', fontSize: '1rem', color: 'white', wordSpacing: '0.1rem', fontFamily: 'Avenir Heavy',
            }}
            >
              PRESS KIT
            </text>
            <a
              style={{
                fontWeight: '600', fontSize: '0.8rem', color: '#FFDA00', marginTop: '0.2rem',
              }}
              href="/"
            >
              Download
            </a>
            <text style={{
              fontWeight: '800', fontSize: '0.7rem', color: 'white', wordSpacing: '0.1rem', marginTop: '0.1rem',
            }}
            >
              English version
            </text>
          </div>
        </div>
        <div style={{
          marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        }}
        >
          <text style={{
            fontWeight: '500', fontSize: '1rem', color: 'white', wordSpacing: '0.1rem',
          }}
          >
            PRESS CONTACT
          </text>
          <text style={{
            fontWeight: '400', fontSize: '0.9rem', color: '#B09500', marginTop: '0.2rem',
          }}
          >
            press@samourai.coop
          </text>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Press
