import React, { useState } from 'react';
import Next from '../icons/next.svg';
import Previous from '../icons/previous.svg';
import Image1 from '../imgs/bestMovies(desktop1).avif';
import Image2 from '../imgs/bestMovies(desktop2).avif';
import Image3 from '../imgs/bestMovies(tablet1).avif';
import Image4 from '../imgs/bestMovies(tablet2).avif';
import Image5 from '../imgs/bestMovies(mobile1).avif';
import Image6 from '../imgs/bestMovies(mobile2).avif';

import HTML from '../icons/html.svg';
import JS from '../icons/js.svg';
import iconReact from '../icons/react.svg';
import Sass from '../icons/sass.svg';

const BestMovies = () => {
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
          <h1 className='anima-right text-slate-800 text-4xl'>Best Movies</h1>
          <span className='anima-left block text-slate-600 -mt-1'>jan 23</span>
          <div className='anima-bottom my-4 flex '>
            <img src={HTML} alt='' className='w-5 mr-1' />
            <img src={JS} alt='' className='w-5 mx-1' />
            <img src={iconReact} alt='' className='w-5 mx-1' />
            <img src={Sass} alt='' className='w-5 ml-1' />
          </div>
          <p className='anima-top my-8 text-slate-600  '>
            <strong className='font-semibold text-slate-600'>
              Best Movies
            </strong>{' '}
            é um projeto frontend desenvolvido com a finalidade de oferecer aos
            usuários uma plataforma de avaliação de filmes. Com uma interface
            intuitiva e de fácil navegação, os usuários tem acesso a informações
            dos top 40 filmes da{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold '>
              <a href='https://www.imdb.com/' target='_blank'>
                IMDB
              </a>
            </strong>
            . O design responsivo garante uma boa experiência em diferentes
            dispositivos. O projeto foi desenvolvido utilizando tecnologias de
            ponta, incluindo HTML, CSS, Javascript, React e Sass, o que garante
            uma performance ótima e um código escalável."
          </p>

          <p className='anima-right limit-title text-slate-800'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://flx-react3-best-movies.vercel.app/'
                target='_blank'
              >
                Site:
              </a>
            </strong>{' '}
            <a
              href='https://flx-react3-best-movies.vercel.app/'
              target='_blank'
            >
              https://flx-react3-best-movies.vercel.app/
            </a>
          </p>

          <p className='anima-left limit-title text-slate-800'>
            <strong className='text-cyan-300 hover:text-cyan-100 text-lg'>
              <a
                href='https://github.com/flx-lander7/flx-react3__bestMovies'
                target='_blank'
              >
                Github:
              </a>
            </strong>{' '}
            <a
              href='https://github.com/flx-lander7/flx-react3__bestMovies'
              target='_blank'
            >
              https://github.com/flx-lander7/flx-react3__bestMovies
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestMovies;
