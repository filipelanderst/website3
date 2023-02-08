import React from 'react';
import PerfilMobile from '../imgs/perfilMobile.avif';
import PerfilDesktop from '../imgs/perfilDesktop.avif';
import Github from '../icons/github.svg';
import LinkedIn from '../icons/linkedIn.svg';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='perfil-img anima-fast'>
        <img src={PerfilMobile} alt='' loading='lazy' className='mdlg:hidden' />
        <img
          src={PerfilDesktop}
          alt=''
          loading='lazy'
          className='hidden mdlg:block'
        />
      </div>

      <div className='anima-slow'>
        <h1 className='mt-48 mdlg:mt-[-320px] mr-28 mdlg:ml-[-320px] mdlg:text-center absolute mdlg:static right-0 text-5xl font-light text-slate-800'>
          <span
            className='hidden xs:inline-block
        '
          >
            Filipe
          </span>
          Lander
        </h1>
        <h3 className='modernline mt-56 mdlg:-mt-4 mr-28 mdlg:ml-[-360px] mdlg:text-center absolute mdlg:static right-0 text-2xl font-light text-slate-500'>
          S_1frontend{' '}
          <span
            className='modernline hidden xs:inline-block
        '
          >
            developer
          </span>
        </h3>

        <div className='hidden xs:block mdlg:grid mdlg:grid-cols-2 gap-4 anima-slow w-6 mdlg:w-16 absolute left-0 bottom-0 ml-[5vh] mdlg:ml-[50px] pb-[20vh]'>
          <a
            href='https://github.com/flx-lander7'
            target='_blank'
            translate='no'
          >
            <img src={Github} alt='github icon' className='ml-4 py-2' />
          </a>

          <a
            href='https://linkedin.com/in/filipelander'
            target='_blank'
            translate='no'
          >
            <img src={LinkedIn} alt='linkedIn icon' className='ml-4 py-2' />
          </a>
        </div>

        <div className='hidden mdlg:block grid grid-cols-2 anima-slow absolute right-0 bottom-0 mr-[275px] mr-[40vh] pb-[20.6vh]'>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Home;
