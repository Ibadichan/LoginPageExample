import APICall from 'helpers/APICall';

async function authenticateUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `/proxy/user/auth`,
    payload,
  })

  return response;
}

export default authenticateUser;
