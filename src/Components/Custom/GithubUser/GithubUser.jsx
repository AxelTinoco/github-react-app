// import { useSpring, animated } from 'react-spring'
import { Link } from "react-router-dom";
import {FaGitAlt,FaGithubSquare} from "react-icons/fa"
import {BsFillPersonCheckFill,BsTwitter,BsGeoAltFill,BsBriefcaseFill} from "react-icons/bs"
import {GoOrganization} from "react-icons/go"
//Styles


const GithubUser = ({ 
  avatar,
  github,
  login,
  name,
  company,
  location,
  public_repos,
  twitter_username,
  followers,
  following}) => {




  return (
    <div className=" p-2 m-auto border rounded-2xl animate__animated animate__bounceInUp animate__slow">
      <div className="flex justify-between items-center p-2 w-full ">
       <div className='flex border border-black rounded-full'>
       <img src={avatar} alt={github} className="w-24 h-24 rounded-full border shadow-2xl" />
       </div>
       <div>
       <h2 className='text-2xl font-black flex items-center'>{login}<FaGithubSquare className='mx-2'/> </h2>
       <h3>{name}</h3>
       </div>
      </div>

      <div className="flex flex-col space-y-5  items-center w-full">
       <div className="flex rounded-2xl bg-[#14213d] p-2 w-full flex-wrap justify-around">
       <p className='inline-flex flex-col text-blue-400'>
          
          <span className="text-base font-bold flex items-center text-white"><FaGitAlt className='mr-2'/> Repos</span>{public_repos}
         
        </p>
        <p className='inline-flex flex-col  text-blue-400'>
          <Link to={`/followers/${login}`} className='inline-flex flex-col'>
            <span className="text-base flex font-bold text-white items-center"><GoOrganization  className='mr-2'/>Followers </span>
            {followers}
          </Link>
        </p>
        <p className='inline-flex text-blue-400 flex-col '>
          <span className=" text-base flex font-bold	text-white items-center"><BsFillPersonCheckFill  className='mr-2'/> Following</span>
          {following}
        </p>
       </div>

       <div className="flex space-y-5  items-center w-full">
       <div className="flex rounded-2xl bg-[#14213d] p-2 w-full flex-wrap justify-around">
       <p className='inline-flex flex-col text-blue-400'>
          
          <span className="text-base font-bold flex items-center text-white"><BsGeoAltFill className='mr-2'/>Ubication</span>{location}
         
        </p>
        <p className='inline-flex flex-col  text-blue-400'>
          <Link to={`/followers/${login}`} className='inline-flex flex-col'>
            <span className="text-base flex font-bold text-white items-center"><BsTwitter  className='mr-2'/>Twitter </span>
            {twitter_username}
          </Link>
        </p>
        <p className='inline-flex text-blue-400 flex-col '>
          <span className=" text-base flex font-bold	text-white items-center"><BsBriefcaseFill  className='mr-2'/>Company</span>
          {company}
        </p>
       </div>

      
      </div>
      </div>
    </div>
  );
};

export default GithubUser;
