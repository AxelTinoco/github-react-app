
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext } from 'react';
//Components
import Header from "../Components/Custom/Header/Header";
import DarkModeContext from '../context/DarkModeContext';


const MainLayout = props => {
//TODO:HACER EL DARKMODE CON ESTE COLOR dark:bg-[#14213d] dark:text-white
  
const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'h-screen w-screen flex bg-[#14213d] text-white' : 'h-screen w-screen flex bg-white text-black'}>

      <div className='absolute flex z-0 w-screen h-screen filter blur-md justify-center'>
        <Player
          style={{ width: '100%', height: '100%', display: 'flex' }}
          autoplay
          loop
          speed='1'
          mode="normal"
          src={'https://assets6.lottiefiles.com/packages/lf20_7nQsdh.json'}

        >

        </Player>
      </div>

      <div className='z-20 relative w-full h-full'>
        <Header />
        <hr />
        {props.children}
      </div>
    </div>
  );
};

export default MainLayout;
