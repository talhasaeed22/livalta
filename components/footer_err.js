import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <>
    <div id="footer" data-aos="fade-up" className="bg-gradient-footer">
      <div className="page-content mx-auto pt-20 px-12 xl:px-0">
        <div className="w-full text-center border-t-4 border-dotted pt-4 pb-12 lg:py-12">
          <div className="w-full flex justify-center">
            <div className="w-6 h-8 alt-skew bg-blue-100"></div>
          </div>
          <p className="xl:w-2/3 py-8 mx-auto footer:text-tiny lg:text-md">Copyright &copy; 2020. LivaltaCell HY40, Protocell and AlphaSoy are registered trademarks of AB Agri Ltd. AB Agri, 64 Innovation Way, Lynchwood, Peterborough, PE2 6FL <a href="https://rootscreative.co.uk/?referer=livalta.co.uk">Website by <span className="underline">Roots Creative</span>.</a> </p>
        </div>
      </div>
    </div>
    </>
  )
}
