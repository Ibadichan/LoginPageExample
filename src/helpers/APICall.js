import superagent from 'superagent';

function APICall(params) {
  const {
    method,
    endpoint,
    query,
    payload,
    headers,
  } = params;

  let request = superagent[method.toLowerCase()](endpoint);

  if (query) {
    request = request.query(query);
  }

  if (payload) {
    request = request.send(payload);
  }

  if (headers) {
    request = request.set(headers);
  }

  return request;
}

export default APICall;
