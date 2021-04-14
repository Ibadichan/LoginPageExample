import APICall from 'helpers/APICall';

async function registerUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `/proxy/user`,
    payload,
  })

  return response;
}

export default registerUser;
