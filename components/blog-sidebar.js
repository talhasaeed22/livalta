import Link from 'next/link'
import DateFormatter from '../components/date-formatter'
export default function BlogSidebar(props) {
  return (
    <>
    <div  data-aos="fade-right" className="w-full lg:w-1/3 bg-blue-400 p-8">
      <div className="hidden lg:block">
        <h5 className="text-2xl outline small b-100 uppercase pb-8 text-blur-sub-heading">Latest news</h5>
        <div className="p-8 pb-16 text-center text-lg" style={{'backgroundImage': 'url(/images/background/livalta-abstract-blue-footer-background-1.jpg)'}}>
          <p>Livalta develops new, responsible proteins for feed and food using the latest science and technology.!</p>
        </div>
        <div className="w-full flex justify-center">
          <Link href="/"><a className="alt-skew bg-red py-3 px-6 inline-block ondo-medium -mt-6 text-lg uppercase">Read More </a></Link>
        </div>
      </div>
      <div className="hidden lg:block w-full my-8 h-1 bg-blue-gradient"></div>
      <div className="hidden lg:block text-lg">
        <h5 className="text-2xl outline small b-100 uppercase pb-8 text-blur-sub-heading">Contact</h5>
        {/* <a href="" className="block py-4">01234 567 789</a> */}
        <a href="mailto=info@livalta.com" target="_blank" className="block py-4">info@livalta.com</a>
        <a href="https://goo.gl/maps/VyStfdNiPYDgiRV87" target="_blank" className="block py-4">AB Agri <span className="text-blue-100 px-2 ondo-medium">\</span> 64 Innovation Way<br />Lynchwood <span className="text-blue-100 px-2 ondo-medium">\</span> Peterborough <br /> PE2 6FL <span className="text-blue-100 px-2 ondo-medium">\</span> United Kingdom</a>
      </div>
      <div className="w-full my-8 h-1 bg-blue-gradient"></div>
      {/* <div className="">
        <h5 className="text-2xl outline small b-100 uppercase pb-8 text-blur-sub-heading">Recent articles</h5>
        <div className="block">
          <article>
            <Link href={"/newsroom/" + props.blogs.recentPosts[0].slug}>
              <a>
                <p>{ props.blogs.recentPosts[0].excerpt }</p>
                <p className="text-red"><DateFormatter className="text-red" dateString={props.blogs.recentPosts[0].date} /></p>
              </a>
            </Link>
          </article>
          <article className="mt-4">
            <Link href={"/newsroom/" + props.blogs.recentPosts[1].slug}>
              <a>
                <p>{ props.blogs.recentPosts[1].excerpt }</p>
                <p className="text-red"><DateFormatter className="text-red" dateString={props.blogs.recentPosts[2].date} /></p>
              </a>
            </Link>
          </article>
          <article className="mt-4">
            <Link href={"/newsroom/" + props.blogs.recentPosts[2].slug}>
              <a>
                <p>{ props.blogs.recentPosts[2].excerpt }</p>
                <p className="text-red"><DateFormatter dateString={props.blogs.recentPosts[2].date} /></p>
              </a>
            </Link>
          </article>
        </div>
      </div> */}
      <div className="w-full my-8 h-1 bg-blue-gradient"></div>
      <div className="">
        <h5 className="text-2xl outline small b-100 uppercase pb-8 text-blur-sub-heading">Share</h5>
        <div className="flex">
          <a href={"https://www.facebook.com/sharer/sharer.php?u=livalta.com/newsroom/" + props.blogs.post.slug} target="_blank" title="Share on Facebook" className="mr-1 xl:mr-2">
            <img src="/images/icons/icon_facebook.svg" alt="Find us on Facebook" className="w-16" />
          </a>
          <a href={"https://twitter.com/intent/tweet?text=https://livalta.com/newsroom/" + props.blogs.post.slug} target="_blank" title="Tweet this blog out!" className="mx-1 xl:mx-2">
            <img src="/images/icons/icon_twitter.svg" alt="Tweet about this blog" className="w-16" />
          </a>
          <a href={"https://www.linkedin.com/sharing/share-offsite/?url=https://livalta.com/newsroom/" + props.blogs.post.slug} target="_blank" title="Share via Linkedin" className="mx-1 xl:mx-2">
            <img src="/images/icons/icon_linkedin.svg" alt="Share on Linkedin" className="w-16" />
          </a>
          <a href={encodeURI("mailto:...?subject=" + encodeURI(props.blogs.post.title) + "&body=Hi,I was reading this blog and thought you might like it! " + "https://livalta.com/newsroom/" + props.blogs.post.slug)} target="_blank" title="Share this post via Email" className="mx-1 xl:mx-2">
            <img src="/images/icons/icon_email.svg" alt="Share Via Email" className="w-16" />
          </a>
        </div>
      </div>
    </div>
    </>
  )
}