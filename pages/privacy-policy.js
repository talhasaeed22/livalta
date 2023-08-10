import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/header/navigation";
import Header from "../components/header/legal-header";
import ContactBlock from "../components/contact-block";
import Footer from "../components/footer";
import LegalSidebarContact from "../components/legal-sidebar-contact";
import MobileNavigation from "../components/header/mobile-navigation";

export default function Post() {
  return (
    <div>
      <Head>
        <title>Privacy Policy | Livalta Newsroom</title>
      </Head>
      <div className="w-full bg-container" style={{ backgroundImage: "url(/images/background/dark-river-background.jpg)" }}>
        <Navigation />
        <Header props={JSON.stringify({ title: "Privacy Policy", date: "20th October 2021" })} />
      </div>
      <article className="page-content block md:flex md:py-16 px-8 md:px-0">
        <div className="w-full md:w-2/3 md:p-8 py-8 text-lg">
          <div className="w-full markdown" id="legal-page">
            <h2 id="who-are-we">Who are we?</h2>
            <p>
              This website livalta.com (the “Website”) is owned and operated by AB Agri Limited (registered in [England and Wales] under company number [193800] (called in this
              notice “we”, “our” or “us”).
            </p>
            <h3 className="text-md" id="purpose">Purpose of this notice</h3>
            <p>
              This privacy notice tells you about the information we collect about you when you visit our Website or otherwise provide us with information.
              <br />
              It also tells you how you can exercise <a href="#your-rights"><strong>Your Rights</strong></a> (including the right to object to some of the data handling we carry out). [More information about your rights and
              how you can exercise them is set out in the “Your Rights” section below]
            </p>
            <h3 className="text-md" id="personal-data-collection">What personal data do we collect?</h3>
            <h4 className="text-md">Site traffic data and information about your computer</h4>
            <h5 className="text-md">How do we use this data?</h5>
            <p>When you browse our Website, we use cookies to collect:</p>
            <p>
              <b>Information about your use of our Website</b> – we collect standard internet log information and details of visitor behaviour patterns.
            </p>
            <ul>
              <li>
                We use this information to record visitor numbers, their use of different areas of the Website and any useful features or links. We do not use this information in
                any way that would identify you personally.
              </li>
              <li>
                We use a third party, Google Analytics, to collect this information but it is only processed in a way which does not identify anyone. We do not make, and do not
                allow Google to make, any attempt to find out the identities of those visiting our website;
              </li>
            </ul>
            <p>
              <b>Information about your computer;</b> this includes [your IP address, operating system and browser type.
            </p>
            <ul>
              <li>We use this information to help maintain the security of our Website and to identify trends so that we can improve its performance. </li>
              <li>
              We also use this information to customise the Website according to your interests and to ensure the Website’s content is presented as effectively as possible for you and to enable you to participate in interactive features of the Website, when you choose to do so.
              </li>
              <li>We do not use this information in any way that would identify you personally.</li>
            </ul>
            <p>
            Data we collect using non-essential cookies is used on the basis of your consent.  Any other information that we collect about your use of our Website is used on the basis that this is necessary for the purpose of our legitimate interests in maintaining and managing our Website and ensuring its security.
            </p>
            <p>
              We collect this information for the purpose of our legitimate interests in maintaining and managing our Website and ensuring its security. If you do not want us to
              collect this information you can use your web browser’s “do not track” (“DNT”) facility to tell us that you don’t want to be tracked when you visit our Website.
              Further information about DNT can be found at
              <a href="https://allaboutdnt.com" target="_blank" title="All about do not track">
                <u>https://allaboutdnt.com</u>
              </a>
              .
            </p>
            <p>
              For more information about how we use cookies on our Website, see our{" "}
              <Link href="/cookie-policy">
                <a>
                  <u>Cookies Policy</u>
                </a>
              </Link>
              .
            </p>
            <h5 className="text-md">How long do we keep this information for?</h5>
            <p>
              We will only keep information about your visit to our Website for as long as is necessary for the purposes we’ve mentioned. Typically we delete user browsing
              information every 13 months. See our{" "}
              <Link href="/cookie-policy">
                <a>
                  <u>Cookies Policy</u>
                </a>
              </Link>
              for further information.
            </p>
            <h5 className="text-md">Who do we share this information with?</h5>
            <p>We share information about visitors to our Website with service providers who help us administer and manage the Website.</p>
            <p>We also share information about your use of our Website with advertising networks, although you cannot be personally identified from this information.</p>
            <h5 className="text-md">Where do we transfer this information to?</h5>
            <p>Information we collect about your use of our Website is stored within, and not transferred outside of, the UK.</p>
            <h4 id="information-you-send-us">Information you send us</h4>
            <h5 className="text-md">How do we use this data?</h5>
            <p>
              You do not have to supply us directly with any information when you use our Website. If you choose to use our ‘contact us’ feature or otherwise get in touch with us,
              we will use the information you send us for the purpose of responding to your enquiry. When we use your personal data for this purpose, we do so for our legitimate
              business interest in communicating with you in accordance with your wishes and expectations. We will also use this data for the purpose of our legitimate interests in
              accessing appropriate professional advice and in order to ensure we comply with legal obligations to which our business is subject.
            </p>
            <p>For more information about how we use information you send us for recruitment purposes see our section on recruitment.</p>
            <h5 className="text-md">How long do we keep this information for?</h5>
            <p>
              We will only keep your information for as long as is necessary in order to manage your query. We usually keep records of routine queries for 6 months but in some
              cases (for example where the query relates to a contract between us, or where we need to obtain legal advice in order to respond to a complaint) we may need to retain
              a record of our communications for up to 6 years.
            </p>
            <h5 className="text-md">Who do we share this information with?</h5>
            <p>
              We will share your data with our service providers and our professional advisers if this is necessary in order to resolve a query or complaint. <br />
              Otherwise we will not share your information with any third party unless:
            </p>
            <ul>
              <li>we have your permission; </li>
              <li>we are required to do so by law;</li>
              <li>this is necessary so that we can enforce our terms of use, rights or property or the rights or property of any third party; or </li>
              <li>
                this is necessary in connection with the sale of our business or its assets (in which case your details will be disclosed to our advisers and any prospective
                purchaser’s advisers and will be passed to the new owners).
              </li>
            </ul>
            <h5 className="text-md">Where do we transfer this information to?</h5>
            <p>Information you send us via our Website is stored within, and not transferred outside of, the UK. </p>
            <h4 id="recruitment">Recruitment</h4>
            <h5 className="text-md">How do we use this data?</h5>
            <p>If you use our Website to send us your CV or other information in support of an enquiry about recruitment, we will use your information to respond to your query and consider your suitability for any available position.</p>
            <p>When we use your personal data in this way, we do so for the purpose of our legitimate interests in managing our recruitment. Where necessary, we will also use this data for the purpose of our legitimate interests in accessing appropriate professional advice and in order to ensure we comply with legal obligations to which our business is subject.</p>
            <h5 className="text-md">How long do we keep this information for?</h5>
            <p>We usually retain information supplied by job applicants for no longer than 12 months following a relevant recruitment decision. If your application is unsuccessful, we may decide to retain your details for longer if we think you may be suitable for another position that may arise within the ABF group in the future. If we do this we will let you know about this so that you can opt out if you want to.</p>
            <h5 className="text-md">Who do we share this information with?</h5>
            <p>Where necessary so that we can manage our recruitment process, we will share your information with our service providers and professional advisers.</p>
            <p>
            Otherwise we will not share your information with any third party unless: 
            </p>
            <ul>
              <li>we have your permission (for example in order to share your details with another group company for their recruitment purposes); </li>
              <li>we are required to do so by law;</li>
              <li>this is necessary so that we can enforce our terms of use, rights or property or the rights or property of any third party; or </li>
              <li>
              this is necessary in connection with the sale of our business or its assets (in which case your details will be disclosed to our advisers and any prospective purchaser’s advisers and will be passed to the new owners).
              </li>
            </ul>
            <h5 className="text-md">Where do we transfer this information to?</h5>
            <p>Any information you send us via our Website in support of an employment application is stored within, and not transferred outside of, the United Kingdom.</p>
            <h2 id="your-rights">Your Rights</h2>
            <p>
              You can ask us at any time to provide you with a copy of your personal data. In relation to personal data you have supplied to us, and which is held by us for the
              purpose of entering into a contract between us or on the basis of your consent, you are entitled to ask us for a copy of this information in a structured, commonly
              used and machine readable format so that you can reuse it or share it with other organisations. If you think the personal data we hold about you is inaccurate or
              incomplete, you can ask us to correct it or complete it. In some circumstances you also have the right to object to our processing of your data and can ask us to
              restrict our use of your data and to delete it. There are some exceptions to these rights, however. For example, it will not be possible for us to delete your data if
              we are required by law to keep it or if we hold it in connection with a contract with you. Similarly, access to your data may be refused if making the information
              available would reveal personal information about another person or if we are legally prevented from disclosing such information. If you wish to exercise any of these
              rights you should contact us info@livalta.com.{" "}
            </p>
            <h2 id="complaints">Contacting us and your rights of complaint</h2>
            <p>
              Questions, comments or requests concerning this privacy notice are welcomed and should be addressed to Data Protection Co-Ordinator at AB Agri, 64 Innovation Way,
              Peterborough Business Park, Peterborough, PE2 6FL
              <br />
              If you have a concern about the way we handle your personal data you have the right to complain to the Information Commissioner (ICO). You can find details of how to
              do this on the ICO website at{" "}
              <a href="https://ico.org.uk/concerns/" target="_blank" title="ICO.org Concerns">
                https://ico.org.uk/concerns/
              </a>{" "}
              or by calling their helpline on <a href="tel:0303 123 1113" target="_blank" title="ICO Helpline"></a>.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="w-full lg:w-1/3 p-4">
          <div className="hidden lg:block">
            <h5 className="text-2xl outline small b-100 uppercase pb-8 text-blur-sub-heading">Navigation</h5>
            <a className="block text-md" href="#who-are-we" title="Who are we">Who are we</a>
            <a className="block text-md" href="#purpose" title="Purpose of this notice">Purpose of this notice</a>
            <a className="block text-md" href="#information-you-send-us" title="Information you send us">Information you send us</a>
            <a className="block text-md" href="#personal-data-collection" title="What personal data do we collect?">What personal data do we collect?</a>
            <a className="block text-md" href="#recruitment" title="Recruitment">Recruitment</a>
            <a className="block text-md" href="#your-rights" title="Your Rights">Your Rights</a>
            <a className="block text-md" href="#complaints" title="Contacting us and your rights of complaint">Contacting us and your rights of complaint</a>
          </div>
          <div className="hidden lg:block w-full my-8 h-1 bg-blue-gradient"></div>
          <LegalSidebarContact />
        </div>
      </article>
      <Footer />
      <MobileNavigation />
    </div>
  );
}
