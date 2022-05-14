import React from 'react'
import About from '../../component/about/About'
import Body from '../../component/body/Body'
import Card from '../../component/card/Card'
import Footer from '../../component/footer/Footer'
import Top from '../../component/top/Top'

const Home = () => {
  return (
    <div>
        <Top />
        <Body />
        <About />
        <Card />
        <Footer />
    </div>
  )
}

export default Home