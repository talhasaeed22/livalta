export default function about() {


  let title_1 = "WHO";
  let subtitle_1 = "is Livalta?"
  let content_1 = "Livalta is an AB Agri company. <br><br>We’re here to improve global food production, both in the performance of feed and food protein ingredients and in finding more responsible ways to produce them."

  let title_2 = "WHAT"
  let subtitle_2 = "does Livalta do?"
  let content_2 = "We responsibly source and produce local, traceable proteins and transform them into functional, protein-rich feed and food ingredients using the latest scientific and technological innovations."

  let title_3 = "WHY"
  let subtitle_3 = "now Livalta?"
  let content_3 = "Our high performance protein ingredients don’t just provide excellent nutrition, they also offer additional functionality; boosting performance and  optimising wellbeing by supporting the healthy development of people and animals."

  return (
    <>
    <div className="w-full">
      <div className="hidden lg:block w-full text-left">
        <div className="w-full p-8 flex">
          <div data-aos="fade-left">
            <h2 className="text-45xl outline tiny b-100 leading-none text-blur-heading">{ title_1 }</h2>
            <p className="ml-8 display text-md text-red uppercase tracking-wider">{ subtitle_1 }</p>
          </div>
          <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
        </div>
        <div className="w-full flex">
          <div data-aos="fade-left" className="w-1/3 p-8">
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: content_1 }}></p>
          </div>
          <div className="w-2/3">
            <div className="w-full p-8 flex">
              <div data-aos="fade-left">
                <h2 className="text-45xl outline tiny b-100 leading-none uppercase text-blur-heading">{ title_2 }</h2>
                <p className="ml-8 display text-md text-red uppercase tracking-wider-home">{ subtitle_2 }</p>
              </div>
              <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
            </div>
            <div className="w-full flex">
              <div data-aos="fade-left" className="w-1/2 p-8">
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: content_2 }}></p>
              </div>
              <div className="w-1/2 p-8">
                <div className="flex">
                  <div data-aos="fade-left">
                    <h2 className="text-45xl outline tiny b-100 leading-none uppercase text-blur-heading">{ title_3 }</h2>
                    <p className="ml-8 display text-md text-red uppercase tracking-wider-home">{ subtitle_3 }</p>
                  </div>
                  <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
                </div>
                <p data-aos="fade-left" className="text-lg pt-16" dangerouslySetInnerHTML={{ __html: content_3 }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden w-full text-left">
        <div className="w-full p-8 block">
          <div className="flex">
            <div data-aos="fade-left w-full">
              <h2 className="text-45xl outline tiny b-100 leading-none">{ title_1 }</h2>
              <p className="ml-8 display text-md text-red uppercase tracking-wider-home">{ subtitle_1 }</p>
            </div>
            <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
          </div>
          <div data-aos="fade-left" className="w-full p-8">
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: content_1 }}></p>
          </div>
        </div>
        <div className="w-full p-8 block">
          <div className="flex">
            <div data-aos="fade-left w-full">
              <h2 className="text-45xl outline tiny b-100 leading-none">{ title_2 }</h2>
              <p className="ml-8 display text-md text-red uppercase tracking-wider">{ subtitle_2 }</p>
            </div>
            <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
          </div>
          <div data-aos="fade-left" className="w-full p-8">
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: content_2 }}></p>
          </div>
        </div>
        <div className="w-full p-8 pb-0 block">
          <div className="flex">
            <div data-aos="fade-left w-full">
              <h2 className="text-45xl outline tiny b-100 leading-none">{ title_3 }</h2>
              <p className="ml-8 display text-md text-red uppercase tracking-wider">{ subtitle_3 }</p>
            </div>
            <div data-aos="fade-left" className="w-full h-1 bg-grey-200 mt-12 ml-16"></div>
          </div>
          <div data-aos="fade-left" className="w-full p-8">
            <p className="text-lg" dangerouslySetInnerHTML={{ __html: content_3 }}></p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
