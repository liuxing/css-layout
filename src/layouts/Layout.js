import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './Layout.scss'

const Layout = (props) => (
  <div>
    <Header />
    <main>
      <div className="container">
      {props.children}
      </div>
    </main>
    <Footer />
  </div>
)

export default Layout