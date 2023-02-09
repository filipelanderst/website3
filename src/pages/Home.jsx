import React from 'react';
import PerfilMobile from '../imgs/perfilMobile.avif';
import PerfilDesktop from '../imgs/perfilDesktop.avif';
import Github from '../icons/github.svg';
import LinkedIn from '../icons/linkedIn.svg';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='anima-fast w-40 mdlg:w-80 mdlg:my-[10vh] mdlg:mx-auto absolute mdlg:static right-0 pt-[4vh] mdlg:-[0vh]'>
        <img src={PerfilMobile} alt='' loading='lazy' className='mdlg:hidden' />
        <img
          src={PerfilDesktop}
          alt=''
          loading='lazy'
          className='hidden mdlg:block rounded-full'
        />
      </div>

      <div className='anima-slow mt-[12vh] mdlg:mt-[15vh]'>
        <h1 className='mt-32 mdlg:mt-[-360px] lg:mt-[-320px] mr-28 mdlg:ml-[-320px] mdlg:text-center absolute mdlg:static right-0 text-5xl font-light text-slate-800'>
          <span
            className='hidden xs:inline-block
        '
          >
            Filipe
          </span>
          Lander
        </h1>
        <h3 className='mt-40 modernline mdlg:-mt-4 mr-28 mdlg:ml-[-360px] mdlg:text-center absolute mdlg:static right-0 text-2xl font-light text-slate-500'>
          S_1frontend{' '}
          <span
            className='modernline hidden xs:inline-block
        '
          >
            developer
          </span>
        </h3>

        <div className='anima-slow mdlg:grid mdlg:grid-cols-2 gap-4 w-6 mdlg:w-16 absolute left-0 top-0 ml-[10vw] mdlg:ml-[50px] pt-[80vh]'>
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

        <div className='hidden mdlg:block grid grid-cols-2 anima-slow absolute right-0 top-0 mr-[275px] pt-[80vh]'>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Home;
