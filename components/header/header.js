import Image from "next/image";
import ScrollBarHeader from "../../components/mouse-scroll-header";

export default function Header() {
  if (typeof window !== "undefined") {
    (function() {
      setHeroHeight();

      window.addEventListener("resize", setHeroHeight);

      function setHeroHeight() {
        // let navbar = document.getElementById('navbar')
        // let header = document.getElementById('hero')
        // let scrollbar = document.getElementById('hero-scrollbar')
        // let heroAni = document.getElementById('hero-ani')
        // let screenHeight = window.screen.height;
        // let heroHeight =  screenHeight - navbar.scrollHeight - scrollbar.scrollHeight
        // let top = 'calc(' + (heroHeight/2) + 'px - 8vw)'
        // if(heroHeight < 200) {
        //   top = ''
        //   header.style.height = '18vw'
        // } else {
        //   header.style.height = (heroHeight - 40) + 'px'
        // }
        // heroAni.style.top = top
      }

      document.onmousemove = handleMouseMove;
      function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
          eventDoc = (event.target && event.target.ownerDocument) || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX =
            event.clientX +
            ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
            ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
          event.pageY =
            event.clientY +
            ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
            ((doc && doc.clientTop) || (body && body.clientTop) || 0);
        }

        var hero = document.getElementById("hero-ani");
        var rY = map(event.pageX, 0, hero.offsetWidth, -6, 6);
        var rX = map(event.pageY, 0, hero.offsetHeight, -2, 2);
        var transform =
          "rotateY(" + rY + "deg)" + " " + "rotateX(" + rX + "deg)";

        //  hero.style.transform = transform
      }
    })();

    function map(x, in_min, in_max, out_min, out_max) {
      return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }
  }

  return (
    <>
      <div
        id="hero"
        data-aos="zoom-in"
        className="w-full relative overflow-y-hidden overflow-x-visible flex justify-center lg:justify-end hero-bg"
      >
        <div
          className="hidden lg:block w-4/5 clip clip-header"
          id="videoContainer"
        >
          <video
            className="h-full w-full video-width"
            loop={true}
            autoPlay="autoPlay"
            muted
          >
            <source
              src="/videos/livalta-website-header-video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="hidden lg:flex center-hero  w-full justify-center"
          id="hero-ani"
        >
          <div className="header-svg mt-8">
            <svg
              style={{ height: "100%", margin: "0 auto" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1013 218.44"
              className="ani-stroke"
            >
              <g className="letter" data-name="Layer 2">
                <g
                  className="letter"
                  id="ed9c7594-df7f-4ed0-8184-410ef32b8cff"
                  data-name="Layer 1"
                >
                  <path
                    className="svg-letters"
                    d="M62,26.73V40.06H38.66V96.22H24.76V40.06H1.5V26.73Zm54.13,69.39L102.05,69.3h-14V96.22H73.46v-73h30.68c7.68,0,13.94,2.14,18.72,6.36S130,39.39,130,46.26c0,9.61-5,17.19-13.54,20.7l15.77,29.16ZM88.06,36v20.4h16.08a11.81,11.81,0,0,0,8.5-3,10,10,0,0,0,0-14.45c-2.09-2-4.94-3-8.5-3ZM197.35,96.22l-5.22-14.29H161.06l-5.6,14.29H138.3l32.88-76.43h12.53l30.8,76.43ZM166,69.52h21.69L177.2,40.84Zm115-53.21h16V96.22H285.05l-42.8-50.54V96.22h-16V16.31h11.82L280.93,66.8Zm43.91,77.52A41.23,41.23,0,0,1,310,83.25l9-12.44a56.44,56.44,0,0,0,11.51,8.49A24.75,24.75,0,0,0,342.23,82a20.54,20.54,0,0,0,10.87-2.61A8.21,8.21,0,0,0,357.28,72,7,7,0,0,0,354,65.81C351.7,64.35,348,63,342.92,61.74c-6.33-1.57-10.64-2.85-13-3.72-9.71-3.67-15.29-9.25-16.81-16.81a23.8,23.8,0,0,1-.46-4.65,21.51,21.51,0,0,1,8.66-17.85c5.76-4.48,13.49-6.69,23.2-6.69a47.67,47.67,0,0,1,30.35,10.41l-7.38,13.2a83.16,83.16,0,0,0-11.86-6.39,28.55,28.55,0,0,0-11.05-2c-8.6,0-13.9,3.2-13.9,9-.23,3,1.86,5.24,4,6.51a24.94,24.94,0,0,0,5.64,2.1c.75.17,1.8.46,3.14.75,2.73.64,4.88,1.11,6.45,1.52s3.66,1,6.22,1.8a45,45,0,0,1,6.17,2.5,52,52,0,0,1,5.11,3.2c3.72,2.67,5.53,5.52,7,9.88a23,23,0,0,1,1.05,7.15c0,8-2.91,14.25-8.67,19s-13.43,7.09-22.85,7.09A47.54,47.54,0,0,1,324.84,93.83Zm65.58,2.39V9.36h64.86V26H407.8V44.19h40.4V60.85H407.8V96.22Zm87.25-11c-8.25-8.38-12.41-19.53-12.41-33.58C464.94,24,483.46,4.69,511.18,5c27.71-.25,46.3,19,45.92,46.67,0,14.05-4.16,25.2-12.41,33.58s-19.47,12.53-33.51,12.53S485.92,93.64,477.67,85.26Zm52.47-12c4.72-5,7.05-12.16,7.05-21.54s-2.33-16.76-7.05-22S519.05,22,511.18,22s-14.3,2.58-19,7.74S485,42.3,485,51.75s2.33,16.56,7,21.54,11,7.43,19.09,7.43S525.41,78.27,530.14,73.29Zm98.23,22.8L610.25,61.61h-18V96.22H573.49V2.42h39.45c9.87,0,17.92,2.74,24.07,8.17s9.16,12.56,9.16,21.39c0,12.37-6.48,22.11-17.4,26.63l20.28,37.48Zm-36.1-77.32V45h20.67c4.64,0,8.24-1.31,10.92-3.86a12.38,12.38,0,0,0,4-9.29,12.29,12.29,0,0,0-4-9.29c-2.68-2.55-6.34-3.79-10.92-3.79ZM746.38,2.42h16v93.8H743.63V38.65L713.22,83.07,682.93,38.65V96.22H664.16V2.42h16l33,49Zm37.35,93.8V2.42h18.78v93.8ZM888,2.42h18.77v93.8H892.84L842.6,36.89V96.22H823.83V2.42H837.7L888,61.68Zm83.34,41.73h40.16V59.39l-.06,25c-9.62,9-21.72,13.41-36.44,13.41-22,0-38.14-8.63-46-23.09-3.92-7.26-5.88-15.7-5.88-25.44q0-22.08,13.47-34.93c9-8.57,21.78-12.89,38.6-12.89A95,95,0,0,1,989,2.61c2.55.39,5.62,1.24,7.45,1.7s5,1.44,6,1.77c.53.2,1.38.46,2.49.85s1.7.59,1.9.65v19.1c-.53-.19-2-.78-4.45-1.83s-4.65-2-6.61-2.68a58.8,58.8,0,0,0-8.24-2,57.23,57.23,0,0,0-10.53-1c-10.47,0-18.71,2.62-24.79,7.85s-9.16,12.69-9.16,22.31,3,17.27,9.09,22.76,14,8.31,23.88,8.31c7.58,0,13.8-2.09,18.64-6.22V59.39H971.34ZM100.43,215.3V121.5h18.78v93.8ZM204.7,121.5h18.77v93.8H209.54L159.3,156V215.3H140.53V121.5H154.4l50.3,59.26ZM288,163.23H328.2v15.24l-.06,25.06c-9.62,9-21.72,13.41-36.44,13.41-22,0-38.14-8.64-46-23.1-3.92-7.26-5.88-15.69-5.88-25.44q0-22.08,13.47-34.93c9-8.57,21.79-12.89,38.6-12.89a96.43,96.43,0,0,1,13.8,1.11c2.55.4,5.62,1.25,7.46,1.7s5,1.44,6,1.77c.53.2,1.38.46,2.49.85l1.9.66v19.1c-.53-.2-2-.79-4.45-1.84s-4.65-2-6.61-2.68a57.61,57.61,0,0,0-8.24-2,56.39,56.39,0,0,0-10.53-1c-10.47,0-18.71,2.62-24.79,7.85s-9.16,12.69-9.16,22.31,3,17.27,9.09,22.76,14,8.31,23.88,8.31c7.58,0,13.8-2.09,18.64-6.21V178.47H288Zm112.44,51.94L382.36,180.7h-18v34.6H345.6V121.5H385c9.88,0,17.93,2.74,24.08,8.17s9.15,12.56,9.15,21.39c0,12.37-6.47,22.11-17.4,26.63l20.28,37.48Zm-36.11-77.32v26.23H385c4.65,0,8.25-1.31,10.93-3.86a12.81,12.81,0,0,0,0-18.58c-2.68-2.55-6.35-3.79-10.93-3.79Zm71.5,77.45V125h67.46v17.26H454v19h42v17.32H454V198h49.82V215.3Zm118.41-86.85q17.9,0,28.7,11.81t10.73,31.61c0,13.51-3.52,24.17-10.48,31.86s-16.66,11.57-29,11.57H519.69V128.45ZM552.22,199c15.2,0,23.56-9,23.56-27s-8.54-27.25-23.56-27.25H537.07V199Zm56.6,16.29V131.92H625.5V215.3Zm35.24,0V135.39h59.68v15.27H660.06v16.78h37.16v15.32H660.06V200h44.07V215.3Zm126.4-76.43h15.29V215.3H774.4L733.47,167V215.3h-15.3V138.87h11.3l41,48.29Zm90.89,3.47v14H836.82v59h-14.6v-59H797.8v-14Zm19,71A34.25,34.25,0,0,1,868,204.49l7.51-10.36a46.91,46.91,0,0,0,9.59,7.07,20.65,20.65,0,0,0,9.74,2.23,17.1,17.1,0,0,0,9.06-2.18,6.84,6.84,0,0,0,3.49-6.11,5.81,5.81,0,0,0-2.76-5.18c-1.89-1.21-5-2.33-9.21-3.39-5.28-1.31-8.87-2.38-10.85-3.1-8.09-3.06-12.75-7.71-14-14a20,20,0,0,1-.38-3.87,17.89,17.89,0,0,1,7.22-14.88c4.79-3.73,11.24-5.57,19.33-5.57A39.76,39.76,0,0,1,922,153.81l-6.15,11a70.38,70.38,0,0,0-9.89-5.33,23.85,23.85,0,0,0-9.2-1.65c-7.17,0-11.58,2.67-11.58,7.47-.2,2.51,1.55,4.36,3.34,5.42a21,21,0,0,0,4.7,1.75c.63.14,1.5.38,2.62.63,2.27.53,4.07.92,5.38,1.26s3,.82,5.18,1.5a38.84,38.84,0,0,1,5.14,2.08,43.59,43.59,0,0,1,4.26,2.67,14.83,14.83,0,0,1,5.81,8.23,19,19,0,0,1,.88,6c0,6.64-2.43,11.88-7.22,15.8s-11.2,5.91-19,5.91A39.51,39.51,0,0,1,880.35,213.31Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div
            className="absolute w-full flex justify-center"
            style={{ top: "-2.8em", left: "4em" }}
          >
            <div style={{ width: "40%" }}>
              <svg
                id="ekl1f1ml4ugq1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 688.790000 298.960000"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
              >
                <g
                  id="ekl1f1ml4ugq2_to"
                  transform="translate(311.165000,128.174999)"
                >
                  <g id="ekl1f1ml4ugq2_ts" transform="scale(0.250000,0.250000)">
                    <polygon
                      id="ekl1f1ml4ugq2"
                      points="75.363381,81.491679 14.735557,99.736585 14.735557,79.110719 75.363381,60.865812 75.363381,81.491679"
                      transform="translate(-34.730000,-73.684999)"
                      opacity="0"
                      fill="none"
                      stroke="rgb(0,226,209)"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </g>
                </g>
                <g
                  id="ekl1f1ml4ugq3_to"
                  transform="translate(315.319998,168.125008)"
                >
                  <g id="ekl1f1ml4ugq3_ts" transform="scale(0.250000,0.250000)">
                    <polygon
                      id="ekl1f1ml4ugq3"
                      points="64.179307,281.149874 128.870000,300.618269 128.870000,278.602296 64.179307,259.133902 64.179307,281.149874"
                      transform="translate(-99.794998,-278.555008)"
                      opacity="0"
                      fill="none"
                      stroke="rgb(0,226,209)"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </g>
                </g>
                <g
                  id="ekl1f1ml4ugq4_to"
                  transform="translate(394.240006,117.519999)"
                >
                  <g id="ekl1f1ml4ugq4_ts" transform="scale(0.250000,0.250000)">
                    <polygon
                      id="ekl1f1ml4ugq4"
                      points="552.380000,36.950000 652.070000,66.950000 652.070000,33.030000 552.380000,3.030000 552.380000,36.950000"
                      transform="translate(-602.225006,-34.989999)"
                      opacity="0"
                      fill="none"
                      stroke="rgb(0,226,209)"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </g>
                </g>
                <g
                  id="ekl1f1ml4ugq5_to"
                  transform="translate(363.779994,161.910003)"
                >
                  <g id="ekl1f1ml4ugq5_ts" transform="scale(0.250000,0.250000)">
                    <polygon
                      id="ekl1f1ml4ugq5"
                      points="687.910000,279.310000 649.140000,290.980000 649.140000,277.790000 687.910000,266.120000 687.910000,279.310000"
                      transform="translate(-668.524994,-278.550003)"
                      opacity="0"
                      fill="none"
                      stroke="rgb(0,226,209)"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="block lg:hidden justify-center w-full pb-12">
          <img
            className="w-2/3 mx-auto pt-6 pb-8"
            src="/images/transforming-ingredients-mobile.svg"
            alt="Transforming Ingredients"
          ></img>
          <ScrollBarHeader title="Scroll to see how Livalta is re-shaping agrifood" />
        </div>
      </div>
      <div className="bottom-scroll hidden md:flex">
        <ScrollBarHeader title="Scroll to see how Livalta is re-shaping agrifood" />
      </div>
    </>
  );
}
