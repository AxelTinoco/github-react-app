import React from "react";



const UserForm = ({ handleUserName, handleSearchUser }) => {
  return (
    <form
      className="w-full text-center animate__animated animate__bounceInLeft animate__slow 
      bg-black rounded-3xl self-start shadow-2xl"
      onSubmit={e => handleSearchUser(e)}
    >
      <input
        type="text"
        placeholder="User name"
        className="p-4 w-2/3 rounded-l-3xl"
        onChange={({ target }) => handleUserName(target)}
      />
      <input
        type="submit"
        value="Search !"
        className="p-4 w-1/3 bg-[#adb5bd] hover:bg-black text-white hover:text-white rounded-r-3xl cursor-pointer"
      />
    </form>
  );
};

export default UserForm;
