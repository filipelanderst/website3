import React from 'react';
import Perfil from '../imgs/perfil.avif';

import Github from '../icons/github.svg';
import LinkedIn from '../icons/linkedIn.svg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='perfil-img anima-fast'>
        <img src={Perfil} alt='' loading='lazy' />
      </div>

      <div className='anima-slow'>
        <h1 className='mt-48 mr-28 absolute right-0 text-5xl font-light text-slate-800'>
          <span
            className='hidden xs:inline-block
        '
          >
            Filipe
          </span>
          Lander
        </h1>
        <h3 className='modernline mt-56 mr-28 absolute right-0 text-2xl font-light text-slate-800'>
          S_1frontend{' '}
          <span
            className='modernline hidden xs:inline-block
        '
          >
            developer
          </span>
        </h3>

        <div className='anima-slow w-6 absolute left-0 bottom-0 mx-6 pb-24'>
          <img src={Github} alt='' className='ml-4 py-2' />
          <img src={LinkedIn} alt='' className='ml-4 py-2' />
        </div>
      </div>
    </div>
  );
};

export default Home;
