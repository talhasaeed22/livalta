import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;
  let homepage = true;

  let links = {
    about: "#about",
    products: "#products",
    contact: "#contact",
  };

  const checkPath = (path) => {
    if (currentPath == "/" + path) {
      return true;
    } else {
      return false;
    }
  };

  if (!checkPath("/")) {
    links.about = "/" + links.about;
    links.products = "/" + links.products;
    links.contact = "/" + links.contact;
  } else {
    homepage = true;
  }

  function toggleNav() {
    if (
      document
        .getElementById("mobileMenu")
        .classList.contains("mobi-menu-active")
    ) {
      document
        .getElementById("mobileMenu")
        .classList.remove("mobi-menu-active");
    } else {
      document.getElementById("mobileMenu").classList.add("mobi-menu-active");
    }
  }

  return (
    <>
      <div className="w-100 relative">
        <div className="absolute" style={{ right: "5px", zIndex: "1" }}>
          <button id="enableRecite" className="video-btn orange absolute">
            Recite Me
          </button>
        </div>
      </div>
      <div id="navbar" data-aos="fade-down" className="w-full">
        <div className="hidden lg:grid grid-cols-5 text-center py-16 bg-gradient-td nav px-32">
          <div className="relative">
            <div className="vertical-center w-full text-center">
              <a href={links.about} className="uppercase text-tiny ondo-medium">
                About
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="vertical-center w-full text-center">
              <a
                href={links.products}
                className="uppercase text-tiny ondo-medium"
              >
                Products
              </a>
            </div>
          </div>
          <div className="">
            <a href="/" className="mx-auto block logo-center underline-hidden">
              <Image
                src="/images/livalta-logo.svg"
                alt=""
                height={35}
                width={200}
              ></Image>
            </a>
          </div>
          <div className="relative">
            <div className="vertical-center w-full text-center">
              <a
                href="/newsroom"
                className={`uppercase text-tiny ondo-medium ${
                  checkPath("newsroom") ? "active" : null
                }`}
              >
                Newsroom
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="vertical-center w-full text-center">
              <a
                href={links.contact}
                className="uppercase text-tiny ondo-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="block lg:hidden px-8">
          <div className="pb-8 px-8">
            <div className="flex justify-center pt-8">
              <div
                className="hamburger hamburger--collapse"
                tabIndex="0"
                aria-label="Menu"
                role="button"
                aria-controls="navigation"
                onClick={(e) => toggleNav()}
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
            <div className="w-1/2 mx-auto py-2 lg:py-8">
              <a
                href="/"
                className="mx-auto block logo-center underline-hidden"
              >
                <Image
                  src="/images/livalta-logo.svg"
                  alt=""
                  height={100}
                  width={300}
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
