import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}
