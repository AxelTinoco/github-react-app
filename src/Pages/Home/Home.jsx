import React, { useState } from "react";

//Components
import UserForm from "../../Components/Home/Form/UserForm";
import GithubUser from "../../Components/Custom/GithubUser/GithubUser";
import Loader from "../../Components/Custom/Loader/Loader";

const Home = () => {
  //State
  const [userName, setUserName] = useState("");
  const [userInformation, setUserInformation] = useState(null);
  const [loader, setLoader] = useState(false);

  //Funciones
  const handleUserName = ({ value }) => {
    
      setUserName(value);
  };

  
  const handleSearchUser = async e => {
    e.preventDefault();
    setUserInformation(null);
    setLoader(true);
    const API = `https://api.github.com/users/${userName}`;
    const response = await fetch(API);
    const result = await response.json();
    setUserInformation(result);
    setLoader(false);
    if (typeof(userInformation?.login) === undefined) {
      setUserInformation(null)
      console.log("error")
    }
  };

  


  return (
    <div className="w-[95%] sm:w-4/5 flex flex-col  mx-auto mt-10 h-4/5 ">
      <UserForm
        handleUserName={handleUserName}
        handleSearchUser={handleSearchUser}
      />
      <div className="text-center mt-10 rounded-3xl h-3/4 p-2">
        {userInformation ? (
          <GithubUser
             avatar={userInformation?.avatar_url}
             github={userInformation?.html_url}
            // github_name={userInformation?.login}
            // name={userInformation?.name}
            public_repos={userInformation?.public_repos}
            // followers={userInformation?.followers}
            // following={userInformation?.following}
            {...userInformation}
          />
        ) : null}
      </div>

      {loader && <Loader />}
    </div>
  );
};

export default Home;
