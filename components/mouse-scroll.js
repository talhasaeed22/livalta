import Image from 'next/image'

export default function mouseScroll( props ) {
  function scroll() {
    window.scrollBy({
      top: window.screen.height,
      left: 0,
      behavior : "smooth"
    });
  }
  return (
    <>
    <div className="w-full py-16 cursor-pointer" onClick={() => scroll()}>
      <div className="flex justify-center mb-8">
        <Image src="/images/icons/scroll-down.svg" alt="" width={50} height={50} />
      </div>
      <p className="text-center text-lg italic px-8">{ props.title }</p>
    </div>
    </>
  )
}
