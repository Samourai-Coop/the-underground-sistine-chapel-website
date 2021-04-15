import React from 'react'
import styles from '../../styles/Home.module.css'
import Header from '../Header'
import { Footer } from '../index'
import ipfsPins from '../../helpers/ipfs-pins'
import SamHead from '../SamHead'

export const BulletPoint = ({
  // eslint-disable-next-line react/prop-types
  emoji, title, desc,
}) => (
  <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'row' }}>
    {emoji ? <text style={{ fontSize: '1.2rem' }}>{emoji}</text> : null}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <text style={{
        fontWeight: '900', fontSize: '1rem', color: 'white', wordSpacing: '0.1rem', marginLeft: '1.5rem',
      }}
      >
        {title}
      </text>
      {desc}
    </div>
  </div>
)

const Private = () => (
  <div className={styles.container}>
    <SamHead />

    <Header />
    <div style={{
      position: 'absolute', top: 520, left: 0, right: 0, bottom: 0,
    }}
    >
      <img src={ipfsPins.privateBackground} alt="private" width="100%" height="650" />
    </div>
    <div className={styles.private}>
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
          PRIVATE SECRET PAGE
        </text>
        <text style={{
          color: '#FFDA00', fontSize: '0.75rem', marginTop: '0.5rem',
        }}
        >
          Reserved access to NFTs Holders
        </text>
        <div style={{ marginTop: '1rem' }}>
          <img src={ipfsPins.ticket} alt="ticket" width="250" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <text style={{
            fontWeight: 900,
            color: 'white',
            fontSize: '1.1rem',
            letterSpacing: '0.05rem',
            fontFamily: 'Avenir Heavy',
          }}
          >
            PRIVATE AVANT-PREMIÈRE
          </text>
          <text style={{
            color: '#FFDA00', fontWeight: 600, fontSize: '0.75rem', marginTop: '0.5rem',
          }}
          >
            7th June 21
          </text>
          <text style={{
            color: 'white', fontWeight: 600, fontSize: '0.8rem', marginTop: '0.5rem',
          }}
          >
            Decentralized Private Screening Session
          </text>
          <text style={{
            color: 'white', fontWeight: 400, fontSize: '0.75rem', marginTop: '0.5rem', fontStyle: 'italic',
          }}
          >
            Limited to 50 people
          </text>
        </div>

      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '3rem', padding: '0 10rem',
      }}
      >
        <text style={{
          fontWeight: 900,
          color: 'white',
          fontSize: '1.1rem',
          letterSpacing: '0.05rem',
          marginLeft: '2.7rem',
          fontFamily: 'Avenir Heavy',
        }}
        >
          HOW TO JOIN THE PRIVATE AVANT-PREMIÈRE ?
        </text>
        <BulletPoint
          emoji="🔑"
          title="1°) Join the Samouraï TV Discord Server"
          desc={(
            <a
              style={{
                fontWeight: '100', fontSize: '0.8rem', color: '#DCBA00', marginLeft: '1.5rem', opacity: '0.7',
              }}
              href="/"
            >
              https://discord.samourai.tv
            </a>
          )}
        />
        <BulletPoint
          emoji="👋"
          title="2°) Present yourself & claim your rank"
          desc={(
            <text style={{
              fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
            }}
            >
              in the #generalchannel or in DM to @zôÖma (admin & co-director)
            </text>
          )}
        />
        <BulletPoint
          emoji="🎟️"
          title="3°) You’ll receive a VIP rank on this community server"
          desc={(
            <text style={{
              fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
            }}
            >
              that allow you to join a private category of channels, with chats and online cinema channel.
            </text>
          )}
        />
        <BulletPoint
          emoji="🍿"
          title="4°) The Private Avant-Premiere will be restricted to 50 people that bought rare tickets."
          desc={(
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <text style={{
                fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
              }}
              >
                For this private projection, we recommend to have a great and confortable setup to watch the movie in the
              </text>
              <text style={{
                fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
              }}
              >
                best conditions, a big screen, good sound system, and why not with a glass of wine…
              </text>
            </div>
          )}
        />
        <BulletPoint
          emoji="🗨️"
          title="5°) AMA Time after the movie !"
          desc={(
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <text style={{
                fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
              }}
              >
                We’ll also provide a 20 minutes discussion with Directors
              </text>
              <text style={{
                fontWeight: '100', fontSize: '0.8rem', color: 'white', marginLeft: '1.5rem', fontStyle: 'italic', opacity: '0.7',
              }}
              >
                at the end of the movie projection, with the presence of Pascal Boyart.
              </text>
            </div>
          )}
        />

      </div>
    </div>
    <div style={{
      marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1,
    }}
    >
      <text style={{
        fontSize: '1rem', color: 'white', fontWeight: '100', letterSpacing: '0.1rem',
      }}
      >
        For any questions or help, you also can write us here :
      </text>
      <a style={{
        fontSize: '1rem', color: '#DCBA00', fontWeight: '100', letterSpacing: '0.1rem', opacity: '0.7',
      }}
      >
        tusc@samourai.coop
      </a>
      <div style={{ marginTop: '3rem' }}>
        <img src={ipfsPins.samourai} width="120" alt="sam" />
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
    <Footer />

  </div>
)

export default Private
