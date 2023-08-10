import Image from 'next/image'

export default function AbAgriBanner() {
  return (
    <>
    <div data-aos="fade-right" className="page-content w-full flex py-12 px-8">
      <div className="hidden md:block w-2/12 pt-8">
        <Image src="/images/ab-agri-logo.svg" alt="Ab Agri" width={200} height={100}></Image>
      </div>
      <div className="w-full md:w-10/12 block px-8">
        <div className="w-full md:w-1/2 border-t-2 border-yellow border-solid"></div>
        <div className="w-full text-center md:text-left">
          <h2 className="text-4xl md:text-6xl uppercase md:leading-none strangelove pt-8 pb-4 md:pb-0">Part of the ab agri Family</h2>
          <p className="text-lg pb-6 -mt-8">A global agri-food business employing over 3,000 people in the UK and overseas.</p>
        </div>

        <div className="w-full md:w-1/2 border-t-2 border-green border-solid"></div>
      </div>
    </div>
    </>
  )
}
