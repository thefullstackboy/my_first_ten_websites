import React, { useState } from 'react';


function Showhide() {

  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  return (
    <div className="container">
      <h3>Show and hide password in React </h3>

      <div className="pwd-container">
        <input
          name="pwd"
          placeholder="Enter Password"
          type={isRevealPwd ? "text" : "password"}
          value={pwd}
          onChange={e => setPwd(e.target.value)}
        />
        <button  
          onClick={() => setIsRevealPwd(prevState => !prevState)}
        >
        {isRevealPwd ? "Hide password" : "Show password"}
        </button>
      </div>

    </div>
  );
}

export default Showhide;