import { useState } from 'react';
import Image from 'next/image';

import ProtoCell from '../products/protocell';
import LivaltaCellHY40 from '../products/livalta-cell-hy40';
import LivaltaCellPSY from "../products/livalta-cell-psy";
import LivaltaSunP46 from './livalta-sun-p46';

export default function Products() {
  const [showProto, setShowProto] = useState(false);
  const [showHY40, setShowHY40] = useState(false);
  const [showPSY, setShowPSY] = useState(true);
  const [showP46, setShowP46] = useState(false);

  function toggleProducts(name) {
    switch (name) {
      case 'proto':
        setShowProto(true);
        setShowHY40(false);
        setShowPSY(false);
        setShowP46(false);
        break;

      case 'HY40':
        setShowHY40(true);
        setShowProto(false);
        setShowPSY(false);
        setShowP46(false);
        break;

      case 'PSY':
        setShowPSY(true);
        setShowProto(false);
        setShowHY40(false);
        setShowP46(false);
        break;

      case 'P46':
        setShowP46(true);
        setShowProto(false);
        setShowHY40(false);
        setShowPSY(false)
        break;
    }
  }

  return (
    <>
      <div className='w-full'>
        <div data-aos='fade-down' className='w-full text-center'>
          <h1 className='outline small b-100 text-3xl lg:text-4xl uppercase text-blur-heading'>
            Products
          </h1>
          <p className='text-red uppercase text-md lg:text-lg tracking-wider'>
            alternative Protein with Additional benefits
          </p>
        </div>

        {/* First One done and dusted */}
        {showProto && (
          <div data-aos='fade-up' className='w-full p-4'>
            <div className='w-full'>
              <div className='flex justify-center text-white my-6 text-md lg:text-lg cursor-pointer'>
                <div className='mr-2 lg:mr-8'>
                  ProtoCell (IDY M30)
                  <div className='bg-purple h-2 w-1/3 mx-auto mt-4'></div>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('HY40')}
                >
                  <p>LivaltaCell HY40</p>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('PSY')}
                >
                  <p>Livalta™Cell PSY</p>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('P46')}
                >
                  <p>Livalta™Sun P46</p>
                </div>
              </div>
            </div>
            <div data-aos='fade-down' className='lg:flex'>

              <ProtoCell />
              <div
                className='hidden lg:block lg:w-1/6 text-center mr-8 cursor-pointer'
                onClick={() => toggleProducts('HY40')}
              >
                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/livalta-cell-hy40.svg'
                    alt='Livalta Cell HY40'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell HY40'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Promotes Gut Development &amp; Functionality
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Poultry, Swine and Aqua
                </p>
              </div>

              <div
                className='hidden lg:block lg:w-1/6 text-center mr-8 cursor-pointer'
                onClick={() => toggleProducts('PSY')}
              >


                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/products/psy-product.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  INCREASED PALATABILITY & WELLBEING
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>

              <div
                className='hidden lg:block lg:w-1/6 lg:h-[143px] text-center cursor-pointer'
                onClick={() => toggleProducts('P46')}
              >
                <div className='bg-yellow px-12 py-12'>
                  <img
                    src='/images/p46logo.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'

                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'

                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  NUTRITION AND TECHNOLOGICAL PROPERTIES
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Second one */}

        {showHY40 && (
          <div data-aos='fade-down' className='w-full p-4'>
            <div className='w-full'>
              <div className='flex justify-center text-white my-6 text-md lg:text-lg cursor-pointer'>
                <div
                  className='mr-2 lg:mr-8 opacity-25'
                  onClick={() => toggleProducts('proto')}
                >
                  ProtoCell (IDY M30)
                </div>
                <div className='ml-2 lg:ml-8 cursor-pointer'>
                  <p>LivaltaCell HY40</p>
                  <div className='bg-orange h-2 w-1/3 mx-auto mt-4'></div>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('PSY')}
                >
                  <p>Livalta™Cell PSY</p>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('P46')}
                >
                  <p>Livalta™Sun P46</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <LivaltaCellHY40 />
              <div
                className='hidden lg:block lg:w-1/6 text-center cursor-pointer'
                onClick={() => toggleProducts('proto')}
              >
                <div className='bg-purple px-8 py-12'>
                  <img
                    src='/images/protocell.png'
                    alt='ProtoCell'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/proto-cell-texture.jpg'
                  alt='ProtoCell'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Improves growth performance
                </h4>
                <p className='text-lg text-blue-100 uppercase tracking-wider'>
                  For Aqua and Swine
                </p>
              </div>
              <div
                className='hidden lg:block lg:w-1/6 text-center mr-8 cursor-pointer ml-8'
                onClick={() => toggleProducts('PSY')}
              >
                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/products/psy-product.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  INCREASED PALATABILITY & WELLBEING
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>
              <div
                className='hidden lg:block lg:w-1/6 lg:h-[143px] text-center cursor-pointer'
                onClick={() => toggleProducts('P46')}
              >
                <div className='bg-yellow px-12 py-12'>
                  <img
                    src='/images/p46logo.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'

                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'

                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  NUTRITION AND TECHNOLOGICAL PROPERTIES
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Third One */}

        {showPSY && (
          <div data-aos='fade-up' className='w-full p-4'>
            <div className='w-full'>
              <div className='flex justify-center text-white my-6 text-md lg:text-lg cursor-pointer'>
                <div
                  className='mr-2 lg:mr-8 opacity-25'
                  onClick={() => toggleProducts('proto')}
                >
                  ProtoCell (IDY M30)
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('HY40')}
                >
                  <p>LivaltaCell HY40</p>
                </div>
                <div className='ml-2 lg:ml-8  cursor-pointer'>
                  <p>Livalta™Cell PSY</p>
                  <div className='bg-orange h-2 w-1/3 mx-auto mt-4'></div>
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('P46')}
                >
                  <p>Livalta™Sun P46</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <LivaltaCellPSY />
              <div
                className='hidden lg:block lg:w-1/6 mr-8 text-center cursor-pointer'
                onClick={() => toggleProducts('proto')}
              >
                <div className='bg-purple px-8 py-12'>
                  <img
                    src='/images/protocell.png'
                    alt='ProtoCell'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/proto-cell-texture.jpg'
                  alt='ProtoCell'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Improves growth performance
                </h4>
                <p className='text-lg text-blue-100 uppercase tracking-wider'>
                  For Aqua and Swine
                </p>
              </div>

              <div
                className='hidden lg:block lg:w-1/6 text-center cursor-pointer mr-8'
                onClick={() => toggleProducts('HY40')}
              >
                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/livalta-cell-hy40.svg'
                    alt='Livalta Cell HY40'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell HY40'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Promotes Gut Development &amp; Functionality
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Poultry, Swine and Aqua
                </p>
              </div>
              <div
                className='hidden lg:block lg:w-1/6 lg:h-[143px] text-center cursor-pointer'
                onClick={() => toggleProducts('P46')}
              >
                <div className='bg-yellow px-12 py-12'>
                  <img
                    src='/images/p46logo.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'

                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'

                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  NUTRITION AND TECHNOLOGICAL PROPERTIES
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Forth One */}

        {showP46 && (
          <div data-aos='fade-up' className='w-full p-4'>
            <div className='w-full'>
              <div className='flex justify-center text-white my-6 text-md lg:text-lg cursor-pointer'>
                <div
                  className='mr-2 lg:mr-8 opacity-25'
                  onClick={() => toggleProducts('proto')}
                >
                  ProtoCell (IDY M30)
                </div>
                <div
                  className='ml-2 lg:ml-8 opacity-25 cursor-pointer'
                  onClick={() => toggleProducts('HY40')}
                >
                  <p>LivaltaCell HY40</p>
                </div>
                <div onClick={() => toggleProducts('PSY')} className='ml-2 lg:ml-8 opacity-25 cursor-pointer'>
                  <p>Livalta™Cell PSY</p>

                </div>
                <div
                  className='ml-2 lg:ml-8 cursor-pointer'
                  onClick={() => toggleProducts('P46')}
                >
                  <p>Livalta™Sun P46</p>
                  <div className='bg-yellow h-2 w-1/3 mx-auto mt-4'></div>
                </div>
              </div>
            </div>

            <div className='flex'>
              <LivaltaSunP46 />
              <div
                className='hidden lg:block lg:w-1/6 mr-8 text-center cursor-pointer'
                onClick={() => toggleProducts('proto')}
              >
                <div className='bg-purple px-8 py-12'>
                  <img
                    src='/images/protocell.png'
                    alt='ProtoCell'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/proto-cell-texture.jpg'
                  alt='ProtoCell'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Improves growth performance
                </h4>
                <p className='text-lg text-blue-100 uppercase tracking-wider'>
                  For Aqua and Swine
                </p>
              </div>

              <div
                className='hidden lg:block lg:w-1/6 text-center cursor-pointer mr-8'
                onClick={() => toggleProducts('HY40')}
              >
                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/livalta-cell-hy40.svg'
                    alt='Livalta Cell HY40'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell HY40'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  Promotes Gut Development &amp; Functionality
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Poultry, Swine and Aqua
                </p>
              </div>
              <div
                className='hidden lg:block lg:w-1/6 text-center cursor-pointer'
                onClick={() => toggleProducts('PSY')}
              >
                <div className='bg-orange px-12 py-12'>
                  <img
                    src='/images/products/psy-product.svg'
                    alt='Livalta Cell PSY'
                    unsized='true'
                  />
                </div>
                <img
                  src='/images/background/livalta-cell-hy40-texture.jpg'
                  alt='Livalta Cell PSY'
                  unsized='true'
                />
                <h4 className='outline tiny white text-md py-8 uppercase leading-7'>
                  INCREASED PALATABILITY & WELLBEING
                </h4>
                <p className='text-lg text-blue-100 uppercase  tracking-wider'>
                  For Pets
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
