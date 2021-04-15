import React from 'react'
import Head from 'next/head'
import ipfsPins from '../helpers/ipfs-pins'

const SamHead = () => (
  <Head>
    <title>The Underground Sistine Chapel</title>
    <link rel="icon" href={ipfsPins.samourai} />
  </Head>
)

export default SamHead
