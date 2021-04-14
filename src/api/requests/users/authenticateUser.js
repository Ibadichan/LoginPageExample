import APICall from 'helpers/APICall';

async function authenticateUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `${process.env.REACT_APP_PROXY_SERVER_URL}/user/auth`,
    payload,
  })

  return response;
}

export default authenticateUser;
