import React from 'react'

import MyFooter from './MyFooter'
import MyHeader from './MyHeader'

const Layout = ({children}) => {
  return (
    <>
    {/* Header */}
    <MyHeader/>
    
    {children}
    {/* Footer */}
    <MyFooter/>
    </>
  )
}

export default Layout