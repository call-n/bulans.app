import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Signup from '../components/Signup'

export default function SignUpPage() {
  return (
    <>
      <Header />
      <Signup />
      <Footer />
    </>
  )
}