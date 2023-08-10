import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

import Navigation from '../../components/header/navigation'
import Header from '../../components/header/header-alt-2'
import BlogSidebar from '../../components/blog-sidebar'
import ContactBlock from '../../components/contact-block'
import Footer from '../../components/footer'

import MobileNavigation from '../../components/header/mobile-navigation'

export default function Post({ post, allPosts }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const recentPosts = allPosts
  return (<div>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          
          <>
            <Head>
              <title>
                {post.title} | Livalta Newsroom
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <div className="w-full bg-container" style={{'backgroundImage': 'url(/images/background/dark-river-background.jpg)'}}>
              <Navigation />
              <Header props={JSON.stringify(post)} />
            </div>
            <article className="page-content block md:flex md:py-16 px-8 md:px-0">
              <div data-aos="fade-down" className="w-full md:w-2/3 md:p-8 py-8 text-lg">
                <div className="w-full markdown" dangerouslySetInnerHTML={{__html: post.content}}></div>
                <ContactBlock blurb="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem!" />
              </div>
              <BlogSidebar blogs={{'post' : post, "recentPosts" : recentPosts}} />
            </article>
            <Footer />
            <MobileNavigation />
          </>
        )}
      </div>
  )
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'thumbnail'
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      allPosts
    },
  }
}