import React from 'react';

import bestMoviesImg from '../imgs/bestMovies(desktop2).avif';

const Projetos = () => {
  return (
    <div className='projetos-container'>
      <h1 className='title -ml-60 pb-8'>S_1projetos</h1>
      <div className='bg-slate-100 mx-auto min-h-fit lg:relative lg:grid grid-cols-2 items-center'>
        <div className='desktop-img '>
          <img src={bestMoviesImg} alt='' />
        </div>

        <div className='px-8 max-w-max-w-screen-md mx-auto'>
          <div className='lg:absolute lg:top-0 lg:-mt-4'>
            <h1 className='text-4xl my-6 text-slate-800'>Best Movies</h1>
            <p className='-mt-6 text-sm text-slate-600 '>fevereiro 2023</p>
          </div>

          <p className=' limit-paragraph mt-2 font-light text-md text-slate-600  '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            facilis magnam, quibusdam ut optio voluptatem, officiis quae natus
            expedita, eligendi sequi nobis sed repudiandae ducimus atque omnis
            nesciunt autem exercitationem est necessitatibus! Molestiae rem
            corrupti libero fugiat amet odit molestias itaque quas voluptatum
            quod perferendis neque, enim autem fuga cupiditate aliquid officiis
            provident sapiente veniam similique eos dolore totam vel in? At
            consectetur aspernatur unde officiis exercitationem maxime nulla
            praesentium odio qui repellendus fugiat atque tempora ut culpa id,
            deleniti repellat delectus harum ducimus quas! Neque eaque nemo
            possimus dignissimos pariatur. Quo eveniet mollitia nulla ducimus
            provident, ut itaque fugiat fugit maxime ipsam est voluptate
            quisquam, nobis quod necessitatibus accusantium commodi? Facere enim
            quasi itaque nobis? Dolor ratione necessitatibus perferendis illum
            tempore, delectus iusto amet modi itaque asperiores quam quaerat
            facilis vero? Voluptatum ipsa incidunt rem, quam quas,
            necessitatibus facere tempora qui animi architecto ut est illo
            quibusdam rerum cum accusamus excepturi consequuntur quisquam velit
            fugit! Alias perferendis, tempore minima culpa voluptatem doloremque
            veniam consequuntur. Expedita, labore. Sequi, inventore animi quam
            repudiandae aspernatur quasi exercitationem numquam aut eveniet,
            labore id quisquam doloremque laboriosam repellat tenetur et ipsam
            quaerat! Consequuntur debitis, cum deleniti architecto harum
            delectus. Deleniti adipisci aspernatur sunt non.
          </p>

          <div className='py-4 bottom-0 lg:absolute lg:-mb-2'>
            <button className='bg-white text-slate-900 font-semibold border-2 border-slate-900 px-12 py-2 rounded-md hover:bg-slate-900 hover:text-white'>
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
