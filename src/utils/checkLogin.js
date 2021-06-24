const checkLogin = () => {
  const me = localStorage.getItem('me');
  if (me) return true;
  return false;
}

export default checkLogin;