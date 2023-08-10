import Head from 'next/head'
import Navigation from '../components/header/navigation'
import Header from '../components/header/legal-header'
import ContactBlock from '../components/contact-block'
import Footer from '../components/footer'
import LegalSidebarContact from '../components/legal-sidebar-contact'
import MobileNavigation from '../components/header/mobile-navigation'

export default function Post() {

  return (
          <div>
            <Head>
              <title>
                Terms & Conditions | Livalta Newsroom
              </title>
            </Head>
            <div className="w-full bg-container" style={{'backgroundImage': 'url(/images/background/dark-river-background.jpg)'}}>
              <Navigation />
              <Header props={JSON.stringify({'title': 'Terms & Conditions', 'date': '15th August 2020'})} />
            </div>
            <article className="page-content block md:flex md:py-16 px-8 md:px-0">
              <div data-aos="fade-down" className="w-full md:w-2/3 md:p-8 py-8 text-lg">
                <div className="w-full markdown">

                </div>
                <ContactBlock blurb="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem!" />
              </div>
              <div  data-aos="fade-right" className="w-full lg:w-1/3 p-4">
                <div className="hidden lg:block">
                  <h5 className="text-2xl outline small b-100 uppercase pb-8">Navigation</h5>
                </div>
                <div className="hidden lg:block w-full my-8 h-1 bg-blue-gradient"></div>
                <LegalSidebarContact />
              </div>
            </article>
            <Footer />
            <MobileNavigation />
          </div>
        )
}