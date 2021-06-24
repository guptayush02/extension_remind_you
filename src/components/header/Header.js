import { GoogleLogout } from 'react-google-login';
import { withRouter } from "react-router-dom";

const Header = withRouter(({ history, title, back }) => {

  const logout = async() => {
    localStorage.removeItem('me');
    localStorage.removeItem('events');
    window.location.pathname = "/"
  }

  const goBack = async() => {
    history.push("/calender-list");
  }

  return (
    <div>
      {title}
      {
        back && <div onClick={() => goBack()}>Back</div>
      }
      <GoogleLogout
        clientId="342904767681-rq5imdjo21kc7v57ujb3nbfq99dau4pd.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      />
    </div>
  )
})

export default Header;
