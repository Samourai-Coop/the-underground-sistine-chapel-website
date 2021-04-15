import React from 'react'
import styles from '../../styles/About.module.css'
import Header from '../Header'
import { Section, Footer, SeparateBar } from '../index'
import SamHead from '../SamHead'
import ipfsPins from '../../helpers/ipfs-pins'

const About = () => (
  <div>
    <div className={styles.container}>
      <SamHead />

      <Header />
      <div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '6rem',
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
            ABOUT THE MOVIE
          </text>
          <text style={{
            color: '#FFDA00', fontSize: '0.7rem',
          }}
          >
            Produced by Samouraï Coop
          </text>
        </div>
      </div>
      <div style={{
        display: 'flex', flexDirection: 'column', flex: 1, marginTop: '4rem', alignItems: 'center',
      }}
      >
        <div>
          <p className={styles.desc}>
            <div>
              <text>The</text>
              <text style={{ fontWeight: '900' }}>{' Underground Sistine Chapel'}</text>
              <text>{' is a documentary film that follows the'}</text>
            </div>
            <text>construction of a modern Sistine Chapel, in the heart of a former gold foundry in an </text>
            <text>impoverished corner of the suburbs of Paris.</text>
          </p>
        </div>

      </div>
      <div>
        <div style={{
          marginTop: '2rem', display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, padding: '2rem 1rem',
        }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <div>
              <p className={styles.trailer}>
                <div>
                  <text>This is a documentary about a place that exists</text>
                  <text style={{ fontWeight: '900' }}>{' out of time'}</text>
                  <text>, out of sight, drawing together</text>
                </div>
                <text>people whose stories are as varied as they are fiercely noncomformist.</text>
              </p>
              <p className={styles.trailer}>
                <div>
                  <text style={{ fontWeight: '900' }}>This former gold foundry on the outskirts of Paris</text>
                  <text>{' is living its thousandth life, by dint of its'}</text>
                </div>
                <text>uncompromising acceptance of those who’ve made it their home, studio, workshop – or</text>
                <text>sometimes a rap video set, thanks to its dense “street” vibe.</text>
              </p>
              <p className={styles.trailer}>
                <div>
                  <text>{'The massive scale of the project '}</text>
                  <text style={{ fontWeight: '900' }}>this film documents doesn’t surprise anyone at the</text>
                </div>
                <div>
                  <text style={{ fontWeight: '900' }}>foundry</text>
                  <text>{' – nor does much else. The day after a knife fight, the wounded party shrugs off the'}</text>
                </div>
                <text>injury and carries on with his daily routine.</text>
              </p>
              <p className={styles.trailer}>
                <text>The inhabitants actively defend their community’s autonomy, though they leave its doors open</text>
                <text>for passing friends, clients, or the occasional influencer who shows up for a shoot.</text>
              </p>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src={ipfsPins.twingo} alt="twingo" width="90%" />
          </div>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1, padding: '0rem 1rem',
        }}
        >
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src={ipfsPins.fresque} alt="fresque" width="90%" />
          </div>
          <div style={{
            flex: 1, display: 'flex', justifyContent: 'center',
          }}
          >
            <div>
              <p className={styles.trailer}>
                <text>In the evening, only full time residents – a dozen or so – occupy the foundry’s thousands of</text>
                <text>meters of industrial floorspace. In the midst of the worldwide pandemic, this space is used to</text>
                <text>being isolated from the world, to operating as a closed circuit.</text>
              </p>
              <p className={styles.trailer}>
                <div>
                  <text>{'Over the course of several months, they’ll gather every day to watch '}</text>
                  <text style={{ fontWeight: '900' }}>the artist Pascal Boyart,</text>
                </div>
                <div>
                  <text>{'known as Pboy, create a masterpiece in the heart of their home: '}</text>
                  <text style={{ fontWeight: '900' }}>a modern, nearly full-scale</text>
                </div>
                <div>
                  <text style={{ fontWeight: '900' }}>Sistine Chapel.</text>
                </div>
              </p>
              <p className={styles.trailer}>
                <text>The deeply personal connections between each resident to the artwork invites critique of the</text>
                <text>relatively inhibited relationship that society typically has with art. Thus, around the core of its</text>
                <text>story of place, the film recounts the birth of a masterful artwork (fated, likely, to eventual</text>
                <div>
                  <text>{'demolition), as well as the intimacy between it and the people it shelters, people who live '}</text>
                  <text style={{ fontWeight: '900' }}>far</text>
                </div>
                <div>
                  <text style={{ fontWeight: '900' }}>outside the formal structures of the world of contemporary art.</text>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.desc} style={{ marginTop: '4rem' }}>
        <text style={{ fontWeight: '900' }}>
          An improbable story of an artist recreating the splendor of
        </text>
        <text style={{ fontWeight: '900' }}>
          the Sistine Chapel in the last place imaginable.
        </text>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: '4rem 4rem',
        justifyContent: 'space-between',
      }}
      >
        <div style={{
          flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <img src={ipfsPins.pboy} alt="pboy-portrait" height="95%" />
        </div>
        <div style={{
          flex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <div style={{
            alignItems: 'center', display: 'flex', flexDirection: 'column', paddingRight: '10rem',
          }}
          >
            <text style={{
              fontWeight: 900,
              color: 'white',
              fontSize: '1.1rem',
              fontFamily: 'Avenir Heavy',
            }}
            >
              THE ARTIST
            </text>
            <text style={{
              color: '#FFDA00', fontSize: '0.75rem',
            }}
            >
              Pascal Boyart
            </text>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <p className={styles.artist}>
              <text>Pascal Boyart is an artist based in Paris.</text>
              <text>Passionate about drawing since his yough, Pascal Boyart grew up in Paris near La</text>
              <text>Chapelle, the birthplace of European graffiti.</text>
            </p>
            <p className={styles.artist}>
              <text>So it’s natural, as a graffiti artist, that he began his journey by making a name in the</text>
              <text>midst of urban art. His figurative style and technical virtuosity quickly gained him the</text>
              <text>respect of his peers. Thus, for nearly fifteen years, he covered the walls of the capital</text>
              <text>with his ultra-realistic frescoes.</text>
            </p>
            <p className={styles.artist}>
              <text>From this urban background, Pascal Boyart retains an obvious fascination for monumental</text>
              <text>portraits. Today, he concentrates on the representation of the gaze and the exploration</text>
              <text>of his expressive potential. He pays tribute to the infinite complexity of the human face's</text>
              <text>relation to the soul, the latter being both the most essential but also the most hidden</text>
              <text>part of each individual.</text>
            </p>
            <p className={styles.artist}>
              <text>In the same way as his creative approach, which is as much an inheritance of urban</text>
              <text>culture as classical sensibility, his approach to painting combines new technologies with</text>
              <text>traditional painting techniques.</text>
            </p>
            <p className={styles.artist}>
              <text>He is notably the first mural painter to affix a Bitcoin QR code to his paintings for</text>
              <text>donations. He is also the first to have transformed his murals into digital collectibles,</text>
              <text>called "NFT".</text>
            </p>
            <p className={styles.artist}>
              <text>
                Official Website :
                <a href="https://www.pboy-art.com" target="Pboy">{' www.pboy-art.com'}</a>
              </text>
            </p>
          </div>
        </div>
      </div>
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <div style={{
          alignItems: 'center', display: 'flex', flexDirection: 'column',
        }}
        >
          <text style={{
            fontWeight: 900,
            color: 'white',
            fontSize: '1.1rem',
            fontFamily: 'Avenir Heavy',
          }}
          >
            DIRECTORS
          </text>
          <text style={{
            color: '#FFDA00', fontSize: '0.75rem',
          }}
          >
            Antoine Breuil & Yohann Grignou
          </text>
        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', margin: '1rem 3rem',
        }}
        >
          <p className={styles.artist}>
            <text>« As filmmakers, we wanted to document the work of an international artist whose approach goes against the grain of contemporary art.</text>
          </p>
          <p className={styles.artist}>
            <text>To tell the story of this major work by Pascal Boyart, it seemed obvious to us that we had to build a different experience, a different film, outside the frame. We have a deep respect for </text>
            <text>his artist vision, and wanted to create a film that fit with it.</text>
          </p>
          <p className={styles.artist}>
            <text>We wanted to have total freedom both in our creative process and in the distribution of this film. We are young french directors, dreaming of cinema since our young ages, and we</text>
            <text>wanted to radically free ourselves from the traditional circuit of funding and distribution of cinema in France and in the world. Explore something new, and jump into a big challenge</text>
            <text>with our own tools, just like Pascal was doing with this amazing challenge.</text>
          </p>
          <p className={styles.artist}>
            <text>Why NFTs ? The decentralized Internet represents for us as well as for Pascal, a future track in our freedom to make films, and this film represents for us an opportunity to demonstrate</text>
            <text>the strength of the uses. We now know that our next films will be funded and created with a decentralized vision of its productions, and it’s exciting to be part of this revolution</text>
          </p>
          <p className={styles.artist}>
            <text>Now, whatever tools we used, the only thing is important for us, is that movie, and we hope people will enjoy it as much as we were skin in the game, with all our love and energy in. »</text>
          </p>
          <div style={{
            justifyContent: 'flex-end', display: 'flex', flex: 1, color: 'white', fontStyle: 'italic', fontSize: '0.7rem', padding: '1rem 2rem',
          }}
          >
            <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'flex-end' }}>
              <text>
                Antoine Breuil & Yohann Grignou
              </text>
              <text>
                Directors
              </text>
            </div>

          </div>
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center',
      }}
      >
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '2rem',
        }}
        >
          <img src={ipfsPins.yohann} alt="yohann-portrait" />
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '1rem',
          }}
          >
            <text style={{ color: 'white', fontSize: '0.7rem', fontWeight: '900' }}>Yohann Grignou</text>
            <text style={{ color: 'white', fontSize: '0.7rem', fontWeight: '900' }}>Director & Editor</text>
          </div>

        </div>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: '2rem',
        }}
        >
          <img src={ipfsPins.zooma} alt="zooma-portrait" />
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '1rem',
          }}
          >
            <text style={{ color: 'white', fontSize: '0.7rem', fontWeight: '900' }}>Antoine Breuil</text>
            <text style={{ color: 'white', fontSize: '0.7rem', fontWeight: '900' }}>Director & Author</text>
          </div>
        </div>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '3rem',
      }}
      >
        <img src={ipfsPins.samourai} height="45" alt="sam" />
        <text style={{
          fontWeight: '900', fontSize: '0.9rem', marginTop: '0.5rem', color: 'white',
        }}
        >
          SAMOURAÏ COOP
        </text>
        <text className={styles.details}>decentralize production</text>
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '4rem',
      }}
      >
        <img src={ipfsPins.ticket} width="200" alt="ticket" />
      </div>
      <div style={{
        display: 'flex', flex: 1, zIndex: 10, flexDirection: 'row', alignItems: 'center',
      }}
      >

        <Section
          title="NFTs PRE-SALE"
          eta="Monday, May 31, 2021"
          platform="Available exclusively on Minty-Art"
          description="3 phases of rare pre-sales"
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
              display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '1rem', justifyContent: 'space-between',
            }}
            >
              <img src={ipfsPins.ipfs} height="60" alt="ipfs" style={{ marginRight: '1rem' }} />
              <img src={ipfsPins.youtube} height="60" alt="youtube" style={{ marginLeft: '1rem' }} />
            </div>
          )}
        />
        <SeparateBar />

        <div style={{ display: 'flex', flex: 1 }}>
          <div style={{
            flexDirection: 'column', display: 'flex', flex: 1, paddingTop: '2rem', alignItems: 'center',
          }}
          >
            <div className={styles.section}>
              <text className={styles.title}>PRIVATE AVANT-PREMIÈRE</text>
              <text className={styles.eta}>Friday, June 18, 2021</text>
              <text className={styles.platform}>Decentralized Private Screening Session</text>
              <text className={styles.description}>Limited to 50 NFTs holders</text>
            </div>
            <div className={styles.section} style={{ marginTop: '2rem' }}>
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
    <img src={ipfsPins.aboutBackground} alt="about-background" width="100%" />
  </div>
)

export default About
