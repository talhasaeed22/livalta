import Link from 'next/link'
import Image from 'next/image'

export default function getInTouch() {
  return (
    <>
    <div className="overflow-hidden px-4">
      <div className="hidden xl:block relative w-full z-0">
        <div className="z-0 absolute get-in-touch">
          <div data-aos="fade-left" className="clip">
            <img src="/images/background/get-in-touch.jpg" alt="" width={1100} height={620}></img>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="page-content mx-auto lg:py-20 z-50">
        <div className="z-50 w-full lg:py-12">
          <div className="w-full mb-12 mt-20 text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl outline small b-100 uppercase leading-none text-blur-heading">Get in<br className="block lg:hidden"/> Touch</h3>
            <p className="text-lg lg:ml-8 text-red uppercase tracking-wider">With Livalta</p>
          </div>
          <div  className="w-full block lg:flex text-lg">
            <div className="w-full lg:w-1/2 block text-md">
              {/* <a href="tel:01234567890" target="_blank" className="w-full flex">
                <div className="m-6">
                  <Image src="/images/icons/distribute.svg" alt="" width={50} height={50} />
                </div>
                <p className="mt-10 pt-1 pl-5">01234 567 890</p>
              </a> */}
              <a href="mailto:info@livalta.com" target="_blank" className="w-full flex">
                <div className="m-6">
                  <Image src="/images/icons/communicate.svg" alt="" width={50} height={50}  />
                </div>
                <p className="mt-10 lg:mt-6 pt-1 pl-5">info@livalta.com</p>
              </a>
              <a href="https://goo.gl/maps/VyStfdNiPYDgiRV87" target="_blank" className="w-full flex">
                <div className="m-6">
                  <Image src="/images/icons/source.svg" alt="" width={50} height={50}  />
                </div>
                <p className="mt-10 lg:mt-6 pt-1 pl-5"><span className="block lg:inline-block">AB Agri</span> <span className="text-blue-100 px-2 ondo-medium hidden lg:inline-block">\</span><span className="block lg:inline-block"> 64 Innovation Way</span><br className="hidden lg:inline-block"/>Lynchwood <span className="text-blue-100 px-2 ondo-medium hidden lg:inline-block">\</span> Peterborough <br className="block lg:inline-block" /> PE2 6FL <span className="text-blue-100 px-2 ondo-medium hidden lg:inline-block">\</span> <span className="block lg:inline-block">United Kingdom</span></p>
              </a>
              <a href="https://www.linkedin.com/company/74406356" target="_blank" className="w-full flex">
                <div className="m-6">
                  <Image src="/images/icons/linkedin.svg" alt="" width={50} height={50}  />
                </div>
                <p className="mt-10 lg:mt-6 pt-1 pl-5">Find us on Linkedin</p>
              </a>
            </div>
            {/* <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-8 lg:px-0">
              <img className="mx-auto lg:mx-0" src="/images/maps/ab-agri-peterborough.jpg" alt="map"></img>
              <div className="py-2">
                <h5 className="text-xl pb-2 pt-3 text-right lg:text-left">UK Headquarters</h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
