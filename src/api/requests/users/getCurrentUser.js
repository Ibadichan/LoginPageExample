import APICall from 'helpers/APICall';
import cookies from 'constants/cookies';

async function getCurrentUser() {
  const response = await APICall({
    method: 'GET',
    endpoint: `${process.env.REACT_APP_PROXY_SERVER_URL}/user`,
    headers: {
      Authorization: `Bearer ${cookies.get('auth-token')}`,
    }
  })

  return response;
}

export default getCurrentUser;
