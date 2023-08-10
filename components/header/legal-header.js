import Image from 'next/image'
import DateFormatter from '../date-formatter'

export default function HeaderAlt2({ props }) {

  const prop = JSON.parse(props)
  return (
    <>
    <div className="w-full block md:flex md:pt-8 pb-16 px-8 md:px-0 relative justify-center overflow-x-hidden">

      <div data-aos="fade-left" className="hidden md:block" style={{'paddingLeft': '50vw'}}>
        <Image className="skew" src="/images/legal-header.jpg" alt="" width={800} height={200}></Image>
      </div>
      <div className="md:vertical-center w-full md:w-1/2 header-alt-title px-4">
        <div className="page-content">
          <div className="w-full">
            <div className="w-full px-4 md:pr-0 md:pl-8 border-l-2 border-grey-200">
              <h1 className="text-2xl md:text-3xl leading-10 outline tiny white uppercase leading-none">{ prop.title }</h1>
            </div>
            <div className="w-full flex text-tiny px-4 md:pr-0 mt-4">
              <div className="w-1/2 text-white uppercase ondo-medium tracking-wider">
                Last amended { prop.date }
              </div>
            </div>
          </div>
          <div className="block md:hidden w-full mt-8">
            <div data-aos="fade-left" className="" style={{'paddingLeft': '5vw'}}>
              <Image className="skew" src="/images/legal-header.jpg" alt="" width={800} height={200}></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
