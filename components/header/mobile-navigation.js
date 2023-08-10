
import { useState } from "react"
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const router = useRouter()
  const currentPath = router.pathname
  let homepage = true

  let links = {
    about: '#about',
    products: '#products',
    contact: '#contact'
  }

  const checkPath = (path) => {
    if(currentPath == ("/" + path)) {
      return true
    } else {
      return false
    }
  }

  if(!checkPath('/')) {
    links.about = '/' + links.about
    links.products = '/' + links.products
    links.contact = '/' + links.contact
  } else {
    homepage = true
  }


  
  function toggleNav(){
    if(document.getElementById('mobileMenu').classList.contains('mobi-menu-active')) {
      document.getElementById('mobileMenu').classList.remove('mobi-menu-active')
    } else {
      document.getElementById('mobileMenu').classList.add('mobi-menu-active')
    }
  }

  return (
    <>
    <div className="block lg:hidden px-8 fixed top-0 w-full">
      <div id="mobileMenu" className="pb-8 px-8 shadow-2xl">
        <div className="mobi-open">
          <div className="flex justify-center pt-8">
            <div className="hamburger hamburger--collapse is-active" tabIndex="0" aria-label="Menu" role="button" aria-controls="navigation" onClick={ (e) => toggleNav() }>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-auto py-2">
            <a href="/" className="mx-auto block logo-center underline-hidden"><Image src="/images/livalta-logo.svg" alt="" height={100} width={300}></Image></a>
          </div>
          <div className="text-center pb-2">
            <a href={links.about} onClick={ (e) => toggleNav() } className="uppercase text-tiny ondo-medium block my-4">About</a>
            <a href={links.products} onClick={ (e) => toggleNav() } className="uppercase text-tiny ondo-medium block my-4">Products</a>
            <a href="/newsroom" onClick={ (e) => toggleNav() } className={`uppercase text-tiny ondo-medium block my-4 ${checkPath('newsroom') ? 'active' : null}`}>Newsroom</a>
            <a href={links.contact} onClick={ (e) => toggleNav() } className="uppercase text-tiny ondo-medium block my-4">Contact</a>
          </div>
          <div className="text-center my-2">
            <p className="display text-md text-red uppercase tracking-wider">transforming ingredients</p>
            <p className="display text-md text-white">Helping farmers, feed manufacturers and nutritionists responsibly meet animal needs.</p>
          </div>
          <div className="my-8">
            <div className="w-full h-1 my-6 bg-gradient-primary"></div>
            <div className="w-full h-1 my-6 bg-gradient-secondary"></div>
            <div className="w-full h-1 my-6 bg-gradient-alt"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
