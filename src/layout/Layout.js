import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div className='w-full flex flex-col '>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout