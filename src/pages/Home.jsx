import PerfilMobile from '../imgs/perfilMobile.avif';
import PerfilDesktop from '../imgs/perfilDesktop.avif';
import Technologies from '../components/Technologies';
import LinkedInGithub from '../components/LinkedInGithub';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='anima w-40 min-h-[320px] mdlg:min-h-[350px] mdlg:w-80 mdlg:my-[10vh] mdlg:mx-auto absolute mdlg:static right-0 pt-[4vh] xl:pt-[10vh] mdlg:-[0vh]'>
        <img src={PerfilMobile} alt='' className='mdlg:hidden' />
        <img
          src={PerfilDesktop}
          alt=''
          className='hidden mdlg:block rounded-full'
        />
      </div>
      <div className='mt-[12vh] mdlg:mt-[15vh]'>
        <h1 className='anima-left mt-32 mdlg:mt-[-360px] lg:mt-[-320px] mr-28 mdlg:ml-[-320px] mdlg:text-center absolute mdlg:static right-0 text-5xl font-light text-slate-800'>
          <span
            className='hidden xs:inline-block
          '
          >
            Filipe
          </span>
          Lander
        </h1>
        <h3 className='anima-right mt-40 modernline mdlg:-mt-4 mr-28 mdlg:ml-[-360px] mdlg:text-center absolute mdlg:static right-0 text-2xl font-light text-slate-600'>
          S_1frontend{' '}
          <span
            className='modernline hidden xs:inline-block
          '
          >
            developer
          </span>
        </h3>
        <div>
          <LinkedInGithub />
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Home;
