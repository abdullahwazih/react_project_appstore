import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Root = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col w-full'>

        <NavBar />

        <main className="flex-grow w-full">

          <Outlet />
        </main>
          <Footer />

      </div>

    </>
  )
}

export default Root