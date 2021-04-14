import APICall from 'helpers/APICall';

async function authenticateUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `${process.env.REACT_APP_API_URL}/proxy/user/auth`,
    payload,
  })

  return response;
}

export default authenticateUser;
