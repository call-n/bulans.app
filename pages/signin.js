import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Signin from '../components/Signin'

export default function SignInPage() {
  return (
    <>
      <Header />
      <Signin />
      <Footer />
    </>
  )
}