import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer_err'

import Navigation from  '../components/header/navigation'

function Error({ statusCode }) {
  (function() {

    setHeroHeight()


    window.addEventListener('resize', setHeroHeight);
    function setHeroHeight () {
      let navbar = document.getElementById('navbar')
      let hero = document.getElementById('hero')
      let screenHeight = window.screen.height; 
      let heroHeight =  screenHeight - navbar.scrollHeight - '40px'
      let top = 'calc(' + (heroHeight/2) + 'px - 8vw)'
      if(heroHeight < 200) {
        top = ''
        hero.style.height = '18vw'
      } else {
        hero.style.height = (heroHeight - 40) + 'px'
      }
      hero.style.top = top
    }
  })
  return (
    <div className="error_page">
      <Head>
        <title>{ statusCode } | Livalta</title>
      </Head>

      <Navigation></Navigation>
      
      <div id="hero" data-aos="zoom-in" className="w-full relative overflow-y-hidden overflow-x-visible flex justify-center lg:justify-end hero-bg">
        <div className="block w-full md:w-4/5 clip" id="videoContainer">
          <video className="h-full w-full video-width" loop={true} autoPlay="autoPlay" muted>
            <source src="/videos/livalta-website-header-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="block center-hero w-full page-content justify-center pl-8" id="hero-ani">
          <h1 className="text-7xl md:text-8xl outline thick white leading-none">{ statusCode }</h1>
          <p className="">Sorry, that page cannot be found! Let us take<br /> you back to the safety of the homepage.</p>
          <Link href="/"><a className="alt-skew bg-blue-100 text-white py-3 px-8 inline-block ondo-medium text-lg mr-16 uppercase mt-8 md:mt-16"><span className="unskew">Return</span></a></Link>
        </div>
      </div>
      <div className="bottom-scroll">
        <Footer />
      </div>
  </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error