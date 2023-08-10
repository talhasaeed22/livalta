import Head from 'next/head'
import { Player, BigPlayButton } from 'video-react';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Protocell Video | Livalta |  Functional, Protein-Rich Feed Ingredients</title>
        <meta name="description" content="We’re here to improve global food production, both in the performance of feed ingredients and in finding more responsible ways to produce them." />
      </Head>
      <div className="min-page w-full bg-container z-1 py-16 md:py-32 relative overflow-hidden px-4" >
        <div className="video-bg">
          <img src="/images/background/blue-explosion-background-1.jpg" alt="bg-image"></img>
        </div>
        <div className="w-full">
          <div className="w-full text-center pb-16">
            <h2 className="outline small b-100 text-3xl lg:text-4xl uppercase text-blur-heading">Protocell</h2>
            {/* <p className="text-red uppercase text-md lg:text-lg tracking-wider">A promise for the future of agriculture</p> */}
          </div>
        </div>
        <div className="video-react-wrapper"> 
          <Player poster="/videos/protocell-video-poster.jpg">
            <source src="/videos/protocell-video.mp4" />
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </div>
  )
}
