import React from 'react';
import Github from '../icons/github.svg';
import LinkedIn from '../icons/linkedIn.svg';

const LinkedInGithub = () => {
  return (
    <div className='anima-bottom mdlg:grid mdlg:grid-cols-2 gap-4 w-6 mdlg:w-16 absolute left-0 top-0 ml-[10vw] mdlg:ml-[50px] pt-[75vh]'>
      <a href='https://github.com/flx-lander7' target='_blank' translate='no'>
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
  );
};

export default LinkedInGithub;
