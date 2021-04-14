import APICall from 'helpers/APICall';

async function registerUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `${process.env.REACT_APP_API_URL}/proxy/user`,
    payload,
  })

  return response;
}

export default registerUser;
