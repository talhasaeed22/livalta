import React from "react";
import Head from "next/head";

import Navigation from "../components/header/navigation";
import Header from "../components/header/header";
import Footer from "../components/footer";
import ScrollBar from "../components/mouse-scroll";

import About from "../components/about";
import Products from "../components/products/products";
import AbAgriBanner from "../components/ab-agri-banner";
import GetInTouch from "../components/get-in-touch";

import { Player, BigPlayButton } from "video-react";

import MobileNavigation from "../components/header/mobile-navigation";

export default function Home() {
  const videoRef = React.createRef();
  const videoCallback = () => videoRef.current.seek(109);

  return (
    <div>
      <Head>
        <title>Livalta | Functional, Protein-Rich Feed Ingredients</title>
        <meta
          name="description"
          content="We’re here to improve global food production, both in the performance of feed ingredients and in finding more responsible ways to produce them."
        />
        <script src="/js/reciteme.js" />
      </Head>
      <div
        className="w-full bg-container z-10"
        style={{
          backgroundImage: "url(/images/background/livalta-gut-lining.jpg)",
        }}
      >
        <Navigation />
        <div className="w-full overflow-hidden z-1">
          <Header />
        </div>
        <div
          id="about"
          className="w-full bg-container z-1"
          style={{
            backgroundImage:
              "url(/images/background/dark-river-background.jpg)",
          }}
        >
          <div className="page-content pt-16">
            <About />
            <ScrollBar title="Introducing our responsible, high-performance ingredients" />
          </div>
        </div>
      </div>
      <div className="min-page w-full bg-container z-1 py-16 md:py-32 relative overflow-hidden px-4">
        <div className="video-bg">
          <img
            src="/images/background/blue-explosion-background-1.jpg"
            alt="bg-image"
          ></img>
        </div>
        <div className="w-full">
          <div data-aos="fade-down" className="w-full text-center pb-16">
            <h2 className="outline small b-100 text-3xl lg:text-4xl uppercase text-blur-heading">
              Our Mission
            </h2>
            <p className="text-red uppercase text-md lg:text-lg tracking-wider">
              A promise for the future of agrifood
            </p>
          </div>
        </div>
        <div className="video-react-wrapper">
          <Player
            ref={videoRef}
            onEnded={() => videoCallback()}
            poster="/videos/livalta-launch-video-poster-1.jpg"
          >
            <source src="/videos/livalta-transforming-ingredients-video-logo-1.mp4" />
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
      <div id="products" className="page-content pt-16 z-1">
        <div className="products w-full mb-20">
          <Products />
        </div>
      </div>
      <div
        className="min-page w-full bg-container z-1"
        style={{
          backgroundImage: "url(/images/background/expertise-bg-large.jpg)",
        }}
      >
        <AbAgriBanner />
      </div>
      <div
        id="contact"
        className="min-page w-full bg-container z-1"
        style={{
          backgroundImage:
            "url(/images/background/livalta-abstract-blue-footer-background-1.jpg)",
        }}
      >
        <GetInTouch />
        <Footer />
      </div>
      <MobileNavigation />
    </div>
  );
}
