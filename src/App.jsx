import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import './index.css'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
      <Title subTitle={'Our PROGRAM'} title={'What We Offer'}  />
      <Programs />
      <About setPlayState={setPlayState} />
      <Title subTitle={'Gallery'} title={'Campus Photos'} />
      <Campus />
      <Title subTitle={'TESTIMONIAL'} title={'What Student Says'} />
      <Testimonial />
      <Title subTitle={'Contact Us'} title={'Get in Touch'} />
      <Contact />
      <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App
