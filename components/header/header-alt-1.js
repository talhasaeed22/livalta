import Image from 'next/image'

export default function HeaderAlt1(hero) {
  return (
    <>
    <div data-aos="fade-down" className="w-full relative alt-1 lg:mb-20 overflow-hidden" style={{'min-height': '250px'}}>
      <div className="vertical-center top-0 header-alt-1-video">
        {/* <Image src={hero.img.src} alt={hero.img.alt} width={800} height={250}></Image> */}
        <video className="skew" width="800px" loop={true} autoPlay="autoPlay" id="hero-vid" muted>
          <source src={'/videos/' + hero.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="vertical-center text-3xl lg:text-4xl lg:text-6xl w-full uppercase header-alt-title p-8 lg:p-0">
        <h1 className="outline small white text-left">{ hero.title }</h1>
      </div>
    </div>
    </>
  )
}
