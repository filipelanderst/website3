import React, { useState } from 'react';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Image1 from '../imgs/freeCodeCamp1(desktop).avif';
import Image2 from '../imgs/freeCodeCamp1(tablet).avif';
import Image3 from '../imgs/freeCodeCamp1(mobile).avif';

import HTML from '../icons/html.svg';
import CSS from '../icons/css.svg';

const PgHomenagem = () => {
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
          <h1 className='anima-right text-slate-800 text-4xl'>
            Arthur Schopenhauer
          </h1>
          <span className='anima-left block text-slate-600 -mt-1'>mai 22</span>
          <div className='anima-bottom my-4 flex '>
            <img src={HTML} alt='' className='w-5 mr-1' />
            <img src={CSS} alt='' className='w-5 mx-1' />
          </div>
          <p className='anima-top my-8 text-slate-600  '>
            Uma simples página de homenagem ao grande filósofo{' '}
            <strong className='font-semibold'>Arthur Schopenhauer</strong> .
            Esse projeto foi feito como o primeiro desafio para o certificado{' '}
            <strong className='font-semibold'>Web Design Responsivo</strong> da{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold'>
              <a href='https://www.freecodecamp.org/'>freeCodeCamp</a>
            </strong>{' '}
          </p>

          <p className='anima-right limit-title text-slate-800'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://flx-lander7.github.io/freeCodeCamp__WebDesign1/'
                target='_blank'
              >
                Site:
              </a>
            </strong>{' '}
            <a
              href='https://flx-lander7.github.io/freeCodeCamp__WebDesign1/'
              target='_blank'
            >
              https://flx-lander7.github.io/freeCodeCamp__WebDesign1/
            </a>
          </p>

          <p className='anima-left limit-title text-slate-800'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://github.com/flx-lander7/freeCodeCamp__WebDesign1'
                target='_blank'
              >
                Github:
              </a>
            </strong>{' '}
            <a
              href='https://github.com/flx-lander7/freeCodeCamp__WebDesign1'
              target='_blank'
            >
              https://github.com/flx-lander7/freeCodeCamp__WebDesign1
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PgHomenagem;
