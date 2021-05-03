import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'


// Home/landing page  
export default function Home() {
  return (
    <>
      <Navbar />
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
