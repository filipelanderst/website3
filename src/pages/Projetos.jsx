import React from 'react';
import { Link } from 'react-router-dom';
import bestMoviesImg from '../imgs/bestMovies(desktop2).avif';
import melhoresCidadesImg from '../imgs/melhoresCidades(desktop2).avif';
import nossoPlanetaImg from '../imgs/nossoPlaneta(desktop1).avif';
import freeCodeCamp5Img from '../imgs/freeCodeCamp5(desktop1).avif';
import freeCodeCamp3Img from '../imgs/freeCodeCamp3(desktop).avif';
import freeCodeCamp1Img from '../imgs/freeCodeCamp1(desktop).avif';

const Projetos = () => {
  function startOfPage() {
    return window.scrollTo(0, 0);
  }

  return (
    <div>
      <h1 className='anima-slow anima limit-title modernline font-thin min-h-[120px] max-h-[120px] text-[3.5rem] text-slate-800 text-center pt-2'>
        Projetos
      </h1>
      <section className='py-20 pt-12 xl:mt-0 -mt-10 mx-auto xl:relative xl:grid xl:grid-cols-2 items-center'>
        <div className=' anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px]   mx-auto mb-8 xl:mb-0 '>
          <Link onClick={startOfPage} to='/BestMovies'>
            <img src={bestMoviesImg} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className='anima-right limit-title text-4xl xl:mt-24 text-slate-800'
              translate='no'
            >
              <Link onClick={startOfPage} to='/BestMovies'>
                Best Movies
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-600 font-normal'>
              jan 23
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-600  '>
            <strong className='font-semibold'>Best Movies</strong> é um projeto
            frontend desenvolvido com a finalidade de oferecer aos usuários uma
            plataforma de avaliação de filmes. Com uma interface intuitiva e de
            fácil navegação, os usuários tem acesso a informações dos top 40
            filmes da{' '}
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

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/BestMovies'
              className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-dark py-20  mt-1 mx-auto xl:relative xl:grid grid-cols-2 items-center'>
        <div className='anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px] mx-auto mb-8 xl:mb-0'>
          <Link onClick={startOfPage} to='/MelhoresCidades'>
            <img src={melhoresCidadesImg} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className=' anima-right limit-title text-4xl xl:mt-24 text-slate-100'
              translate='no'
            >
              <Link onClick={startOfPage} to='/MelhoresCidades'>
                Melhores Cidades
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-300 font-normal'>
              dez 22
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-300  '>
            <strong className='font-semibold text-slate-200'>
              Melhores Cidades
            </strong>{' '}
            é um projeto inspirado no site{' '}
            <a
              href='https://www.worldsbestcities.com/rankings/worlds-best-cities/'
              target='_blank'
            >
              <strong className='text-cyan-300 hover:text-cyan-100 font-semibold '>
                Best Cities
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
              <strong className='text-cyan-300 hover:text-cyan-100 font-semibold '>
                clicando aqui.
              </strong>
            </a>
          </p>

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/MelhoresCidades'
              className='bg-dark text-white font-semibold border-2 border-dark px-12 py-2 rounded-md hover:bg-white hover:text-slate-800'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>
      <section className=' py-20  mt-1 mx-auto xl:relative xl:grid grid-cols-2 items-center'>
        <div className='anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px] mx-auto mb-8 xl:mb-0'>
          <Link onClick={startOfPage} to='/NossoPlaneta'>
            <img src={nossoPlanetaImg} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className='anima-right limit-title text-4xl xl:mt-24 text-slate-800'
              translate='no'
            >
              <Link onClick={startOfPage} to='/NossoPlaneta'>
                Nosso Planeta
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-600 font-normal'>
              Out 22
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-600  '>
            <strong className='font-semibold'>Nosso planeta</strong> foi
            inspirado na série{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold '>
              <a href='https://www.ourplanet.com/pt/' target='_blank'>
                Our Planet.
              </a>
            </strong>{' '}
            Essa série fornece vídeos explicativos e detalhados sobre os
            diferentes climas do planeta terra, as diferentes formas de vida e
            suas peculiaridades. Os vídeos estão disponíveis no{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold'>
              <a href='https://www.youtube.com/' target='_blank'>
                YOUTUBE
              </a>
            </strong>{' '}
            e também na{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold'>
              <a href='https://www.netflix.com/br/' target='_blank'>
                NETFLIX
              </a>
            </strong>
            .
          </p>

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/NossoPlaneta'
              className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-dark py-20  mt-1 mx-auto xl:relative xl:grid grid-cols-2 items-center'>
        <div className='anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px] mx-auto mb-8 xl:mb-0'>
          <Link onClick={startOfPage} to='/StanislavAdamovich'>
            <img src={freeCodeCamp5Img} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className='anima-right limit-title text-4xl xl:mt-24 text-slate-100'
              translate='no'
            >
              <Link onClick={startOfPage} to='/StanislavAdamovich'>
                Stanislav Adamovich
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-300 font-normal'>
              Mai 22
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-300  '>
            <strong className='font-semibold text-slate-200'>
              Stanislav Adamovich
            </strong>{' '}
            é um desenvolvedor fullstack (fictício) que construiu uma landing
            page para mostrar o seu trabalho. Na sua página web ele apresenta ao
            público os seus principais projetos e tecnologias com a qual ele
            trabalha, entre elas estão{' '}
            <strong className='font-semibold text-slate-200'>HTML</strong>,{' '}
            <strong className='font-semibold text-slate-200'>CSS</strong>,{' '}
            <strong className='font-semibold text-slate-200'>Javascript</strong>
            , , <strong className='font-semibold text-slate-200'>React</strong>{' '}
            e <strong className='font-semibold text-slate-200'>Node</strong>.{' '}
            <strong className='font-semibold text-slate-200'>Adamovich</strong>{' '}
            é um desenvolvedor que consegue desenvolver uma aplicação completa
            com as principais tecnologias web do mercado.
          </p>

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/StanislavAdamovich'
              className='bg-dark text-white font-semibold border-2 border-dark px-12 py-2 rounded-md hover:bg-white hover:text-slate-800'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-white py-20 -mt-10 xl:mt-0  mt-1 mx-auto xl:relative xl:grid grid-cols-2 items-center'>
        <div className='anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px] mx-auto mb-8 xl:mb-0'>
          <Link onClick={startOfPage} to='/VioloesCardin'>
            <img src={freeCodeCamp3Img} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className='anima-right limit-title text-4xl xl:mt-24 text-slate-800'
              translate='no'
            >
              <Link onClick={startOfPage} to='/VioloesCardin'>
                {' '}
                Violões Cardin
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-600 font-normal'>
              Mai 22
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-600  '>
            <strong className='font-semibold'>Violoes Cardin</strong> é uma
            empresa (fictícia) de renome internacional. Com décadas de
            experiência na construção de violões de alto nível já serviu os
            melhores músicos do mundo. Com altíssimo padrão de qualidade{' '}
            <strong className='font-semibold'>Cardin</strong> é uma marca de
            confiabilidade incontestável. Sua criadora —{' '}
            <strong className='font-semibold'>Caroline Cardin</strong> — é
            pessoa inconformada que odeia a mesmice. Sempre a procura de
            melhorias fez sua marca ser lembrada mundialmente estando presente
            nos maiores palcos do mundo.
          </p>

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/VioloesCardin'
              className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>
      <section className='bg-dark py-20  mt-1 mx-auto xl:relative xl:grid grid-cols-2 items-center'>
        <div className='anima max-w-[720px] min-h-[175px] xs:min-h-[225px] sm:min-h-[355px] mx-auto mb-8 xl:mb-0'>
          <Link onClick={startOfPage} to='/PgHomenagem'>
            <img src={freeCodeCamp1Img} alt='' loading='lazy' />
          </Link>
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='xl:absolute xl:top-0 xl:-mt-4'>
            <h1
              className='anima-right limit-title text-4xl xl:mt-24 text-slate-100'
              translate='no'
            >
              <Link onClick={startOfPage} to='/PgHomenagem'>
                Página de Homenagem
              </Link>
            </h1>
            <p className='anima-left -mt-1 text-sm text-slate-300 font-normal'>
              Mai 22
            </p>
          </div>

          <p className='anima-right limit-paragraph my-8 text-slate-300  '>
            Uma simples página de homenagem ao grande filósofo{' '}
            <strong className='font-semibold text-slate-200'>
              Arthur Schopenhauer
            </strong>{' '}
            . Esse projeto foi feito como o primeiro desafio para o certificado{' '}
            <strong className='font-semibold text-slate-200'>
              Web Design Responsivo
            </strong>{' '}
            da{' '}
            <strong className='text-cyan-300 hover:text-cyan-100 font-semibold'>
              <a href='https://www.freecodecamp.org/'>freeCodeCamp</a>
            </strong>{' '}
          </p>

          <div className='anima-left xl:pb-24 bottom-0 xl:absolute xl:-mb-2'>
            <Link
              onClick={startOfPage}
              to='/PgHomenagem'
              className='bg-dark text-white font-semibold border-2 border-dark px-12 py-2 rounded-md hover:bg-white hover:text-slate-800'
            >
              Saiba mais →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetos;
