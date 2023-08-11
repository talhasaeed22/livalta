import Image from 'next/image'

export default function LivaltaSunP46() {
  return (
    <>
      <div className="w-full lg:w-4/6 lg:mr-8 lg:px-0">
        <div className="w-full bg-yellow p-5 block lg:flex">
          <div className="w-1/2 lg:w-32 mx-auto lg:mx-0 pt-2 lg:pt-0">
            <img src="/images/p46logo.svg" alt="p46" unsized="true" />
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full">
              <div className="w-full text-center lg:text-right mt-8 lg:mt-0">
                <p className="display italic">For:</p>
              </div>
              <div className="w-full flex justify-center lg:justify-end icon-row pb-4 product-center-hy40">
                <div className="relative">
                  <div className="icon-bg-square orange"></div>
                  <div className="absolute top-0" style={{ 'left': '2rem' }}><Image
                    src="/images/products/cat.svg"
                    alt="cat"
                    width={75}
                    height={75}
                  /></div>
                </div>
                <div className="relative">
                  <div className="icon-bg-square orange"></div>
                  <div className="absolute top-0" style={{ 'left': '2rem' }}><Image
                    src="/images/products/dog.svg"
                    alt="dog"
                    width={75}
                    height={75}
                  /></div>
                </div>
                {/* <div className="relative">
                  <div className="icon-bg-square orange"></div>
                  <div className="absolute top-0" style={{ 'left': '2.5rem' }}><Image src="/images/icons/poultry.svg" alt="Poultry" width={65} height={65} /></div>
                </div>
                <div className="relative">
                  <div className="icon-bg-square orange"></div>
                  <div className="absolute top-0" style={{ 'left': '2rem' }}><Image src="/images/icons/livalta-bovine-cow-icon-wo_2.svg" alt="Cow" width={75} height={75} /></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white block lg:flex px-4 lg:px-6 py-4">
          <div className="w-full pt-4 lg:pt-8 px-4 lg:px-8 text-lg text-left text-blue-300 pb-8 lg:pb-32">
            <p className="py-2">Livalta™Sun P46 is a natural, circular and responsibly produced sunflower protein concentrate for pets with high nutritional value, good palatability and functionality. </p>
            <ul className="py-4">
              <li className="flex my-4">Emulsifying properties with superior emulsion stability</li>
              <li className="flex my-4">Excellent water and oil holding capacity</li>
              <li className="flex my-4">Natural source of Omega-6 fatty acids for skin and coat support</li>
            </ul>
            <p className="py-2">Sourced from the EU, non-GM and responsibly produced without the use of water or chemicals. Suitable for all applications and diets including meat-based, vegetarian, vegan, grain-free and hypoallergenic. Clean label friendly. </p>
            <p className="py-4">Livalta™Sun P46: Nutrition, palatability, functionality.</p>
            {/* <a target="_blank" href="/videos/hy40" className="video-btn orange">Watch the video</a> */}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-11/12 block lg:flex relative">
            <div className="hidden lg:block absolute left-0" style={{ 'top': '-6rem' }}>
              <img src="/images/icons/dot.png" alt="dot" unsized="true"></img>
            </div>
            <div className="mt-20 lg:my-20 mx-4 lg:mx-8 lg:ml-20">
              <h5 className="outline tiny white text-xl md:text-25xl leading-10 uppercase text-center">NUTRITION AND TECHNOLOGICAL PROPERTIES</h5>
              <p className="text-lg text-center text-blue-100 uppercase tracking-wider my-8">FOR PETS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
[]