import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Searchbar from '../components/Searchbar/Searchbar'


// Home/landing/route page -> should be only static data 
// {data} is props from getStaticProps function
export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Danceability App</title>
        <meta name='keywords' content='React, Next.js, Spotify, api, php, music, playlists' />
        <meta name='description' content='Music website to browse artists, albums, songs and create playlists with danceability scores' />
        <meta name='author' content='Jojo Dance, James Doel' /> 
      </Head>
      <h1>Welcome!</h1>
      <h3>Search</h3>
      <Searchbar />
      <select>
        <option>Artists</option>
        <option>Albums</option>
        <option>Songs</option>
      </select>
    </>
  )
}

// fetch at build time (it is reused for each request to server) -> server-side rendering?
export const getStaticProps = async () => {
  const res = await fetch('url');
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}
