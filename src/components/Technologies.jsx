import React from 'react';

import HTML from '../icons/html.svg';
import CSS from '../icons/css.svg';
import JS from '../icons/js.svg';
import reactIcon from '../icons/react.svg';
import Sass from '../icons/sass.svg';
import Tailwind from '../icons/tailwind.svg';

const Technologies = () => {
  return (
    <div className='anima-right hidden w-[38px] mdlg:flex absolute right-0 top-0 mr-[275px] pt-[75vh] xl:pt-[85vh]'>
      <img src={HTML} alt='HTML icon' className='px-1' />
      <img src={CSS} alt='CSS icon' className='px-1' />
      <img src={JS} alt='JS icon' className='px-1' />
      <img src={reactIcon} alt='React icon' className='px-1' />
      <img src={Sass} alt='Sass icon' className='px-1' />
      <img src={Tailwind} alt='Tailwind icon' className='px-1' />
    </div>
  );
};

export default Technologies;
