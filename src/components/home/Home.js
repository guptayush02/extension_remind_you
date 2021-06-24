import React, { useEffect } from "react";
import { GoogleLogin } from 'react-google-login';

function Home() {

  const responseGoogle = async(response) => {
    if (response.error) {
      return console.log("google login error", response.error)
    }
    const me = {g: response};
    localStorage.setItem('me', JSON.stringify(me));
    window.location.pathname = "/calender-list"
  }

  return (
    <GoogleLogin
      clientId="342904767681-rq5imdjo21kc7v57ujb3nbfq99dau4pd.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      scope={"https://www.googleapis.com/auth/calendar"}
    />
  )  
}

export default Home;
