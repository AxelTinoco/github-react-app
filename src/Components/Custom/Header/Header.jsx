import { useContext, useState } from "react";
import DarkModeContext from "../../../context/DarkModeContext";
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation1.json'
//Styles
import "./Header.styles.css";
import 'animate.css';

const Header = () => {
  const {darkMode,setdarkMode} = useContext(DarkModeContext)
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    animationData:animationData,
    autoplay: false, 
    rendererSettings: {
      preserveAspectRatio:"xMidYMid slice"
    }
  };

  const handleChangeMode = () => {
    const reverseAnimation = -1;
    const normalAnimation = 1;
    
    setAnimationState({
      ...animationState,
      isStopped: false,
      direction: animationState.direction === normalAnimation 
        ? reverseAnimation
        : normalAnimation,
    })
     setdarkMode(!darkMode)
   
  }


  return (
    
     <header className="h-16 flex justify-between items-center z "> 
       <h2 className="ml-10 text-2xl tablet:text-3xl	animate__animated animate__bounceInDown">Github API React</h2>

    
    <div className='flex w-1/2 h-full'>
    <button  onClick={handleChangeMode}
    className='relative z-40 h-full w-full flex'> 
      <Lottie
            style={{display: 'flex'}}
            options={defaultOptions}
            height={'100%'}
            width={'100%'}
            direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}/>
      </button> 
    </div>

   
   
    
    </header>
    
  );
};

export default Header;
