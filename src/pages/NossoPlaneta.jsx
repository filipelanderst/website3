import React, { useState } from 'react';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Image1 from '../imgs/nossoPlaneta(desktop1).avif';
import Image2 from '../imgs/nossoPlaneta(desktop2).avif';
import Image3 from '../imgs/nossoPlaneta(tablet1).avif';
import Image4 from '../imgs/nossoPlaneta(tablet2).avif';
import Image5 from '../imgs/nossoPlaneta(mobile1).avif';
import Image6 from '../imgs/nossoPlaneta(mobile2).avif';

import HTML from '../icons/html.svg';
import CSS from '../icons/css.svg';
import JS from '../icons/js.svg';
import iconReact from '../icons/react.svg';
import Tailwind from '../icons/tailwind.svg';

const NossoPlaneta = () => {
  const items = [
    {
      id: 1,
      content: Image1,
    },
    {
      id: 2,
      content: Image2,
    },
    {
      id: 3,
      content: Image3,
    },
    {
      id: 4,
      content: Image4,
    },
    {
      id: 5,
      content: Image5,
    },
    {
      id: 6,
      content: Image6,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  function nextImage() {
    setCurrentIndex(currentIndex + 1);
  }
  function previousImage() {
    setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className=''>
      <div className='grid grid-cols-1 xl:grid-cols-2 xl:min-h-[80vh] xl:items-center'>
        <div className='anima-slow relative mx-auto max-w-[275px] min-w-[275px] max-h-[200px] min-h-[200px] sm:max-w-[550px] sm:min-w-[550px] sm:max-h-[400px] sm:min-h-[400px] flex justify-center items-center '>
          <img
            src={currentItem.content}
            alt=''
            className='max-h-[175px] max-w-[300px] sm:max-h-[350px] sm:max-w-[600px]'
          />

          <button
            onClick={previousImage}
            disabled={currentIndex === 0}
            className='absolute cursor-pointer w-[15%] sm:w-[12%] top-[45%] -left-3 xxs:-left-8'
          >
            <img
              src={Previous}
              alt=''
              className={currentIndex === 0 ? 'hidden' : ''}
            />
          </button>

          <button
            onClick={nextImage}
            disabled={currentIndex === items.length - 1}
            className='absolute cursor-pointer w-[15%] sm:w-[12%] top-[45%] -right-3 xxs:-right-8'
          >
            <img
              src={Next}
              alt=''
              className={currentIndex === items.length - 1 ? 'hidden' : ''}
            />
          </button>
        </div>
        <div className='p-8'>
          <h1 className='anima-right text-slate-800 text-4xl'>Nosso Planeta</h1>
          <span className='anima-left block text-slate-600 -mt-1'>out 22</span>
          <div className='anima-bottom my-4 flex '>
            <img src={HTML} alt='' className='w-5 mr-1' />
            <img src={CSS} alt='' className='w-5 mr-1' />
            <img src={JS} alt='' className='w-5 mx-1' />
            <img src={iconReact} alt='' className='w-5 mx-1' />
            <img src={Tailwind} alt='' className='w-5 ml-1' />
          </div>
          <p className='anima-top my-8 text-slate-600  '>
            <strong className='font-semibold'>Nosso planeta</strong> foi
            inspirado na série{' '}
            <strong className='text-cyan-500 hover:text-cyan-100 font-semibold '>
              <a href='https://www.ourplanet.com/pt/' target='_blank'>
                Our Planet.
              </a>
            </strong>{' '}
            Essa série fornece vídeos explicativos e detalhados sobre os
            diferentes climas do planeta terra, as diferentes formas de vida e
            suas peculiaridades. Os vídeos estão disponíveis no{' '}
            <strong className='text-cyan-500 hover:text-cyan-100 font-semibold'>
              <a href='https://www.youtube.com/' target='_blank'>
                YOUTUBE
              </a>
            </strong>{' '}
            e também na{' '}
            <strong className='text-cyan-500 hover:text-cyan-100 font-semibold'>
              <a href='https://www.netflix.com/br/' target='_blank'>
                NETFLIX
              </a>
            </strong>
            .
          </p>

          <p className='anima-right limit-title text-slate-800'>
            <strong className='text-cyan-500 hover:text-cyan-100 text-lg'>
              <a href='https://nosso-planeta.vercel.app/' target='_blank'>
                Site:
              </a>
            </strong>{' '}
            <a href='https://nosso-planeta.vercel.app/' target='_blank'>
              https://nosso-planeta.vercel.app/
            </a>
          </p>

          <p className='anima-left limit-title text-slate-800'>
            <strong className='text-cyan-500 hover:text-cyan-100 text-lg'>
              <a
                href='https://github.com/flx-lander7/flx-react1__nossoPlaneta'
                target='_blank'
              >
                Github:
              </a>
            </strong>{' '}
            <a
              href='https://github.com/flx-lander7/flx-react1__nossoPlaneta'
              target='_blank'
            >
              https://github.com/flx-lander7/flx-react1__nossoPlaneta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NossoPlaneta;
