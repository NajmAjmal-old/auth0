// Initialize Auth0
const auth0 = new Auth0Client({
    domain: auth0Domain,
    client_id: auth0ClientId,
  });
  
  const btnLogin = document.getElementById('btn-login');
  const btnLogout = document.getElementById('btn-logout');
  
  btnLogin.addEventListener('click', async () => {
    await auth0.loginWithRedirect();
  });
  
  btnLogout.addEventListener('click', async () => {
    await auth0.logout();
  });
  
  // Check if the user is authenticated
  const checkAuth = async () => {
    const isAuthenticated = await auth0.isAuthenticated();
    if (isAuthenticated) {
      btnLogin.style.display = 'none';
      btnLogout.style.display = 'block';
    } else {
      btnLogin.style.display = 'block';
      btnLogout.style.display = 'none';
    }
  };
  
  // Run the initial check
  checkAuth();
  