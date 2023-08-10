import Link from 'next/link'

export default function ContactBlock() {
  return (
    <>
    <div  data-aos="fade-up" className="w-full contact-block">
      <div className="w-full bg-blue-100 p-8 pb-12">
        <p>Please contact us to find out how Livalta can help you responsibly meet your animals needs</p>
      </div>
      <div className="w-full flex justify-end uppercase">
        <Link href="/#contact"><a className="alt-skew bg-white text-blue-300 py-3 px-8 inline-block ondo-medium -mt-6 text-lg mr-16 uppercase">Contact</a></Link>
      </div>
    </div>
    </>
  )
}
