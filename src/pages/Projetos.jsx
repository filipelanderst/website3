import React from 'react';
import { Link } from 'react-router-dom';
import bestMoviesImg from '../imgs/bestMovies(desktop2).avif';
import melhoresCidadesImg from '../imgs/melhoresCidades(desktop2).avif';
import nossoPlanetaImg from '../imgs/nossoPlaneta(desktop1).avif';

const Projetos = () => {
  return (
    <div className='projetos-container'>
      <h1 className='limit-title title -ml-60'>S_3projetos</h1>

      <div className=' bg-slate-100 my-16 mx-auto lg:relative lg:grid grid-cols-2 items-center'>
        <div className='desktop-img mb-8 lg:mb-0'>
          <img src={bestMoviesImg} alt='' />
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='lg:absolute lg:top-0 lg:-mt-4'>
            <h1 className='limit-title text-4xl my-6 text-slate-800'>
              Best Movies
            </h1>
            <p className='-mt-6 text-sm text-slate-600 font-normal'>
              fevereiro 2023
            </p>
          </div>

          <p className='limit-paragraph my-4 text-slate-600  '>
            <strong className='font-semibold'>'Best Movies'</strong> é um
            projeto frontend desenvolvido com a finalidade de oferecer aos
            usuários uma plataforma de avaliação de filmes. Com uma interface
            intuitiva e de fácil navegação, os usuários tem acesso a informações
            dos top 40 filmes da{' '}
            <strong className='text-red-500 font-semibold '>
              <a href='https://www.imdb.com/' target='_blank'>
                IMDB
              </a>
            </strong>
            . O design responsivo garante uma boa experiência em diferentes
            dispositivos. O projeto foi desenvolvido utilizando tecnologias de
            ponta, incluindo HTML, CSS, Javascript, React e Sass, o que garante
            uma performance ótima e um código escalável."
          </p>

          <div className='py-4 bottom-0 lg:absolute lg:-mb-2'>
            <button className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'>
              <Link to='/BestMovies'>Saiba mais</Link>
            </button>
          </div>
        </div>
      </div>

      <div className=' bg-slate-100 my-16 mx-auto lg:relative lg:grid grid-cols-2 items-center'>
        <div className='desktop-img mb-8 lg:mb-0'>
          <img src={melhoresCidadesImg} alt='' />
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='lg:absolute lg:top-0 lg:-mt-4'>
            <h1 className='limit-title text-4xl my-6 text-slate-800'>
              Melhores Cidades
            </h1>
            <p className='-mt-6 text-sm text-slate-600 font-normal'>
              dezembro 2022
            </p>
          </div>

          <p className='limit-paragraph my-4 text-slate-600  '>
            <strong className='font-semibold'>'Melhores Cidades'</strong> é um
            projeto inspirado no site{' '}
            <a
              href='https://www.worldsbestcities.com/rankings/worlds-best-cities/'
              target='_blank'
            >
              <strong className='text-red-500 font-semibold '>
                BEST CITIES
              </strong>
            </a>{' '}
            que tem por finalidade avaliar as melhores cidades do mundo para
            morar de acordo com vários indicadores, entre eles local, produto,
            programação, pessoas, prosperidade e promoção. Você pode saber mais
            sobre a metodologia{' '}
            <a
              href='https://www.worldsbestcities.com/methodology/'
              target='_blank'
            >
              <strong className='text-red-500 font-semibold '>
                clicando aqui.
              </strong>
            </a>
          </p>

          <div className='py-4 bottom-0 lg:absolute lg:-mb-2'>
            <button className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'>
              <Link to='/MelhoresCidades'>Saiba mais</Link>
            </button>
          </div>
        </div>
      </div>

      <div className=' bg-slate-100 my-16 mx-auto lg:relative lg:grid grid-cols-2 items-center'>
        <div className='desktop-img mb-8 lg:mb-0'>
          <img src={nossoPlanetaImg} alt='' />
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='lg:absolute lg:top-0 lg:-mt-4'>
            <h1 className='limit-title text-4xl my-6 text-slate-800'>
              Nosso Planeta
            </h1>
            <p className='-mt-6 text-sm text-slate-600 font-normal'>
              outubro 2022
            </p>
          </div>

          <p className='limit-paragraph my-4 text-slate-600  '>
            <strong className='font-semibold'>'Nosso planeta'</strong> foi
            inspirado na série{' '}
            <strong className='text-red-500 font-semibold '>
              <a href='https://www.ourplanet.com/pt/' target='_blank'>
                Our Planet.
              </a>
            </strong>{' '}
            Essa série fornece vídeos explicativos e detalhados sobre os
            diferentes climas do planeta terra, as diferentes formas de vida, e
            suas peculiaridades. Os vídeos estão disponíveis no{' '}
            <strong className='text-red-500 font-semibold'>
              <a href='https://www.youtube.com/' target='_blank'>
                YOUTUBE
              </a>
            </strong>{' '}
            e também na{' '}
            <strong className='text-red-500 font-semibold'>
              <a href='https://www.netflix.com/br/' target='_blank'>
                NETFLIX
              </a>
            </strong>
            .
          </p>

          <div className='py-4 bottom-0 lg:absolute lg:-mb-2'>
            <button className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'>
              <Link to='/NossoPlaneta'>Saiba mais</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
