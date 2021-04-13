import APICall from 'helpers/APICall';

async function registerUser(payload) {
  const response = await APICall({
    method: 'POST',
    endpoint: `${process.env.REACT_APP_PROXY_SERVER_URL}/user`,
    payload,
  })

  return response;
}

export {
  registerUser,
};
