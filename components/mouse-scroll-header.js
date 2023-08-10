import Image from 'next/image'

export default function mouseScrollHeader( props ) {
  function scroll() {
    window.scrollBy({
      top: window.screen.height,
      left: 0,
      behavior : "smooth"
    });
  }
  return (
    <>
    <div className="w-full" onClick={() => scroll()}>
      <div className="flex justify-center">
        <Image src="/images/icons/scroll-down.svg" alt="" width={50} height={50} />
      </div>
      <p className="text-center text-lg italic px-4 md:px-0">{ props.title }</p>
    </div>
    </>
  )
}
