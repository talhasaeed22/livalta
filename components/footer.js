import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div data-aos="fade-up" className="bg-gradient-footer">
        <div className="page-content mx-auto pt-20 px-12 xl:px-0">
          <div className="w-full text-center border-t-4 border-dotted pt-4 pb-12 lg:py-12">
            <div className="w-full text-center lg:text-left pt-8 pb-8 lg:pb-0">
              <p>
                Helping farmers, feed manufacturers and nutritionists
                responsibly meet animal needs.
              </p>
            </div>
            <div className="w-full flex">
              <div className="w-2/3 block">
                <div className="w-full block lg:flex py-2 text-grey-100">
                  <a
                    href="/privacy-policy"
                    className="lg:pr-8 block lg:flex text-left lg:text-center"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/cookie-policy"
                    className="lg:px-8 block lg:flex text-left lg:text-center"
                  >
                    Cookie Policy
                  </a>
                  <a
                    href="/pdf/LV-Terms-Conditions-PDF.pdf"
                    target="_blank"
                    className="lg:pr-8 block lg:flex text-left lg:text-center"
                  >
                    Terms & Conditions Sale
                  </a>
                  <a
                    href="/#contact"
                    className="lg:pl-8 block lg:flex text-left lg:text-center"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="w-1/3 block lg:flex">
                <img
                  src="/images/ab-agri-logo.svg"
                  alt="AB Agri"
                  className="w-2/3 lg:w-1/3 py-4 lg:p-4 ml-auto lg:ml-0"
                />
                <img
                  src="/images/livalta-logo.svg"
                  alt="Livalta"
                  className="lg:w-2/3 py-4 lg:p-8"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-6 h-8 alt-skew bg-blue-100"></div>
            </div>
            <p
              className="xl:w-2/3 py-8 mx-auto footer:text-tiny lg:text-md"
              style={{ fontSize: "0.85rem" }}
            >
              Copyright &copy; {new Date().getFullYear()}. LivaltaCell HY40,
              Protocell and AlphaSoy are registered trademarks of AB Agri Ltd.
              AB Agri, 64 Innovation Way, Lynchwood, Peterborough, PE2 6FL.{" "}
              <a href="https://rootscreative.co.uk/?referer=livalta.co.uk">
                Website by <span className="underline">Roots Creative</span>.
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
