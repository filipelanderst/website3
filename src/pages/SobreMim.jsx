import React from 'react';

const SobreMim = () => {
  return (
    <div className='sobremim-container'>
      <h1 className='title'>About me...</h1>

      <p className='mt-4 px-4  text-slate-600  '>
        Tenho 35 anos e comecei meus estudos em frontend em janeiro de 2022. Sei
        trabalhar com <strong>HTML</strong>, <strong>CSS</strong>,{' '}
        <strong>Javascript</strong>, <strong>React</strong>,{' '}
        <strong>Styled-Components</strong>, <strong>Tailwind</strong> e{' '}
        <strong>Sass</strong>, tendo projetos em meu{' '}
        <strong className='border-b-2 border-red-500'>
          {' '}
          <a
            href='https://github.com/flx-lander7'
            target='_blank'
            translate='no'
          >
            Github
          </a>
        </strong>{' '}
        usando essas tecnologias. Também fiz projetos com <strong>API</strong>{' '}
        que utilizam dados de um arquivo <strong>JSON</strong>. Atualmente estou
        aprofundando meus conhecimentos em <strong>React</strong> e estudando
        design <strong>(UI/UX) </strong> para dar uma melhor aparência aos meus
        trabalhos. No futuro pretendo estudar <strong>Node</strong>,{' '}
        <strong>MongDB</strong> e <strong>React Native</strong> para me tornar
        um desenvolvedor Fullstack sabendo trabalhar em todas as pontas do
        processo e tendo a capacidade de entregar uma solução completa. Você
        pode entrar em contato comigo através do meu{' '}
        <strong className='border-b-2 border-red-500'>
          {' '}
          <a
            href='https://linkedin.com/in/filipelander'
            target='_blank'
            translate='no'
          >
            LinkedIn.
          </a>
        </strong>{' '}
        .
      </p>
    </div>
  );
};

export default SobreMim;
