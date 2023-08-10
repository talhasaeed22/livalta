import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { getAllPosts } from '../../lib/api'


import Navigation from '../../components/header/navigation'
import Header from '../../components/header/header-alt-1'
import DateFormatter from '../../components/date-formatter'
import Footer from '../../components/footer'

import MobileNavigation from '../../components/header/mobile-navigation'

export default function Index({ allPosts }) {
  const morePosts = allPosts
  return (
    <>
    <Head>
      <title>News | Agricultural Food Production | Livalta</title> 
      <meta name="description" content="Read of our articles outlining our work using the latest scientific and technological innovations to responsibly produce protein-rich feed ingredients." />
    </Head>
    <div className="min-page">
      <div id="navigation" className="w-full">
        <Navigation />
      </div>
      <div id="header-video" className="w-full pb-8 lg:pb-0">
        <Header title="Newsroom" video="livalta-newsroom-header.mp4"/>
      </div>
      <div className="" style={{ 'backgroundImage': 'url(/images/background/dark-river-background.jpg)' }}>
        <main>
          <div className="p-8">
            <div className="grid grid-cols-1 archive-page-bg">
              {morePosts.map((post) => (
                <a href={'newsroom/' + post.slug}>
                  <article data-aos="fade-down" className="w-full pt-8 px-8 block lg:flex blog-item cursor-pointer">
                    <div className="w-full lg:w-4/12 lg:m-8 relative">
                      <div className="w-full pb-4 pl-4 lg:pb-8 lg:pl-8">
                        <Image src={post.thumbnail} alt="" width={380} height={280}></Image>
                      </div>
                      <div className="absolute top-0 left-0 w-full pt-4 pr-4 lg:pt-8 lg:pr-8">
                        <div className="border-2 border-grey-100 opacity-25">
                          <div className="opacity-0">
                            <Image src={post.thumbnail} alt="" width={380} height={280}></Image>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:block w-full lg:w-1/12 relative">
                      <p className="absolute transform -rotate-90 text-lg whitespace-no-wrap mb-16 -ml-16" style={{'bottom': '5rem'}}><DateFormatter className="rotate rotate-90" dateString={post.date} /></p>
                    </div>
                    <div className="w-full lg:w-7/12 text-md">
                      <h2 className="text-xl lg:text-25xl uppercase leading-none outline tiny b-100 mt-12 text-blur-sub-heading">{post.title}</h2>
                      <div className="flex w-full py-6 lg:px-4 ">
                        <p className="text-md lg:text-lg text-red uppercase tracking-wider w-full">{post.author.name}</p>
                        <p className="block lg:hidden text-md lg:text-lg text-white text-right w-full"><DateFormatter className="rotate rotate-90" dateString={post.date} /></p>
                      </div>
                      <div className="alt-skew bg-white py-3 px-6 inline-block float-right lg:float-none lg:ml-2 mb-8 lg:mb-0">
                        <a className="unskew text-lg uppercase text-blue-300 ondo-medium">Read More</a>
                      </div>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <MobileNavigation />
    </div>
  </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'thumbnail'
  ])

  return {
    props: { allPosts },
  }
}
